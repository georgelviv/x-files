const { handleProcessError } = require('./helpers');

require('module-alias/register');
require('./server');

handleProcessError();
