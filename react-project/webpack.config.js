const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin('bundle.css');

const config = {
    entry: {
        "bundle": APP_DIR + '/src/boot.js'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    devtool: "source-map",
    devServer: {
        contentBase: './public',
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000&name=/[name].[hash:8].[ext]' },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader'),
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ],
    },
    plugins: [
        extractCSS,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            Popper: ['popper.js', 'default']
        })
    ]
};

module.exports = config;