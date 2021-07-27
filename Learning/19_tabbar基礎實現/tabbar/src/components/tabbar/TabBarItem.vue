<template>
    <!-- 一般不建議在插槽使用v-if或任何樣式指令 所以外面包一層div使用 -->
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-font"></slot></div>
        <!-- <img src="../../assets/img/tabbar/home.png">
        <div>首頁</div> -->
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    // data(){
    //   return {
    //     isActive: isActive == this.$route.path
    //   }
    // },
    computed: {
      isActive() {
        // 用於判定當前活躍的是哪個組件
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){ 
        return this.isActive ? {color: this.activeColor, fontWeight: this.activeFontWeight} : {}
      }
    },
      props: {  // 接收從App.vue傳來的path
        path: String,
        activeColor: {
          type: String,
          default: "red" 
          // 如果App.vue內沒有傳activeColor屬性 則默認活躍時為紅色
        },
        activeFontWeight: {
          type: String,
          default: "500"
        }
    },
      methods: {
        itemClick(){
        if (this.$route.path !== this.path){
          this.$router.push(this.path)
        } // 避免因重複點擊瀏覽器報錯
      }
    }
}
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -1px 1px rgba(0,0,0,.1);
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;   /* 補充:一般tabbar設計都是49px的高度 */ 
    font-weight: 300;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin: 3px 0 0;
    vertical-align: middle;
  }

</style>