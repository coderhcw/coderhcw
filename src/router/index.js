// import Vue from 'vue'
// import VueRouter from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
const routerHistory = createWebHistory(process.env.BASE_URL)


const home = () => import('../views/home/home')
const cart = () => import('../views/cart/cart')
const profile = () => import('../views/profile/profile')
const category = () => import('../views/category/category')
// Vue.use(VueRouter)
const routes =[
    {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        component:home
      },
      {
        path:'/cart',
        component:cart
      },
      {
        path:'/profile',
        component:profile
      },
      {
        path:'/category',
        component:category
      }
]
const router = createRouter({
  history: routerHistory,
 routes
})
export default router