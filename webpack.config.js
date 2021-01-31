const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: {
        app: './src/scripts/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
            // ...  
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "scripts/[name].min.js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Redirecting you to the control panel...',
            template: path.resolve(__dirname, './src/index.html'), // template file
            filename: 'index.html', // output file
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "styles/[name].css",
            chunkFilename: "styles/[id].css",
          }),
    ]
};