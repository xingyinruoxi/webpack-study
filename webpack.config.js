const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
                    'style-loader',
                    'css-loader'
                ]
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
                    'style-loader',
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
        new VueLoaderPlugin()
    ]
}