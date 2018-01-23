const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(paths.WEB_SRC_DIR, 'index.js'),
  output: {
    filename: 'app.js',
    path: paths.PUBLIC_SRC_DIR 
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: './config/tsconfig.json'
        },
      },
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
  resolve: {
    alias: {
      shared: paths.WEB_SHARED_DIR
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin([paths.PUBLIC_SRC_DIR], {
      root: paths.ROOT
    }),
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