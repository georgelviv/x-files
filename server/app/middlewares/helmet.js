const helmet = require('helmet');
const express = require('express');
const { CSP_DIRECTIVES } = require('config/server');

const router = express.Router();

router.use(helmet());
router.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", 'data:', ...CSP_DIRECTIVES]
  }
}));

module.exports = router;