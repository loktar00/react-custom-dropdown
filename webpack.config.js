const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const config = require('./webpack.base.config.js');

config.module.rules.push({
    test: /\.(ts|tsx|js)$/,
    enforce: 'pre',
    use: [{
        loader: `eslint-loader?${JSON.stringify({configFile: '.eslintrc'})}`
    }],
    exclude: /node_modules/
});

module.exports = {
    entry: config.entry,
    mode: 'development',
    devtool: 'inline-source-map',
    module: config.module,
    resolve: config.resolve,
    devServer: {
        contentBase: path.join(__dirname, 'examples'),
        compress: true,
        port: 9000,
        writeToDisk: true
    },
    plugins: [
        new StyleLintPlugin({
            configFile: 'stylelint.config.js',
            files: ['**/*.s?(a|c)ss']
        })
    ],
    output: {
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './lib/'),
        filename: 'index.js'
    }
};