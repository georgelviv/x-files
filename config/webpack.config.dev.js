const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(paths.WEB_SRC_DIR, 'index.js'),
  output: {
    filename: 'app.js',
    path: paths.PUBLIC_SRC_DIR 
  },
  plugins: [new HtmlWebpackPlugin({
    filename: path.join(paths.PUBLIC_SRC_DIR, 'index.html'),
    template: path.join(paths.WEB_DIR, 'index.html'),
    inject: false
  })]
};