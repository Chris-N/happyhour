const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'client/index.js'),
    devServer: {
        publicPath: 'build'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: '',
    //         filename: 'build/index.html'
    //     })
    // ],
    module: {
        rules: [{
            test:/\.jsx?/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    }
};