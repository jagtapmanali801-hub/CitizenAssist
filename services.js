(function(){
const AAPLE='https://aaplesarkar.mahaonline.gov.in/en/Login/';
const ONLINE='https://aaplesarkar.mahaonline.gov.in/en/CommonForm/ViewAllServices';
const PARIVAHAN='https://parivahan.gov.in/';
const SARATHI='https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do';
const VAHAN='https://vahan.parivahan.gov.in/vahanservice/vahan/ui/statevalidation/homepage.xhtml';
const MAHABHUMI='https://mahabhumi.gov.in/Mahabhumilink/';
const BHULEKH='https://bhulekh.mahabhumi.gov.in/';
const LABOUR='https://lms.mahaonline.gov.in/Login/Login';
const MAHABOCW='https://mahabocw.in/';
const POLICE='https://citizen.mahapolice.gov.in/Citizen/Login.aspx';
const MAHAGST='https://www.mahagst.gov.in/';
const PWD='https://pwd.maharashtra.gov.in/en/';
const HEALTH='https://arogya.maharashtra.gov.in/';
const MEDICAL='https://medical.maharashtra.gov.in/';
const WATER='https://water.maharashtra.gov.in/en/';
const WRD='https://wrd.maharashtra.gov.in/';
const MPCB='https://www.ecmpcb.in/';
const DMA='https://mahadma.maharashtra.gov.in/en/services/';
const TOURISM='https://maharashtratourism.gov.in/';
const UIDAI='https://uidai.gov.in/';
const MYAADHAAR='https://myaadhaar.uidai.gov.in/';
const PAN='https://www.incometaxindia.gov.in/tax-services/apply-for-pan';
const PASSPORT='https://www.passportindia.gov.in/';
const FINANCE='https://finance.maharashtra.gov.in/en/';
const COOP='https://mahasahakar.maharashtra.gov.in/en/';
const LAW='https://lj.maharashtra.gov.in/en/';
const SJSA='https://sjsa.maharashtra.gov.in/en/';
const FOREST='https://mahaforest.gov.in/';
const ENERGY='https://energy.maharashtra.gov.in/en/';
const INDUSTRY='https://industry.maharashtra.gov.in/en';
const RDD='https://rdd.maharashtra.gov.in/';
const MAITRI='https://maitri.maharashtra.gov.in/';
const MAHADBT='https://mahadbt.maharashtra.gov.in/';
const DIGILOCKER='https://www.digilocker.gov.in/';
const GST='https://www.gst.gov.in/';
const ESHRAM='https://eshram.gov.in/';
const VOTER='https://voters.eci.gov.in/';
const VOTER_SEARCH='https://electoralsearch.eci.gov.in/';
const PENSION='https://sjsa.maharashtra.gov.in/en/provider/special-assistance/';
const categories={
'revenue':{label:'Certificates & Revenue',icon:'📜',portal:ONLINE,personas:['citizen','student','worker'],difficulty:'Easy',keywords:['certificate','प्रमाणपत्र','दाखला','महसूल','revenue']},
'family':{label:'Birth, Death & Family',icon:'👨‍👩‍👧',portal:AAPLE,personas:['citizen'],difficulty:'Easy',keywords:['birth','death','marriage','जन्म','मृत्यू','विवाह','परिवार']},
'education':{label:'Student & Education',icon:'🎓',portal:'https://education.maharashtra.gov.in/',personas:['student'],difficulty:'Easy',keywords:['student','scholarship','education','विद्यार्थी','शिष्यवृत्ती','शिक्षण']},
'labour':{label:'Worker & Labour',icon:'🧰',portal:LABOUR,personas:['worker'],difficulty:'Medium',keywords:['worker','labour','कामगार','श्रमिक','employment']},
'agriculture':{label:'Agriculture & Farmer',icon:'🌾',portal:'https://krishi.maharashtra.gov.in/',personas:['citizen','worker'],difficulty:'Medium',keywords:['farmer','agriculture','शेतकरी','कृषी']},
'land':{label:'Land & Property',icon:'🏡',portal:MAHABHUMI,personas:['citizen'],difficulty:'Medium',keywords:['land','property','भूमी','जमीन','मालमत्ता']},
'transport':{label:'Driving & Transport',icon:'🚗',portal:PARIVAHAN,personas:['citizen','student','worker'],difficulty:'Medium',keywords:['driving','licence','vehicle','transport','वाहन','परवाना']},
'police':{label:'Police & Home',icon:'🛡️',portal:POLICE,personas:['citizen','worker'],difficulty:'Medium',keywords:['police','home','verification','पोलीस','चरित्र','परवानगी']},
'business':{label:'Business & Tax',icon:'💼',portal:MAHAGST,personas:['citizen','worker'],difficulty:'Advanced',keywords:['business','tax','gst','व्यवसाय','कर']},
'pwd':{label:'Public Works',icon:'🏗️',portal:PWD,personas:['citizen','worker'],difficulty:'Advanced',keywords:['road','noc','pipeline','contractor','रस्ता','परवानगी']},
'health':{label:'Health Services',icon:'🏥',portal:HEALTH,personas:['citizen'],difficulty:'Medium',keywords:['health','medical','आरोग्य','वैद्यकीय']},
'water':{label:'Water Services',icon:'💧',portal:WATER,personas:['citizen','worker'],difficulty:'Medium',keywords:['water','sanitation','पाणी','जल']},
'environment':{label:'Environment',icon:'🌿',portal:MPCB,personas:['citizen','worker'],difficulty:'Advanced',keywords:['environment','pollution','पर्यावरण','प्रदूषण']},
'urban':{label:'Urban Development',icon:'🏙️',portal:DMA,personas:['citizen','worker'],difficulty:'Advanced',keywords:['municipal','building','urban','नगर','बांधकाम']},
'tourism':{label:'Tourism & Cultural',icon:'🎭',portal:TOURISM,personas:['citizen'],difficulty:'Medium',keywords:['tourism','cultural','कार्यक्रम','पर्यटन','संस्कृती']},
'voter':{label:'Voter & Electoral Services',icon:'🗳️',portal:VOTER,personas:['citizen'],difficulty:'Easy',keywords:['voter','voter id','epic','electoral roll','मतदार','मतदाता','निवडणूक','election']},
'welfare':{label:'Pension & Social Assistance',icon:'🤝',portal:PENSION,personas:['citizen'],difficulty:'Medium',keywords:['pension','welfare','social assistance','निवृत्तीवेतन','पेन्शन','पेंशन','सामाजिक सहाय्य']},
'other':{label:'Other Government Services',icon:'🏛️',portal:'https://www.maharashtra.gov.in/',personas:['citizen','student','worker','others'],difficulty:'Medium',keywords:['government','service','शासकीय','सेवा']}
};
const groups={
revenue:[
['Age, Nationality and Domicile Certificate','वय, राष्ट्रीयत्व आणि अधिवास प्रमाणपत्र','आयु, राष्ट्रीयता और अधिवास प्रमाणपत्र'],
['Caste Certificate','जात प्रमाणपत्र','जाति प्रमाणपत्र'],['Income Certificate','उत्पन्न प्रमाणपत्र','आय प्रमाणपत्र'],['Non-Creamy Layer Certificate','नॉन-क्रीमी लेयर प्रमाणपत्र','नॉन क्रीमी लेयर प्रमाणपत्र'],['Temporary Residence Certificate','तात्पुरता रहिवास प्रमाणपत्र','अस्थायी निवास प्रमाणपत्र'],['Senior Citizen Certificate','ज्येष्ठ नागरिक प्रमाणपत्र','वरिष्ठ नागरिक प्रमाणपत्र'],['Solvency Certificate','सॉल्व्हन्सी प्रमाणपत्र','सॉल्वेंसी प्रमाणपत्र'],['Certified Copy','प्रमाणित प्रत','प्रमाणित प्रति'],['Small Land Holder Farmer Certificate','अल्पभूधारक शेतकरी प्रमाणपत्र','लघु भूमिधारक किसान प्रमाणपत्र'],['Landless Certificate','भूमिहीन प्रमाणपत्र','भूमिहीन प्रमाणपत्र'],['Agriculturist Certificate','शेतकरी प्रमाणपत्र','कृषक प्रमाणपत्र'],['General Affidavit','सामान्य प्रतिज्ञापत्र','सामान्य शपथपत्र'],['Certificate of Residence in Hilly Area','डोंगरी भागातील रहिवास प्रमाणपत्र','पहाड़ी क्षेत्र निवास प्रमाणपत्र'],['Cultural Programme Permission','सांस्कृतिक कार्यक्रम परवानगी','सांस्कृतिक कार्यक्रम अनुमति'],['Minor Mineral Extraction Permission for Industrial Purpose','औद्योगिक कारणासाठी गौण खनिज उत्खनन परवानगी','औद्योगिक प्रयोजन हेतु गौण खनिज अनुमति']
],
family:[['Birth Certificate','जन्म प्रमाणपत्र','जन्म प्रमाणपत्र'],['Death Certificate','मृत्यू प्रमाणपत्र','मृत्यु प्रमाणपत्र'],['Marriage Registration Certificate','विवाह नोंदणी प्रमाणपत्र','विवाह पंजीकरण प्रमाणपत्र'],['Below Poverty Line Certificate','दारिद्र्यरेषेखालील प्रमाणपत्र','गरीबी रेखा प्रमाणपत्र'],['No Dues Certificate','ना-देय प्रमाणपत्र','नो ड्यूज प्रमाणपत्र'],['Old Age Certificate for Niradhar','निराधार वृद्धत्व प्रमाणपत्र','निराधार वृद्धावस्था प्रमाणपत्र'],['Assessment Certificate','मूल्यांकन प्रमाणपत्र','मूल्यांकन प्रमाणपत्र'],['Family Member Certificate Guidance','कुटुंब सदस्य प्रमाणपत्र मार्गदर्शन','परिवार सदस्य प्रमाणपत्र मार्गदर्शन']],
education:[['MahaDBT Scholarship Guidance','महाDBT शिष्यवृत्ती मार्गदर्शन','महाDBT छात्रवृत्ति मार्गदर्शन'],['Post-Matric Scholarship Guidance','मॅट्रिकोत्तर शिष्यवृत्ती','पोस्ट मैट्रिक छात्रवृत्ति'],['Student Certificate Guidance','विद्यार्थी प्रमाणपत्र मार्गदर्शन','विद्यार्थी प्रमाणपत्र मार्गदर्शन'],['DigiLocker Education Documents','DigiLocker शैक्षणिक कागदपत्रे','DigiLocker शिक्षा दस्तावेज'],['Exam Portal Guidance','परीक्षा पोर्टल मार्गदर्शन','परीक्षा पोर्टल मार्गदर्शन'],['Education Scheme Discovery','शैक्षणिक योजना शोध','शिक्षा योजना खोज'],['Bonafide / Leaving Certificate Guidance','बोनाफाईड / शाळा सोडल्याचा दाखला मार्गदर्शन','बोनाफाइड / स्कूल लीविंग मार्गदर्शन'],['EBC / Fee Reimbursement Guidance','EBC / फी परतावा मार्गदर्शन','EBC / फीस प्रतिपूर्ति मार्गदर्शन']],
labour:[['e-Shram Registration Guidance','ई-श्रम नोंदणी','ई-श्रम पंजीकरण'],['Registration of Shop and Establishment','दुकान व आस्थापना नोंदणी','दुकान एवं प्रतिष्ठान पंजीकरण'],['Renewal of Shop and Establishment Registration','दुकान व आस्थापना नूतनीकरण','दुकान एवं प्रतिष्ठान नवीनीकरण'],['Registration for Principal Employer','मुख्य नियोक्ता नोंदणी','प्रधान नियोक्ता पंजीकरण'],['Contract Labour Licence - New','कंत्राटी कामगार परवाना - नवीन','ठेका श्रम लाइसेंस - नया'],['Contract Labour Licence - Renewal','कंत्राटी कामगार परवाना - नूतनीकरण','ठेका श्रम लाइसेंस - नवीनीकरण'],['Beedi & Cigar Licence','बीडी व सिगार परवाना','बीड़ी एवं सिगार लाइसेंस'],['Factory Registration','कारखाना नोंदणी','कारखाना पंजीकरण'],['Factory Renewal','कारखाना नूतनीकरण','कारखाना नवीनीकरण'],['Factory Plan Approval','कारखाना आराखडा मंजुरी','कारखाना योजना अनुमोदन'],['Building & Other Construction Worker Registration','इमारत व इतर बांधकाम कामगार नोंदणी','भवन एवं अन्य निर्माण श्रमिक पंजीकरण'],['Motor Transport Workers Registration','मोटार वाहतूक कामगार नोंदणी','मोटर परिवहन श्रमिक पंजीकरण'],['Boiler Registration & Inspection','बॉयलर नोंदणी व तपासणी','बॉयलर पंजीकरण एवं निरीक्षण'],['Boiler Certificate Renewal','बॉयलर प्रमाणपत्र नूतनीकरण','बॉयलर प्रमाणपत्र नवीनीकरण'],['Boiler Manufacturer Approval','बॉयलर उत्पादक मंजुरी','बॉयलर निर्माता अनुमोदन'],['Boiler Erection Approval','बॉयलर उभारणी मंजुरी','बॉयलर स्थापना अनुमोदन'] ],
agriculture:[['Farmer Certificate Guidance','शेतकरी प्रमाणपत्र मार्गदर्शन','किसान प्रमाणपत्र मार्गदर्शन'],['Small Land Holder Farmer Certificate','अल्पभूधारक शेतकरी प्रमाणपत्र','लघु भूमिधारक किसान प्रमाणपत्र'],['Agriculture Scheme Guidance','कृषी योजना मार्गदर्शन','कृषि योजना मार्गदर्शन'],['Crop Insurance Guidance','पीक विमा मार्गदर्शन','फसल बीमा मार्गदर्शन'],['PM-Kisan Guidance','पीएम-किसान मार्गदर्शन','पीएम-किसान मार्गदर्शन'],['Agriculture Permission Guidance','कृषी परवानगी मार्गदर्शन','कृषि अनुमति मार्गदर्शन'],['Soil / Farm Record Guidance','माती / शेती नोंद मार्गदर्शन','मिट्टी / खेत रिकॉर्ड मार्गदर्शन'],['Farmer Welfare Service Discovery','शेतकरी कल्याण सेवा शोध','किसान कल्याण सेवा खोज']],
land:[['Land Records / 7/12 Guidance','जमीन अभिलेख / ७/१२ मार्गदर्शन','भूमि अभिलेख / 7/12 मार्गदर्शन'],['Property Card Guidance','मालमत्ता पत्रक मार्गदर्शन','प्रॉपर्टी कार्ड मार्गदर्शन'],['Mutation Entry Guidance','फेरफार नोंद मार्गदर्शन','नामांतरण प्रविष्टि मार्गदर्शन'],['Landholder Certificate Guidance','जमीनधारक प्रमाणपत्र मार्गदर्शन','भूमिधारक प्रमाणपत्र मार्गदर्शन'],['Solvency Certificate for Property','मालमत्तेसाठी सॉल्व्हन्सी प्रमाणपत्र','संपत्ति हेतु सॉल्वेंसी प्रमाणपत्र'],['Landless Certificate','भूमिहीन प्रमाणपत्र','भूमिहीन प्रमाणपत्र'],['Certified Land Record Copy','जमीन अभिलेख प्रमाणित प्रत','भूमि अभिलेख प्रमाणित प्रति'],['Property-related Government Service Discovery','मालमत्ता शासकीय सेवा शोध','संपत्ति सरकारी सेवा खोज']],
transport:[['Learner Licence','शिकाऊ वाहनचालक परवाना','लर्नर लाइसेंस'],['Driving Licence','वाहनचालक परवाना','ड्राइविंग लाइसेंस'],['Driving Licence Renewal','वाहनचालक परवाना नूतनीकरण','ड्राइविंग लाइसेंस नवीनीकरण'],['Duplicate Driving Licence','दुय्यम वाहनचालक परवाना','डुप्लीकेट ड्राइविंग लाइसेंस'],['New Vehicle Registration','नवीन वाहन नोंदणी','नया वाहन पंजीकरण'],['Provisional Vehicle Registration','तात्पुरती वाहन नोंदणी','अस्थायी वाहन पंजीकरण'],['Duplicate Registration Certificate','दुय्यम नोंदणी प्रमाणपत्र','डुप्लीकेट आरसी'],['Transfer of Vehicle Ownership','वाहन मालकी हस्तांतरण','वाहन स्वामित्व हस्तांतरण'],['Transfer After Death of Owner','मालकाच्या मृत्यूनंतर वाहन हस्तांतरण','मालिक की मृत्यु के बाद वाहन हस्तांतरण'],['Vehicle NOC','वाहन ना-हरकत प्रमाणपत्र','वाहन एनओसी'],['Change of Address in RC','आरसी पत्ता बदल','आरसी पता परिवर्तन'],['Hypothecation Addition / Termination','हायपोथिकेशन नोंद / समाप्ती','हाइपोथिकेशन जोड़ना / हटाना'],['Other-State Vehicle Registration Guidance','इतर राज्य वाहन नोंदणी मार्गदर्शन','अन्य राज्य वाहन पंजीकरण मार्गदर्शन']],
police:[['Police Clearance Certificate','पोलीस क्लिअरन्स प्रमाणपत्र','पुलिस क्लीयरेंस प्रमाणपत्र'],['Character Verification Certificate','चारित्र्य पडताळणी प्रमाणपत्र','चरित्र सत्यापन प्रमाणपत्र'],['Character Certificate','चारित्र्य प्रमाणपत्र','चरित्र प्रमाणपत्र'],['Meeting / Procession Permission','सभा / मिरवणूक परवानगी','सभा / जुलूस अनुमति'],['Loudspeaker Licence','ध्वनिक्षेपक परवाना','लाउडस्पीकर लाइसेंस'],['FIR Copy Guidance','एफआयआर प्रत मार्गदर्शन','एफआईआर प्रति मार्गदर्शन'],['Foreign Artist Participation Permission','परदेशी कलाकार सहभाग परवानगी','विदेशी कलाकार सहभागिता अनुमति'],['Entertainment Programme Permission','मनोरंजन कार्यक्रम परवानगी','मनोरंजन कार्यक्रम अनुमति'],['Police Verification for Employment','नोकरीसाठी पोलीस पडताळणी','रोजगार हेतु पुलिस सत्यापन'],['Arms Licence Non-Variation Certificate','शस्त्र परवाना नॉन-व्हेरिएशन प्रमाणपत्र','शस्त्र लाइसेंस नॉन-वेरिएशन प्रमाणपत्र']],
business:[['GST Registration Guidance','GST नोंदणी मार्गदर्शन','GST पंजीकरण मार्गदर्शन'],['GST Return Guidance','GST रिटर्न मार्गदर्शन','GST रिटर्न मार्गदर्शन'],['Profession Tax Guidance','व्यवसाय कर मार्गदर्शन','प्रोफेशन टैक्स मार्गदर्शन'],['VAT/CST Legacy Service Guidance','VAT/CST सेवा मार्गदर्शन','VAT/CST सेवा मार्गदर्शन'],['e-CST Declaration Guidance','ई-CST घोषणा मार्गदर्शन','ई-CST घोषणा मार्गदर्शन'],['Business Registration Guidance','व्यवसाय नोंदणी मार्गदर्शन','व्यवसाय पंजीकरण मार्गदर्शन'],['Shop & Establishment Registration','दुकान व आस्थापना नोंदणी','दुकान एवं प्रतिष्ठान पंजीकरण'],['Tax Payment Guidance','कर भरणा मार्गदर्शन','कर भुगतान मार्गदर्शन'],['Tax Return Guidance','कर परतावा मार्गदर्शन','कर रिटर्न मार्गदर्शन']],
pwd:[['Optical Fibre Pipeline NOC','ऑप्टिकल फायबर पाइपलाइन NOC','ऑप्टिकल फाइबर पाइपलाइन NOC'],['Gas Pipeline NOC','गॅस पाइपलाइन NOC','गैस पाइपलाइन NOC'],['Water Pipeline NOC','पाणी पाइपलाइन NOC','जल पाइपलाइन NOC'],['Road Digging Permission','रस्ता खोदकाम परवानगी','सड़क खुदाई अनुमति'],['Petrol Pump Approach Road Permission','पेट्रोल पंप अप्रोच रोड परवानगी','पेट्रोल पंप अप्रोच रोड अनुमति'],['Roadside Building Permission','रस्त्यालगत बांधकाम परवानगी','सड़क किनारे भवन अनुमति'],['Contractor Registration','कंत्राटदार नोंदणी','ठेकेदार पंजीकरण'],['Contractor Renewal','कंत्राटदार नूतनीकरण','ठेकेदार नवीनीकरण'],['Labour Cooperative Service Guidance','कामगार सहकारी सेवा मार्गदर्शन','श्रम सहकारी सेवा मार्गदर्शन'],['Pothole / Road Complaint Guidance','खड्डा / रस्ता तक्रार मार्गदर्शन','गड्ढा / सड़क शिकायत मार्गदर्शन']],
health:[['Public Health Service Discovery','सार्वजनिक आरोग्य सेवा शोध','सार्वजनिक स्वास्थ्य सेवा खोज'],['Health Certificate Guidance','आरोग्य प्रमाणपत्र मार्गदर्शन','स्वास्थ्य प्रमाणपत्र मार्गदर्शन'],['Medical Permission Guidance','वैद्यकीय परवानगी मार्गदर्शन','चिकित्सा अनुमति मार्गदर्शन'],['Hospital / Health Scheme Guidance','रुग्णालय / आरोग्य योजना मार्गदर्शन','अस्पताल / स्वास्थ्य योजना मार्गदर्शन'],['Medical Education Service Guidance','वैद्यकीय शिक्षण सेवा मार्गदर्शन','चिकित्सा शिक्षा सेवा मार्गदर्शन']],
water:[['Water Resources Service Discovery','जलसंपदा सेवा शोध','जल संसाधन सेवा खोज'],['Water Supply & Sanitation Service Guidance','पाणीपुरवठा व स्वच्छता सेवा मार्गदर्शन','जल आपूर्ति एवं स्वच्छता सेवा मार्गदर्शन'],['Water-related NOC / Permission','पाणी संबंधित NOC / परवानगी','जल संबंधित NOC / अनुमति'],['Rural Water Supply Guidance','ग्रामीण पाणीपुरवठा मार्गदर्शन','ग्रामीण जल आपूर्ति मार्गदर्शन'],['Water Connection Service Guidance','पाणी जोडणी सेवा मार्गदर्शन','जल कनेक्शन सेवा मार्गदर्शन']],
environment:[['MPCB Consent / Permission Guidance','MPCB संमती / परवानगी मार्गदर्शन','MPCB सहमति / अनुमति मार्गदर्शन'],['Pollution Control Service Guidance','प्रदूषण नियंत्रण सेवा मार्गदर्शन','प्रदूषण नियंत्रण सेवा मार्गदर्शन'],['Environmental Permission Guidance','पर्यावरण परवानगी मार्गदर्शन','पर्यावरण अनुमति मार्गदर्शन'],['Consent to Establish Guidance','स्थापनेस संमती मार्गदर्शन','स्थापना सहमति मार्गदर्शन'],['Consent to Operate Guidance','चालविण्यास संमती मार्गदर्शन','संचालन सहमति मार्गदर्शन']],
urban:[['Building Permission Guidance','बांधकाम परवानगी मार्गदर्शन','भवन अनुमति मार्गदर्शन'],['Completion Certificate Guidance','पूर्णत्व प्रमाणपत्र मार्गदर्शन','पूर्णता प्रमाणपत्र मार्गदर्शन'],['Fire NOC Guidance','अग्निशमन NOC मार्गदर्शन','फायर NOC मार्गदर्शन'],['Commercial Licence Guidance','व्यावसायिक परवाना मार्गदर्शन','वाणिज्यिक लाइसेंस मार्गदर्शन'],['Parking Permission Guidance','पार्किंग परवानगी मार्गदर्शन','पार्किंग अनुमति मार्गदर्शन'],['Property Subdivision Guidance','मालमत्ता उपविभाग मार्गदर्शन','संपत्ति उपविभाजन मार्गदर्शन'],['Self Assessment - Municipal Service','स्व-मूल्यांकन नगरपालिका सेवा','स्व-मूल्यांकन नगरपालिका सेवा'],['Care Home Licence','केअर होम परवाना','केयर होम लाइसेंस'],['Care Home Licence Renewal','केअर होम परवाना नूतनीकरण','केयर होम लाइसेंस नवीनीकरण'],['Underground Telecom Cable Permission','भूमिगत दूरसंचार केबल परवानगी','भूमिगत दूरसंचार केबल अनुमति']],
tourism:[['Tourism Service Discovery','पर्यटन सेवा शोध','पर्यटन सेवा खोज'],['Cultural Programme Permission','सांस्कृतिक कार्यक्रम परवानगी','सांस्कृतिक कार्यक्रम अनुमति'],['Tourism Permission Guidance','पर्यटन परवानगी मार्गदर्शन','पर्यटन अनुमति मार्गदर्शन'],['Event / Cultural Affairs Service Guidance','कार्यक्रम / सांस्कृतिक कार्य सेवा मार्गदर्शन','कार्यक्रम / सांस्कृतिक कार्य सेवा मार्गदर्शन']],
voter:[
['New Voter Registration','नवीन मतदार नोंदणी','नया मतदाता पंजीकरण'],
['Voter ID / EPIC Correction','मतदार ओळखपत्र / EPIC दुरुस्ती','मतदाता पहचान पत्र / EPIC सुधार'],
['Change of Address in Electoral Roll','मतदार यादीतील पत्ता बदल','मतदाता सूची में पता बदल'],
['Download e-EPIC / Digital Voter ID','e-EPIC / डिजिटल मतदार ओळखपत्र डाउनलोड','e-EPIC / डिजिटल मतदाता पहचान पत्र डाउनलोड'],
['Voter Application Status','मतदार अर्जाची स्थिती','मतदाता आवेदन स्थिति'],
['Search Name in Electoral Roll','मतदार यादीत नाव शोधा','मतदाता सूची में नाम खोजें']
],
welfare:[
['Pension & Social Assistance Schemes','पेन्शन व विशेष सहाय्य योजना','पेंशन और विशेष सहायता योजनाएं'],
['Indira Gandhi National Old Age Pension Scheme','इंदिरा गांधी राष्ट्रीय वृद्धापकाळ निवृत्तीवेतन योजना','इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना'],
['Indira Gandhi National Widow Pension Scheme','इंदिरा गांधी राष्ट्रीय विधवा निवृत्तीवेतन योजना','इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना'],
['Indira Gandhi National Disability Pension Scheme','इंदिरा गांधी राष्ट्रीय दिव्यांग निवृत्तीवेतन योजना','इंदिरा गांधी राष्ट्रीय दिव्यांग पेंशन योजना'],
['Shravan Bal Seva Rajya Nivruttivetan Yojana','श्रावणबाळ सेवा राज्य निवृत्तीवेतन योजना','श्रवणबाल सेवा राज्य पेंशन योजना'],
['Sanjay Gandhi Niradhar Anudan Yojana','संजय गांधी निराधार अनुदान योजना','संजय गांधी निराधार अनुदान योजना']
],
other:[['Aaple Sarkar Full Notified Services Catalogue','आपले सरकार संपूर्ण अधिसूचित सेवा सूची','आपले सरकार पूर्ण अधिसूचित सेवा सूची'],['DigiLocker Guidance','DigiLocker मार्गदर्शन','DigiLocker मार्गदर्शन'],['Aadhaar Service Guidance','आधार सेवा मार्गदर्शन','आधार सेवा मार्गदर्शन'],['PAN Card Guidance','पॅन कार्ड मार्गदर्शन','पैन कार्ड मार्गदर्शन'],['Passport Service Guidance','पासपोर्ट सेवा मार्गदर्शन','पासपोर्ट सेवा मार्गदर्शन'],['Right to Public Services Appeal Guidance','लोकसेवा हक्क अपील मार्गदर्शन','लोक सेवा अधिकार अपील मार्गदर्शन'],['Co-operation Department Service Discovery','सहकार विभाग सेवा शोध','सहकार विभाग सेवा खोज'],['Finance Department Service Discovery','वित्त विभाग सेवा शोध','वित्त विभाग सेवा खोज'],['Law & Judiciary Service Discovery','कायदा व न्याय सेवा शोध','कानून एवं न्याय सेवा खोज'],['Social Justice Service Discovery','सामाजिक न्याय सेवा शोध','सामाजिक न्याय सेवा खोज'],['Forest Department Service Discovery','वन विभाग सेवा शोध','वन विभाग सेवा खोज'],['Energy Department Service Discovery','ऊर्जा विभाग सेवा शोध','ऊर्जा विभाग सेवा खोज'],['Industries Department Service Discovery','उद्योग विभाग सेवा शोध','उद्योग विभाग सेवा खोज'],['Rural Development Service Discovery','ग्रामीण विकास सेवा शोध','ग्रामीण विकास सेवा खोज']]
};
const specials={
'New Voter Registration':{portal:VOTER,keywords:['new voter','registration','मतदार नोंदणी','मतदाता पंजीकरण'],docs:['Age / identity proof','Address proof','Recent photograph where required','Use the current ECI form and requirements shown on the official portal']},
'Voter ID / EPIC Correction':{portal:VOTER,keywords:['correction','epic','मतदार दुरुस्ती','वोटर सुधार']},
'Change of Address in Electoral Roll':{portal:VOTER,keywords:['address change','shifting','पत्ता बदल','पता बदल']},
'Download e-EPIC / Digital Voter ID':{portal:VOTER,keywords:['e-epic','digital voter id','download voter id','ई-epिक']},
'Voter Application Status':{portal:VOTER,keywords:['voter status','application status','मतदार अर्ज स्थिती']},
'Search Name in Electoral Roll':{portal:VOTER_SEARCH,keywords:['electoral roll','search voter','name in voter list','मतदार यादी','मतदाता सूची']},
'Pension & Social Assistance Schemes':{portal:PENSION,keywords:['pension','social assistance','welfare','पेन्शन','पेंशन']},
'Indira Gandhi National Old Age Pension Scheme':{portal:'https://nsap.nic.in/',keywords:['old age pension','वृद्धापकाळ निवृत्तीवेतन','वृद्धावस्था पेंशन']},
'Indira Gandhi National Widow Pension Scheme':{portal:'https://nsap.nic.in/',keywords:['widow pension','विधवा पेन्शन']},
'Indira Gandhi National Disability Pension Scheme':{portal:'https://nsap.nic.in/',keywords:['disability pension','दिव्यांग पेन्शन']},
'Shravan Bal Seva Rajya Nivruttivetan Yojana':{portal:'https://sas.mahait.org/',keywords:['shravan bal','state pension','श्रावणबाळ']},
'Sanjay Gandhi Niradhar Anudan Yojana':{portal:'https://sas.mahait.org/',keywords:['sanjay gandhi niradhar','निराधार','social assistance']},
'Caste Certificate':{difficulty:'Medium',time:'15–20 min guide',personas:['student','citizen','worker'],keywords:['जात','caste'],docs:['Identity proof','Address proof','Supporting caste/community evidence as required','Photograph / supporting records as applicable'],eligibility:['Applicant must meet the competent authority requirements for the claimed caste category.','Requirements can vary by case and supporting lineage records.']},
'Income Certificate':{time:'10–15 min guide',keywords:['income','उत्पन्न','आय'],docs:['Identity proof','Address proof','Income-related supporting documents as required','Recent photograph if required by the portal']},
'MahaDBT Scholarship Guidance':{portal:MAHADBT,personas:['student'],keywords:['scholarship','mahadbt','शिष्यवृत्ती','छात्रवृत्ति'],docs:['Student identity / admission details','Bank account details on official portal only','Income/caste documents where scheme requires','Previous examination / fee documents as applicable']},
'DigiLocker Education Documents':{portal:DIGILOCKER},
'DigiLocker Guidance':{portal:DIGILOCKER},
'e-Shram Registration Guidance':{portal:ESHRAM},
'GST Registration Guidance':{portal:GST},
'GST Return Guidance':{portal:GST},
'Driving Licence':{portal:PARIVAHAN,keywords:['driving','licence','license','dl','वाहनचालक','ड्राइविंग'],docs:['Age / identity proof','Address proof','Learner licence where applicable','Medical certificate where applicable']},
'Learner Licence':{portal:PARIVAHAN},
'Aaple Sarkar Full Notified Services Catalogue':{portal:AAPLE,difficulty:'Easy',time:'Live official catalogue',featured:true,popular:true},
'PAN Card Guidance':{portal:'https://www.incometaxindia.gov.in/tax-services/apply-for-pan',difficulty:'Easy',time:'10–15 min to review guidance; application and delivery times vary',keywords:['pan','pan card','permanent account number','new pan','apply pan','track pan','पॅन कार्ड','पैन कार्ड'],eligibility:['A person or entity that requires a PAN may apply under the applicable Income-tax rules.','Choose the correct application type on the official Income Tax Department page.','Instant e-PAN is a separate free facility available only to eligible applicants, including Aadhaar and Aadhaar-linked mobile requirements.'],docs:['Proof of identity as required by the current official form','Proof of address as required by the current official form','Proof of date of birth / incorporation as applicable; check current rules because Aadhaar may not be accepted as date-of-birth proof','A working mobile number and email if required for OTPs and application updates'],steps:['Open the official Income Tax Department PAN page and choose the appropriate application route.','Apply through an authorized provider (Protean or UTIITSL) or choose Instant e-PAN if eligible.','Enter details carefully and submit only on the official provider website.','Save the acknowledgement, coupon, or application reference number shown after submission.','To track progress, return to the same authorized provider and use its Track PAN / application-status facility with the reference number.','Physical card delivery time depends on the provider, verification, document completeness, and postal delivery. Citizen Assist cannot see live application status or promise a delivery date.'],mistakes:['Do not apply for a second PAN if one has already been allotted.','Do not rely on a fixed delivery date; use the provider status page.','Do not share Aadhaar/PAN numbers, OTPs, or application credentials with Citizen Assist.'],troubleshooting:['If status is pending, check the official provider tracking page and follow any request for additional documents.','For UTIITSL applications, the Income Tax Department links to the official tracking facility at https://www.trackpan.utiitsl.com/PANONLINE/forms/TrackPan/trackApp.','For a Protean application, use the status / tracking option on the official Protean PAN portal.','If the expected delivery window has passed, contact the authorized provider using contact details shown on its official website.'],faqs:[['Can I apply for PAN on Citizen Assist?','No. Citizen Assist explains the process and links to official services; the application is submitted on the authorized provider portal.'],['Can I track delivery here?','Citizen Assist does not receive live provider status. Save your acknowledgement/reference number and check status on the same authorized provider portal.'],['How many days will delivery take?','Processing and delivery vary by application type, verification, and postal service. Check the live status on the provider portal instead of relying on a fixed estimate.']] }
};
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function makeService(catKey,item,i){const c=categories[catKey], [name,mr,hi]=item; const sp=specials[name]||{}; const id=slug(name)+'-'+catKey;
 const docs=sp.docs||['Identity / supporting proof required by the official service','Address / eligibility proof where applicable','Service-specific documents shown on the official portal','Scanned copies in accepted format where online upload is required'];
 const eligibility=sp.eligibility||['Eligibility depends on the official rules for this service.','Check the current government portal before applying, as requirements can change.'];
 const prereq=['Keep an active mobile number and email if the official portal requires OTP or updates.','Prepare clear digital copies of required documents before opening the official application.'];
 const steps=['Read the official service information and confirm you selected the correct service.','Review eligibility and prepare all required documents.','Use the checklist below to confirm readiness.','Open the verified official portal using the button provided.','Complete the government form only on the official portal and save the acknowledgement / application ID.','Use the official tracking facility where available.'];
 return {id,name,nameMr:mr,nameHi:hi,category:catKey,categoryLabel:c.label,icon:c.icon,description:`Guidance for ${name} with eligibility, documents, steps, checklist and official portal handoff.`,difficulty:sp.difficulty||c.difficulty,time:sp.time|| (c.difficulty==='Easy'?'10–15 min guide':c.difficulty==='Medium'?'15–20 min guide':'20–30 min guide'),personas:sp.personas||c.personas,keywords:[name,mr,hi,...c.keywords,...(sp.keywords||[])],pin:sp.pin||sp.apiPin||sp.apiPIN||sp.pinCode||sp.servicePin||'',apiPin:sp.apiPin||sp.apiPIN||sp.pin||'',portal:sp.portal||c.portal,featured:!!sp.featured||['Caste Certificate','Income Certificate','MahaDBT Scholarship Guidance','Driving Licence','Birth Certificate','Police Clearance Certificate','e-Shram Registration Guidance','Land Records / 7/12 Guidance'].includes(name),popular:!!sp.popular||['Caste Certificate','Income Certificate','Age, Nationality and Domicile Certificate','Birth Certificate','Driving Licence','MahaDBT Scholarship Guidance','Police Clearance Certificate','e-Shram Registration Guidance'].includes(name),eligibility,prereq,docs,steps,mistakes:['Using an unofficial or sponsored look-alike website.','Entering a name/date that does not match supporting documents.','Uploading unclear, cropped or wrong-format documents.','Closing the official portal without saving the acknowledgement / application ID.'],troubleshooting:['If OTP is delayed, wait briefly and retry only on the official portal.','For payment-status issues, do not immediately pay again; check the official transaction/application status first.','If a portal session expires, reopen the official site and resume using the available application reference.','If requirements differ from this guide, follow the current official portal notice.'],faqs:[['Can Citizen Assist submit this application for me?','No. Citizen Assist provides preparation guidance only. The actual application must be completed on the official government portal.'],['Can I enter my Aadhaar or PAN number here?','No. Do not enter government identity numbers, passwords, OTPs or financial credentials into Citizen Assist.'],['What if the official portal shows different documents?','Follow the current official portal requirement. Government procedures can change after a guide is prepared.'] ]};
}
const services=[];Object.entries(groups).forEach(([k,arr])=>arr.forEach((x,i)=>services.push(makeService(k,x,i))));
// Keep specialist destinations for services with their own verified portal; do not send unrelated labour or permission services to e-Shram/certificate-only pages.
services.forEach(s=>{
  if(['Cultural Programme Permission','Minor Mineral Extraction Permission for Industrial Purpose'].includes(s.name)) s.portal=AAPLE;
});

// Service-specific official destinations. Use the relevant department/portal for each entry;
// Aaple Sarkar is retained only for services listed there or where it is the official route.
const portalGroups = [
  {cats:['revenue','family'], names:[
    'Age, Nationality and Domicile Certificate','Caste Certificate','Income Certificate','Non-Creamy Layer Certificate',
    'Temporary Residence Certificate','Senior Citizen Certificate','Solvency Certificate','Certified Copy',
    'Small Land Holder Farmer Certificate','Landless Certificate','Agriculturist Certificate','General Affidavit',
    'Certificate of Residence in Hilly Area','Cultural Programme Permission','Minor Mineral Extraction Permission for Industrial Purpose',
    'Birth Certificate','Death Certificate','Marriage Registration Certificate','Below Poverty Line Certificate',
    'No Dues Certificate','Old Age Certificate for Niradhar','Assessment Certificate','Family Member Certificate Guidance'
  ], url:AAPLE},
  {cats:['education'], names:['MahaDBT Scholarship Guidance','Post-Matric Scholarship Guidance','Education Scheme Discovery','EBC / Fee Reimbursement Guidance'], url:MAHADBT},
  {cats:['education'], names:['Student Certificate Guidance','Bonafide / Leaving Certificate Guidance'], url:'https://education.maharashtra.gov.in/'},
  {cats:['education'], names:['DigiLocker Education Documents'], url:DIGILOCKER},
  {cats:['education'], names:['Exam Portal Guidance'], url:'https://www.mahahsscboard.in/'},
  {cats:['labour'], names:['e-Shram Registration Guidance'], url:ESHRAM},
  {cats:['labour','business'], names:['Registration of Shop and Establishment','Renewal of Shop and Establishment Registration','Registration for Principal Employer','Contract Labour Licence - New','Contract Labour Licence - Renewal','Beedi & Cigar Licence','Factory Registration','Factory Renewal','Factory Plan Approval','Motor Transport Workers Registration','Boiler Registration & Inspection','Boiler Certificate Renewal','Boiler Manufacturer Approval','Boiler Erection Approval','Shop & Establishment Registration'], url:LABOUR},
  {cats:['labour'], names:['Building & Other Construction Worker Registration'], url:MAHABOCW},
  {cats:['agriculture'], names:['Farmer Certificate Guidance','Small Land Holder Farmer Certificate'], url:AAPLE},
  {cats:['agriculture'], names:['Agriculture Scheme Guidance','Agriculture Permission Guidance','Soil / Farm Record Guidance','Farmer Welfare Service Discovery'], url:'https://krishi.maharashtra.gov.in/'},
  {cats:['agriculture'], names:['Crop Insurance Guidance'], url:'https://pmfby.gov.in/'},
  {cats:['agriculture'], names:['PM-Kisan Guidance'], url:'https://pmkisan.gov.in/'},
  {cats:['land'], names:['Land Records / 7/12 Guidance'], url:BHULEKH},
  {cats:['land'], names:['Property Card Guidance','Mutation Entry Guidance','Certified Land Record Copy','Property-related Government Service Discovery'], url:MAHABHUMI},
  {cats:['land'], names:['Landholder Certificate Guidance','Solvency Certificate for Property','Landless Certificate'], url:AAPLE},
  {cats:['transport'], names:['Learner Licence','Driving Licence','Driving Licence Renewal','Duplicate Driving Licence'], url:SARATHI},
  {cats:['transport'], names:['New Vehicle Registration','Provisional Vehicle Registration','Duplicate Registration Certificate','Transfer of Vehicle Ownership','Transfer After Death of Owner','Vehicle NOC','Change of Address in RC','Hypothecation Addition / Termination','Other-State Vehicle Registration Guidance'], url:VAHAN},
  {cats:['police'], names:['Police Clearance Certificate','Character Verification Certificate','Character Certificate','Meeting / Procession Permission','Loudspeaker Licence','FIR Copy Guidance','Foreign Artist Participation Permission','Entertainment Programme Permission','Police Verification for Employment'], url:POLICE},
  {cats:['police'], names:['Arms Licence Non-Variation Certificate'], url:'https://www.maharashtra.gov.in/'},
  {cats:['business'], names:['GST Registration Guidance','GST Return Guidance'], url:GST},
  {cats:['business'], names:['Profession Tax Guidance','VAT/CST Legacy Service Guidance','e-CST Declaration Guidance','Tax Payment Guidance','Tax Return Guidance'], url:MAHAGST},
  {cats:['business'], names:['Business Registration Guidance'], url:MAITRI},
  {cats:['pwd'], names:['Optical Fibre Pipeline NOC','Gas Pipeline NOC','Water Pipeline NOC','Road Digging Permission','Petrol Pump Approach Road Permission','Roadside Building Permission','Contractor Registration','Contractor Renewal','Pothole / Road Complaint Guidance'], url:PWD},
  {cats:['pwd'], names:['Labour Cooperative Service Guidance'], url:LABOUR},
  {cats:['health'], names:['Public Health Service Discovery','Health Certificate Guidance','Medical Permission Guidance'], url:HEALTH},
  {cats:['health'], names:['Hospital / Health Scheme Guidance'], url:'https://www.jeevandayee.gov.in/'},
  {cats:['health'], names:['Medical Education Service Guidance'], url:MEDICAL},
  {cats:['water'], names:['Water Resources Service Discovery'], url:WRD},
  {cats:['water'], names:['Water Supply & Sanitation Service Guidance','Water-related NOC / Permission','Rural Water Supply Guidance','Water Connection Service Guidance'], url:WATER},
  {cats:['environment'], names:['MPCB Consent / Permission Guidance','Pollution Control Service Guidance','Environmental Permission Guidance','Consent to Establish Guidance','Consent to Operate Guidance'], url:MPCB},
  {cats:['urban'], names:['Building Permission Guidance','Completion Certificate Guidance','Fire NOC Guidance','Commercial Licence Guidance','Parking Permission Guidance','Property Subdivision Guidance','Self Assessment - Municipal Service','Care Home Licence','Care Home Licence Renewal','Underground Telecom Cable Permission'], url:DMA},
  {cats:['tourism'], names:['Tourism Service Discovery','Tourism Permission Guidance'], url:TOURISM},
  {cats:['tourism'], names:['Cultural Programme Permission'], url:AAPLE},
  {cats:['tourism'], names:['Event / Cultural Affairs Service Guidance'], url:TOURISM},
  {cats:['voter'], names:['New Voter Registration','Voter ID / EPIC Correction','Change of Address in Electoral Roll','Download e-EPIC / Digital Voter ID','Voter Application Status'], url:VOTER},
  {cats:['voter'], names:['Search Name in Electoral Roll'], url:VOTER_SEARCH},
  {cats:['welfare'], names:['Pension & Social Assistance Schemes'], url:PENSION},
  {cats:['welfare'], names:['Indira Gandhi National Old Age Pension Scheme','Indira Gandhi National Widow Pension Scheme','Indira Gandhi National Disability Pension Scheme'], url:'https://nsap.nic.in/'},
  {cats:['welfare'], names:['Shravan Bal Seva Rajya Nivruttivetan Yojana','Sanjay Gandhi Niradhar Anudan Yojana'], url:'https://sas.mahait.org/'},
  {cats:['other'], names:['Aaple Sarkar Full Notified Services Catalogue','Right to Public Services Appeal Guidance'], url:AAPLE},
  {cats:['other'], names:['DigiLocker Guidance'], url:DIGILOCKER},
  {cats:['other'], names:['Aadhaar Service Guidance'], url:UIDAI},
  {cats:['other'], names:['PAN Card Guidance'], url:PAN},
  {cats:['other'], names:['Passport Service Guidance'], url:PASSPORT},
  {cats:['other'], names:['Co-operation Department Service Discovery'], url:COOP},
  {cats:['other'], names:['Finance Department Service Discovery'], url:FINANCE},
  {cats:['other'], names:['Law & Judiciary Service Discovery'], url:LAW},
  {cats:['other'], names:['Social Justice Service Discovery'], url:SJSA},
  {cats:['other'], names:['Forest Department Service Discovery'], url:FOREST},
  {cats:['other'], names:['Energy Department Service Discovery'], url:ENERGY},
  {cats:['other'], names:['Industries Department Service Discovery'], url:INDUSTRY},
  {cats:['other'], names:['Rural Development Service Discovery'], url:RDD}
];
portalGroups.forEach(group => {
  services.forEach(s => {
    if (group.cats.includes(s.category) && group.names.includes(s.name)) s.portal = group.url;
  });
});
// Official service catalogue links are category-level entry points only when no verified direct form exists.
window.CA_DATA={services,categories,official:{catalogue:AAPLE,online:ONLINE},lastVerified:'16 Oct 2026'};

})();
