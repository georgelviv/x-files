const fs = require('fs');
const path = require('path');

// openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem
const key = fs.readFileSync(path.join(__dirname, './key.pem')); 
const cert = fs.readFileSync(path.join(__dirname, './certificate.pem'));

module.exports = {
  key, cert
};