# Optional Node.js and PHP examples

The existing Citizen Assist website files were intentionally left unchanged. These are separate, optional examples added to the project folder so you can demonstrate basic Node.js and PHP code without risking the current website.

## Node.js API demo

Requirements: install Node.js on your computer.

1. Open a terminal in the `backend-node` folder.
2. Run `node server.js` (or `npm start`).
3. Open `http://localhost:3000/api/health` to check the API.
4. Open `http://localhost:3000/api/services` to see the services read from the existing `ALL_160_SERVICES_AND_PORTALS.csv` file.

This server uses Node.js built-in modules and needs no `npm install`. Keep the CSV file in the project root, where it already is.

## PHP form-processing demo

Requirements: install PHP, or use a local PHP-enabled stack such as XAMPP.

1. Start the PHP server from the project root:
   `php -S localhost:8000`
2. Send a POST request to `http://localhost:8000/backend-php/process-enquiry.php` with form fields `name`, `email`, and `message`.
3. Example with curl:
   `curl -X POST -F "name=Test User" -F "email=test@example.com" -F "message=Hello" http://localhost:8000/backend-php/process-enquiry.php`

The PHP example validates the fields and returns JSON. It does not send email or store personal data.

## Important accuracy note

The main website remains the same static HTML/CSS/JavaScript site. These Node.js and PHP examples are separate demonstrations and are **not connected to the website's existing user interface**. Do not claim the live site depends on these technologies unless you later integrate and test them. The current static website can still be opened as before.
