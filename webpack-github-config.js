const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, './docs'),
        filename: 'main.js'
    },
    devtool: 'inline-source-map',
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
                test: /\.(webp|jpg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.txt$/i,
                type: 'asset/source'
            }
        ],
    },
    plugins: [ new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
}