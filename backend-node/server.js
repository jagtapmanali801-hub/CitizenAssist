// Citizen Assist - optional Node.js API demonstration.
// This is added separately so the existing static website remains unchanged.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3000);
const ROOT = path.join(__dirname, '..');
const CSV_PATH = path.join(ROOT, 'ALL_160_SERVICES_AND_PORTALS.csv');

function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        quoted = !quoted;
      }
    } else if (ch === ',' && !quoted) {
      fields.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

function loadServices() {
  if (!fs.existsSync(CSV_PATH)) return [];
  const lines = fs.readFileSync(CSV_PATH, 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = parseCsvLine(lines[0]).map(h => h.trim());
  return lines.slice(1).map(line => {
    const values = parseCsvLine(line);
    const item = {};
    headers.forEach((header, i) => item[header] = (values[i] || '').trim());
    return item;
  });
}

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/api/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({
      status: 'ok',
      app: 'Citizen Assist',
      message: 'Node.js API is running'
    }));
  }

  if (req.method === 'GET' && req.url === '/api/services') {
    const services = loadServices();
    res.writeHead(200);
    return res.end(JSON.stringify({
      count: services.length,
      services
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    error: 'Not found',
    availableEndpoints: ['GET /api/health', 'GET /api/services']
  }));
});

server.listen(PORT, () => {
  console.log(`Citizen Assist Node.js API running at http://localhost:${PORT}`);
  console.log('Test: http://localhost:' + PORT + '/api/health');
  console.log('Services: http://localhost:' + PORT + '/api/services');
});
