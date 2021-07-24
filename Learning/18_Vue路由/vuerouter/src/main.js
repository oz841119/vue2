import Vue from 'vue'
import App from './App'
import router from './router' // 導入 (如果導入的是一個文件夾 那默認會找到文件夾中的index.js)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router, // 將index.js的路由實例掛載上來
    render: h => h(App)
})