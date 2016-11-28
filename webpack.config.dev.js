const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        demo: path.resolve(__dirname, 'src/demo.jsx'),
        drag: path.resolve(__dirname, 'RedUIDrag/src/entry.jsx')
    },
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
        filename: "[name].js"
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};