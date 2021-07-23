import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
    el: '#app',
    // render: h => h(App)    <- 原來的only寫法 

    // render的函數參數h 實際上是createElement So
    // rednder: h => h(App) 以ES5的寫法可以是
    render: function(createElement) {
            return createElement(
                'h2', { class: 'box' }, [
                    'Hello World',
                    createElement('button', ['按鈕'])
                ],
            )
        }
        // 1. createElement('標籤div', { 標籤屬性class = 'className' }, ['內容'])
})



// render -> vdom -> UI