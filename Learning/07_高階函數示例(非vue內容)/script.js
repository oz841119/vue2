// 編程範式： 命令式(原生js) / 聲明式(Vue.js)
// 編程範式： 面向物件 / 面向函數

// < -- 基礎寫法 : 將數組的值*2並相加-- >
// 1. 取出原數組小於10的值
let numArr = [2, 50, 8, 93, 5, 20, 48, 4, 58, 30, 40, 2, 4, 3, 22, 1, 28, 7, 90, 9];
let newNumArr = [];
for (let n of numArr) {
    if (n < 10) {
        newNumArr.push(n)
    }
}
console.log(newNumArr);

// 2.將值*2
let newNumArr2 = []
for (let n of newNumArr) {
    newNumArr2.push(n * 2)
}
console.log(newNumArr2);

// 3.將所有數字相加得到最終結果
let totalNum = 0;
for (let n of newNumArr2) {
    totalNum += n
}
console.log(totalNum);


// < -- 高階函數 filter / map / reduce -- >

// filter 中的回調函數有一個要求: 必須返回布爾值 , 當值為trun時，回調函數會將返回的值加入到數組中
// 1. 取出原數組小於10的值
let arr = [12, 4, 79, 594, 39, 5, 6, 39, 2, 9, 55, 43, 6, 9, 48]
let newArr = arr.filter(function(n) { // n為當次遍歷的元素
    return n < 10 // 返回true時 將值加入到新數組中
})
console.log(newArr);

// map 中需要有一個回調函數 會遍歷數組 並返回值加入新的數組
// 2. 將數組的值*2
let newArr2 = newArr.map(function(n) {
    return n * 2
})
console.log(newArr2);

// reduce一般有兩個參數 回調函數及初始值(一般為0(可選)) 
// 而回調函數中需有兩個值 1.累加器 一般指上一個的返回值 2.當前元素
// 3. 將數組的值加總後加上1000
let newArr3 = newArr2.reduce(function(result, n) {
    return result + n;
}, 1000)
console.log(newArr3);


// < -- 綜合用法 filter / map / reduce -- >
// 需求：將數組的值加總後*2 再加上1000
let array = [12, 4, 79, 594, 39, 5, 6, 39, 2, 9, 55, 43, 6, 9, 48];
let sum = array.filter(function(n) {
    return n < 10;
}).map(function(n) {
    return n * 2;
}).reduce(function(result, n) {
    return result + n
}, 1000)

console.log(sum);

// < -- 箭頭函數寫法 --> 
let arw = [12, 4, 79, 594, 39, 5, 6, 39, 2, 9, 55, 43, 6, 9, 48];
let arwSum = arw.filter(n => n < 10).map(n => n * 2).reduce((result, n) => result + n, 1000);
console.log(arwSum);