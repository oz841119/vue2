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
1. 專案內的build and config皆為webpack的配置
2. 首次架完腳手架的閱讀順序
    2-1. package.json: scripts物件 - 了解我們可以透過命令行執行時的配置
        2-1-1. npm run build: 在node環境內執行js
            2-1-1-1. node.js主要透過C++開發 並非純是javascript 
                        可以幫助js可以在除了瀏覽器之外(node)的環境執行
                       (待考證) 