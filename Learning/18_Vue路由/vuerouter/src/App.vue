<template>
  <div id="app">
    <router-view></router-view>
    <!-- 根據路徑渲染組件 tag默認為<a> 也可以指定一些其他東西 -->
    <!-- 渲染成button: tag="button" -->
    <router-link to="/home">首頁</router-link> 
    <router-link to="/about" tag="button">關於</router-link>
    <!-- 也可以透過監聽的方式來達到link and to的目的 -->
    <button @click="btnClick">銷售</button> 
    <!-- 配置動態路由 -->
    <router-link v-bind:to="'/user/'+userID">使用者</router-link> 
  </div>
</template>

<script>
export default {
  name: 'App',
  // 使用方法監聽銷售btn被點擊
  methods: {
    btnClick(){
      this.$router.push('/sale')
      // 這種方式不會生成類名 
      // 不要用history去進行這件事 必須經由router去執行
    }
  },
  data(){
      return {userID: 'YiliChen'}
  }
}
</script>

<style>
  .active {
    color: red
  }
</style>
