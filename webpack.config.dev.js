const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/demo.jsx'),
    module: {
        loaders: [
            {
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract('style', 'css?module!sass?scss')
            },
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: 'babel', 
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }, 
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'] 
    },
    output: {
        path: path.resolve(__dirname, "demo"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'RedUi组件预览'
        }), 
        new ExtractTextPlugin('styles.css')
    ]
};