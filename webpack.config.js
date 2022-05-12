
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
          port: 5000,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
                new HtmlWebpackPlugin({
                    template: 'public/index.html',
                })
            ],
            resolve: {extensions: ['.js', '.jsx']}
    }