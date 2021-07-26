<template>
  <div>
      <h2>我是首頁</h2>
      <p>我是首頁內容</p>
      <!-- 子路由顯示 -->
      <router-link to="/home/news" tag="button">新聞</router-link>
      <router-link to="/home/message" tag="button">消息</router-link>
      <router-view></router-view>
  </div>
</template>

<script> // 導出
export default {
  
  // 前兩個函數，只有該組件被保持狀態(keep-alive)時才有效 最後一個函數用於保留狀態 下次切換回去時保持原有狀態
  activated() {
    this.$router.push(this.path);
    console.log('home活躍中');
  },
  deactivated(){
    console.log('離開了home');
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  }
}
</script>

<style>

</style>