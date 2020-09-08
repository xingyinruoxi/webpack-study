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
        filename: '[name]-[hash:8].js',
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    module: {
        rules: [{
                test: /\.css$/i,
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, './node_modules/font-awesome')],
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            /*  {
                 test: /\.(ttf|eot|woff|woff2|svg)$/,
                 // exclude: /node_modules/,
                 include: /node_modules/,
                 use: {
                     loader: 'file-loader',
                     options: {
                         name: './fonts/[name]_[hash:8].[ext]',
                     }
                 }
             }, */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
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