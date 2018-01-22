const { handleProcessError } = require('./helpers');

console.log("IS_HEROKU ", process.env.IS_HEROKU);

require('module-alias/register');
require('./server');

handleProcessError();
