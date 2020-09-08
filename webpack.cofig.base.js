const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    resolve: {
        //查找第三方依赖
        modules: [path.resolve(__dirname, "./node_modules")],
        alias: {
            //减少查找过程
            //起别名
            "@": path.resolve(__dirname, "./src/css"),
        },
        extensions: [".vue", ".js"],
    },
    module: {
        rules: [
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
                include: path.resolve(__dirname, "./src"),
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
                include: path.resolve(__dirname, "./src"),
                loader: 'url-loader',
                options: {
                    limit: 200,
                    name: '[name]_[hash:8].[ext]',
                    outputPath: './images'

                }
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}