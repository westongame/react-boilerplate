const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    output: {
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]',
                            importLoaders: 1,
                        },
                    },
                    'stylus-loader',
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            }
        ],
    }
});
