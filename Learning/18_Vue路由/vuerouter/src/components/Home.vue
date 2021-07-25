<template>
  <div>
      <h2>我是首頁</h2>
      <p>我是首頁內容</p>
      <!-- 子路由顯示 -->
      <router-link to="/home/news">新聞</router-link>
      <router-link to="/home/message">消息</router-link>
      <router-view></router-view>
  </div>
</template>

<script> // 導出
export default {
    name: 'Home'  
}
</script>

<style>

</style>