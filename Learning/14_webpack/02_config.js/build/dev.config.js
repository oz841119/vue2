// dev.config.js => 開發時才使用

const webpackMerge = require('webpack-merge') // 導入合併插件
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    devServer: { // 搭建本地伺服器 插件 webpack-dev-server
        contentBase: './dist',
        inline: true,
    }
})

// module.exports = {
//     devServer: { // 搭建本地伺服器 插件 webpack-dev-server
//         contentBase: './dist',
//         inline: true,
//     }
// }