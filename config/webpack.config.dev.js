const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(paths.WEB_SRC_DIR, 'index.js'),
  output: {
    filename: 'app.js',
    path: paths.PUBLIC_SRC_DIR 
  },
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ],
          plugins: []
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([paths.PUBLIC_SRC_DIR]),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(paths.PUBLIC_SRC_DIR, 'index.html'),
      template: path.join(paths.WEB_DIR, 'index.html'),
      inject: false
    }),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
      { from: paths.WEB_ASSETS_DIR, to: paths.PUBLIC_ASSETS_DIR }
    ])
  ]
};