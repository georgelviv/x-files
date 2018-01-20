const https = require('https');
const app = require('./app');
const { PORT } = require('config/server');
const certificates = require('./certificates');

const serverOptions = {...certificates};

https
  .createServer(serverOptions, app)
  .listen(PORT, err => {
    if (err) throw err;
    console.log(`Server started at port: ${ PORT }`)
  });