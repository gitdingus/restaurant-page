const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf$/i,
                type: 'asset/resource'
            },
            {
                test: /\.webp$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [ new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
}