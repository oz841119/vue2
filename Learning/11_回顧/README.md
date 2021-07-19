計算屬性computed
  - fullname(){ set() , get() }  但使用computed一般不傳set方法

computed 及 motheds對比
  - compputed多次使用時，只會調用一次
  - 具有緩存
-------

v-on 事件監聽使用
  - @

參數問題
  - btnClick($event) 可以傳入一個$event事件實參給形參

修飾符
  - .stop (阻止點擊事件的冒泡)
  - .prevent (提交事件時不重載頁面)
  - .enter (監聽enter鍵帽)
  - .once 
-------

條件判斷 
  - v-if / v-else-if / v-else
  - v-show / v-if 區別
        v-show決定display是否為none  v-if決定標籤是否渲染
-------

遍歷數組
  - 可獲取值及數組 (value, index) in Array

遍歷物件
  - 可獲取 key / value / index

Array哪些方法是響應式的
  - 直接透過Array[index] = newValue 不會是響應式的 (06_v-for遍歷：04_數組的vue響應)
-------

v-model雙向綁定
  - v-model本質 => v-bind:value and v-on:input
  - 修飾符: lazy / mumber / trim  
-------

組件化開發(*)
  - 基本使用
  - 全局及局部組件
  - 模板分離寫法
  - 父子組件
-------

組件數據存放
  - 子組件不能「直接」訪問父組件
  - 子組件擁有自己的data 且跟new Vue實例不同的是 子組件的data必須是個函數 並返回數據
-------

父子通訊
  - 父傳子: props
  - 子傳父: $emit