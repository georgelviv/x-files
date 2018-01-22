const app = require('./app');
const { PORT, IP_ADDRESS } = require('config/server');
const certificates = require('./certificates');

const serverOptions = {...certificates};

const server = !process.env.IS_HEROKU 
  ? require('https').createServer(serverOptions, app)
  : require('http').createServer(app);

server
  .listen(PORT, err => {
    if (err) throw err;
    console.log(`Server started at port: ${ PORT }`)
  });