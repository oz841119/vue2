<template>
  <div>
      <h2>我是user</h2>
      <p>我是user內容</p>
      <!-- 獲取下方的計算屬性 -->
      <p>您登入的帳號是：{{userID}}</p>
  </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
      userID(){ // 取得App.vue userID的值
        return this.$route.params.userID
      }
    }
}
</script>

<style>

</style>