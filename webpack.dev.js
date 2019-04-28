const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  name: 'client',
  mode: 'development',
  target: 'web',
  devtool: 'eval',
})