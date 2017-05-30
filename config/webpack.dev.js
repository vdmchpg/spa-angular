var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var path = require('path');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        historyApiFallback: true,
        colors: true,
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 9001,
        stats: 'minimal'
    },

    plugins: commonConfig.plugins.concat([

        new webpack.DefinePlugin({
            APP_ENV: JSON.stringify('dev')
        })

    ])
});
