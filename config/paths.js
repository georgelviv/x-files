const path = require('path');

const WEB_DIR = path.join(__dirname, "../web");
const WEB_SRC_DIR = path.join(WEB_DIR, "src");
const PUBLIC_SRC_DIR = path.join(__dirname, '../public');

module.exports = {
  WEB_DIR, WEB_SRC_DIR, PUBLIC_SRC_DIR
};