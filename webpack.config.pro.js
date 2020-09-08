//开发配置
const path = require("path");
const baseConfig = require("./webpack.cofig.base.js");

const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const proConfig = {
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",
    },
    mode: "production",
    module: {
        rules: [{
                test: /\.css$/i,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    "postcss-loader",
                ]
            },
            {
                test: /\.less$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    "postcss-loader",
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name]-[contenthash:8].css",
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require("cssnano"), //引入cssnano引擎
            cssProcessorOptions: {
                discardComments: { removeAll: true },
            },
        }),
        new HtmlWebpackPlugin({
            //选择html模板
            template: "./public/index.html",
            filename: "index.html",
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true, // 压缩内联css
            },
        }),
    ]
};

module.exports = merge(baseConfig, proConfig);