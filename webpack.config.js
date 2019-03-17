const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const config = (env, options) => {
    const isProduction = options.mode === "production";

    return {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        mode: isProduction? 'production': 'development',
        devtool: isProduction? 'none': 'eval',
        optimization: {
            minimizer: [new UglifyJsPlugin()]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader', 
                        'css-loader', 
                        'sass-loader'
                    ]
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true
        },
        watch: isProduction? false: true
    }
};
module.exports = config;