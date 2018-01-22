const https = require('https');
const app = require('./app');
const { PORT, IP_ADDRESS } = require('config/server');
const certificates = require('./certificates');

const serverOptions = {...certificates};

https
  .createServer(serverOptions, app)
  .listen(PORT, IP_ADDRESS, err => {
    if (err) throw err;
    console.log(`Server started at port: ${ PORT }`)
  });