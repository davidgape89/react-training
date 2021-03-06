const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
      },
      // {
      //     test: /\.(css|scss)$/,
      //     use: [
      //         'css-loader', 
      //         'sass-loader'
      //     ]
      // }
    ]
  }
};