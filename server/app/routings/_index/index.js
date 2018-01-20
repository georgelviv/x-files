const express = require('express');
const path = require('path');
const router = express.Router();

const PUBLIC_DIR = path.join(process.cwd(), './public');

router.get('/', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

module.exports = router;