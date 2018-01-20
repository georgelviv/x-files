const express = require('express');
const path = require('path');

const { PUBLIC_SRC_DIR } = require('config/paths');
const router = express.Router();

router.use('/static', express.static(PUBLIC_SRC_DIR));

module.exports = router;