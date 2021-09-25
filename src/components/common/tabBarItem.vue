<template>
    <div class="tab-bar-item" @click="itemClick">
      <slot name="img" v-if="!isActive"></slot>
      <slot name="img-active" v-else></slot>
      <div :class="{active:isActive}"><slot name="text"></slot></div>

    </div>
</template>

<script>
    export default {
        name: "tabBarItem",
      props:{
          path:String
      },
      data(){
          return{
            // isActive:true
          }
      },
      computed:{
          isActive(){
            return this.$route.path.indexOf(this.path) !== -1
          }
      },
      methods:{
        itemClick(){
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style scoped>

</style>
