// prod.config.js => 生產時使用

const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin') // 導入壓縮的擴展插件
const webpackMerge = require('webpack-merge') // 導入合併插件
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new UglifyjsWebpackPlugin()
    ],
})

// module.exports = {
//     plugins: [
//         new UglifyjsWebpackPlugin()
//     ],
// }