//开发配置
const path = require("path");
const baseConfig = require("./webpack.cofig.base.js");

const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const devConfig = {
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    mode: "development",
    devtool: "cheap-inline-source-map",
    module: {
        rules: [{
                test: /\.css$/i,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    'style-loader',
                    'css-loader',
                    "postcss-loader",
                ]
            },
            {
                test: /\.less$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    'css-loader',
                    "postcss-loader",
                    'less-loader'
                ]
            }
        ]
    },
    devServer: {
        //可以是相对路径
        contentBase: "./dist",
        open: true,
        hot: true,
        //即便HMR没有生效，浏览器也不要自动刷新。
        hotOnly: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            //选择html模板
            template: "./public/index.html",
            filename: "index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = merge(baseConfig, devConfig);