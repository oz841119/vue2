const path = require('path')
const { VueLoaderPlugin } = require('vue-loader') // Vue擴展插件
const webpack = require('webpack') // 導入webpack的內置插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 導入生成html的擴展插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin') // 導入壓縮的擴展插件
    // 目前使用的版本 生成版權聲明的內置插件會與壓縮插件衝突 原因是壓縮插件會將註釋刪除



module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/' ////////////////////////
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        name: 'images/[name].[hash:8].[ext]' ////////////////////////
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(), // 请确保引入这个插件来施展魔法
        new webpack.BannerPlugin('測試BannerPlugin'), // webpack內置插件 主要用於版權聲明 
        new HtmlWebpackPlugin({
            template: 'index.html'
        }), // 生成html的插件 並根據該目錄下的index.html去生成模板
        new UglifyjsWebpackPlugin()
    ],
    devServer: { // 搭建本地伺服器 插件 webpack-dev-server
        contentBase: './dist',
        inline: true,
    }
}