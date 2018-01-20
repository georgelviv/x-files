const path = require('path');

const WEB_DIR = path.join(__dirname, "../web");
const WEB_SRC_DIR = path.join(WEB_DIR, "src");
const WEB_ASSETS_DIR = path.join(WEB_DIR, "assets");
const PUBLIC_SRC_DIR = path.join(__dirname, '../public');
const PUBLIC_ASSETS_DIR = path.join(PUBLIC_SRC_DIR, 'assets');

module.exports = {
  WEB_DIR, 
  WEB_SRC_DIR, 
  PUBLIC_SRC_DIR,
  WEB_ASSETS_DIR,
  PUBLIC_ASSETS_DIR
};