module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/, exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }]
            },
            {
                test: /\.js(x?)$/, exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }]
            },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts']
    }
};
