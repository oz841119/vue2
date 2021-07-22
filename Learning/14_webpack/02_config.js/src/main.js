// 使用commonjs的模塊化規劃
const { add, mul } = require('./js/mathUtils.js')
console.log(add(20, 30));
console.log(mul(20, 30));

// 使用ES6的模塊化規劃
import { name, age, height } from "./js/info.js"
console.log(name);
console.log(age);
console.log(height);

// 依賴css
require('./css/normal.css');

// 依賴less
require('./css/special.less')

document.write('serverTest1')

// 使用Vue進行開發
import Vue from 'vue'
// import { component } from "vue/types/umd";
// import App from './vue/app.js'
import App from './vue/app.vue'
// ------ 


new Vue({
    el: '#app',
    template: '<App></App>',
    components: {
        App
    }
})