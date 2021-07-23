// 使用commonjs的模塊化規劃
const { add, mul } = require('./mathUtils.js')
console.log(add(20, 30));
console.log(mul(20, 30));

// 使用ES6的模塊化規劃
import { name, age, height } from "./info.js"
console.log(name);
console.log(age);
console.log(height);