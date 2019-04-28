const clientConfig = require('./webpack.dev');
const serverConfig = require('./webpack.server');

module.exports = [serverConfig, clientConfig];