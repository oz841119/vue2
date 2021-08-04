import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// // 設置默認值 
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([axios({
//   // url: 'http://123.207.32.32:8000/home/multidata'
//   url: '/home/multidata'
// }), axios({
//   // url: 'http://123.207.32.32:8000/home/data',
//   url: '/home/data',
//   parms: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(results => 
//   {console.log(results);
//     console.log(results[0]);
//     console.log(results[1]);
// })

// 一般項目不會只有向一個地方進行請求 所以一般不會以全局axios配置 而是創建實例// 
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance1({
  url: '/home/multidata'
}).then(res => {console.log(res)})

instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {console.log(res)})