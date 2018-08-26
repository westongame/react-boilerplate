const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pkg = require('./package.json');


module.exports = {
    entry: {
        vendor: Object.keys(pkg.dependencies),
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.(ico|png|jpg|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                },
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].min.css'
        })
    ]
};
