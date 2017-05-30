var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        root: path.join(__dirname, '../src'),
        extensions: ['', '.js', '.ts'],
        alias: {
            assets: 'assets',
            shared: 'app/shared',
            core: 'app/core'
        }
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            { test: /\.html$/, loader: 'html' },
            { test: /\.less/, loaders: ['raw', 'less'] },
            { test: /\.css/, loaders: ['style', 'css'] }
        ]
    },
};
