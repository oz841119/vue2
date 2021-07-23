# vueclitest1
> A Vue.js project
## Build Setup
``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


---------------------------
### 1. 專案內的build and config皆為webpack的配置

### 2. 首次架完腳手架的閱讀順序
    . package.json: scripts物件 - 了解我們可以透過命令行執行時的配置
    . npm run build: 在node環境內執行js (當前目錄: node textName.js)
    . 可以幫助js可以在除了瀏覽器之外的(node)環境執行
    
##### 額外補充：
JS在透過瀏覽器執行時，會先生成字結碼，讓瀏覽器進行解析
但有一說是：V8引擎直接跳過了字結碼，直接將JS編譯成二進制程式碼去解析，
    