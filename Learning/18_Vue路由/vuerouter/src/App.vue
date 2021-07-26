<template>
  <div id="app">
    <!-- 根據路徑渲染組件 tag默認為<a> 也可以指定一些其他東西 -->
    <!-- 渲染成button: tag="button" -->
    <router-link to="/home" tag="button">首頁</router-link> 
    <router-link to="/about" tag="button">關於</router-link>

    <!-- 也可以透過監聽的方式來達到link and to的目的 -->
    <button @click="btnClick">銷售</button> 
    <button @click="profileClick">檔案</button>
    <button @click="testClick">route和router差別</button>
    <!-- 配置動態路由 -->
    <router-link v-bind:to="'/user/'+userID" tag="button">使用者</router-link> 

    <!-- <router-link v-bind:to="{path: '/profile', query: {name: 'Yili', age: '18'}}" tag="button">檔案</router-link> -->
    <!-- 透過button實現 -->

    <!-- 展示 (keep-alive用於緩存 以實現需求使用) -->
    <keep-alive>  
      <router-view ></router-view>
    </keep-alive>
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
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: '劉德華',
          age: 26        
        }
      })
    },
    testClick(){
      this.$router.push('/test');
      console.log(this.$router);
      console.log(this.$route);
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
