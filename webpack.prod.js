const merge = require('webpack-merge');
const path = require('path');

const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[hash].min.js'
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[hash:base64:6]'
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer('> 1%')]
                        }
                    },
                    'stylus-loader'
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            }
        ],
    },
    plugins: [
        new OptimizeCssAssetsPlugin(),
        new HTMLWebpackPlugin({ template: './src/index-template.html' })
    ]
});
