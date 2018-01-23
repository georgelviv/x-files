const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(webpackCommon, {
  watch: true,
  devtool: 'inline-source-map',
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
});