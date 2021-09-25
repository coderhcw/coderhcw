<template>
  <div>
    <router-view></router-view>

    <tab-bar>
      <tab-bar-item path="/home">
      <template v-slot:img>
        <img src="~assets/img/girl.png" alt="" >
      </template>
      <template v-slot:img-active>
        <img src="~assets/img/hairboy.png" alt="">
      </template>
      <template v-slot:text>
        <div>首页</div>
      </template>
      </tab-bar-item>
      <tab-bar-Item path="/category">
     <template v-slot:img>
        <img src="~assets/img/girl.png" alt="" >
      </template>
      <template v-slot:img-active>
        <img  src="~assets/img/hairboy.png" alt="">
      </template>
         <template v-slot:text>
        <div>分类</div>
      </template>
      </tab-bar-Item>
      <tab-bar-Item path="/cart">
        <template v-slot:img>
        <img src="~assets/img/girl.png" alt="" >
      </template>
      <template v-slot:img-active>
        <img  src="~assets/img/hairboy.png" alt="">
      </template>
        <template v-slot:text>
        <div>购物车</div>
      </template>
      </tab-bar-Item>
      <tab-bar-Item path="/profile">
       <template v-slot:img>
        <img src="~assets/img/girl.png" alt="" >
      </template>
      <template v-slot:img-active>
        <img  src="~assets/img/hairboy.png" alt="">
      </template>
          <template v-slot:text>
        <div>我的</div>
      </template>
      </tab-bar-Item>

    </tab-bar>
  </div>


</template>

<script>

  import tabBar from 'components/common/tabBar'
  import tabBarItem from 'components/common/tabBarItem'
  export default {
    name: 'App',
    components: {
      tabBar,
        tabBarItem
    }
}
</script>

<style>

</style>
