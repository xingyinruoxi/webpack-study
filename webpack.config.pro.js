//开发配置
const path = require("path");
const baseConfig = require("./webpack.cofig.base.js");

const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const proConfig = {
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "./js/[name].js",
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
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            cacheGroups: {
                lodash: {
                    test: /lodash.js/,
                    name: "lodash", // 要缓存的 分隔出来的 chunk 名称
                },
                vue: {
                    test: /vue.js/,
                    name: "vue", // 要缓存的 分隔出来的 chunk 名称
                }
            }
        }
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[contenthash:8].css",
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require("cssnano"), //引入cssnano引擎
            cssProcessorOptions: {
                discardComments: { removeAll: true },
            },
            /* optimization: {
                splitChunks: {
                    chunks: 'all',
                    minChunks: 1,
                    cacheGroups: {
                        lodash: {
                            test: /lodash/,
                            name: "lodash", // 要缓存的 分隔出来的 chunk 名称
                        },
                    }
                }
            }, */
            /*    splitChunks: {
                   chunks: 'all',
                   minChunks: 1,
                   cacheGroups: {
                       lodash: {
                           test: /lodash/,
                           name: "lodash", // 要缓存的 分隔出来的 chunk 名称
                       },
                   }
               } */
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