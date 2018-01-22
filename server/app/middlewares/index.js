const express = require('express');
const path = require('path');
const { PUBLIC_SRC_DIR } = require('config/paths');
const helmetMiddleware = require('./helmet');

const router = express.Router();

router.use(helmetMiddleware);
router.use('/static', express.static(PUBLIC_SRC_DIR));

module.exports = router;