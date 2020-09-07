const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash:8].js'
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    module: {
        rules: [{
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        edge: "17",
                                        firefox: "60",
                                        chrome: "67",
                                        safari: "11.1"
                                    },
                                    corejs: 2, //新版本需要指定核⼼库版本
                                    useBuiltIns: "usage" //按需注⼊
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 200,
                    name: '[name]_[hash:8].[ext]',
                    outputPath: './images'

                }
            },
            {
                test: /\.less$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash:8].css',
            path: './css'
        }),
        new VueLoaderPlugin()
    ]
}