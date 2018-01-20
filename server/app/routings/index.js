const express = require('express');
const router = express.Router();

const _index = require('./_index');

router.use('/', _index);

module.exports = router;