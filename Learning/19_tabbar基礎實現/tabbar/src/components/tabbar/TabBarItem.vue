<template>
    <!-- 一般不建議在插槽使用v-if或任何樣式指令 所以外面包一層div使用 -->
    <div class="tab-bar-item" :class="{active: isActive}">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <slot name="item-font"></slot>
        <!-- <img src="../../assets/img/tabbar/home.png">
        <div>首頁</div> -->
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    data(){
      return {
        isActive: true
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
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin: 3px 0 0;
    vertical-align: middle;
  }

  .active {
    color: red;
  }
</style>