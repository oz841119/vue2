README.md
**1. 依賴Node及Webpack環境**

**2. 安裝方式 (vueCLI2.x模板)**
>     2-1. (全局)npm install @vue/cli -g (此為安裝CLI3以上的版本) (本節全局配置 4.5.13)
>     2-2. (全局)npm install -g @vue/cli-init (橋接器 用於拉取CLI2.X模板)

>     2-3. (局部)vue init webpack projectName (透過vue init指令(CLI2) 安裝webpack)
>     並進入選項安裝
    . Use ESLint to lint your code(Y/n): 針對JS進行程式碼規範 一般不會使用
    . 使用ESLint的話: 選用某個規範或自訂規範
    . Set up unit tests(Y/n): 單元測試
    . Setup e2e tests with Nightwatch(Y/n): 端到端測試 
    . 選擇包管理工具（NPM or Yarn)