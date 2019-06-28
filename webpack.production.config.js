const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.config.js');

module.exports = {
    entry: config.entry,
    mode: 'production',
    module: config.module,
    resolve: config.resolve,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    output: {
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './lib/'),
        filename: 'index.js'
    }
}