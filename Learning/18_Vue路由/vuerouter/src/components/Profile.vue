<template>
  <div>
      <h2>我是檔案</h2>
      <p>我是檔案內容</p>
      <!-- 獲取App.vue內的數據 -->
      <p>{{$route.query.name}}</p> 
      <p>{{$route.query.age}}</p>
  </div>
</template>

<script>
export default {
}
</script>
<style>

</style>