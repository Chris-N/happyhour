const path = require('path');

module.exports =  {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        publicPath: '/build/',
        contentBase: './client',
        proxy: [{
            context: ['/bars', '/yelp'],
            target: 'http://localhost:3000'
        }]
    },
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
        },
        {
            test:/\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    }
};