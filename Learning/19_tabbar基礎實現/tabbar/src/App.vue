<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.png" alt="">
        <div slot="item-font">首頁</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category-active.png" alt="">
        <div slot="item-font">分類</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/cart.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/cart-active.png" alt="">
        <div slot="item-font">購物車</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/account.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/account-active.png" alt="">
        <div slot="item-font">我的</div>
      </tab-bar-item>
    </tab-bar> <!-- 3.使用組件 -->
  </div>
</template>

<script>
// import { component } from 'vue/types/umd'
  import TabBar from "./components/tabbar/TabBar" // 1.導入組件
  import TabBarItem from "./components/tabbar/TabBarItem"
  export default {
    name: 'App',
    components: {
      TabBar,  // 2.註冊組件
      TabBarItem
    }
  }

</script>

<style>
  @import "./assets/css/base.css";

</style>
