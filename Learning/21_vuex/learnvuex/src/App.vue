<template>
  <div id="app">
    <h2>------------------App內容: modulesA內容 ------------------</h2>
    <h2>{{$store.state.modulesA.name}}</h2>
    <button @click="updateName()">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">異步修改名字</button>
    <br>
    <h2>------------------App內容: info物件的內容是否為響應式------------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改資訊</button>
    <br>
    <h2>------------------App內容------------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="subtraction">-</button>
    <button @click="addition">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent(10)">添加學生</button>
    <br>
    <h2>------------------App內容: getter相關------------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>超過20歲的有{{$store.getters.more20stuLength}}個</h2>
    <h2>{{$store.getters.moreAgeStu(11)}}</h2>
    <br>
    <h2>------------------HelloVuex內容------------------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data(){
    return {
      message: 'I am App',
    }
  },
  methods: {
    addition(){
      this.$store.commit("increment")
    },
    subtraction(){
      this.$store.commit("decrement")
    },
    addCount(count){
      this.$store.commit('incrementCount', count)
    },
    addStudent(){
      const stu = {id: 114, name: '曾志偉', age: 50}
      this.$store.commit('addStudent', stu)
    },
    updateInfo(){
      // this.$store.commit('updateInfo') // 如為同步 直接提交到mutations 
      this.$store.dispatch('aUpdateInfo') // 如要執行異步操作 須先指派給actions 再由actions進行提交
    },
    updateName(){
      this.$store.commit('updataName', '趙麗穎')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
  #app {
    font-size: 12px;
  }
</style>
