// import Vue from 'vue'
// import Router from 'vue-router'
// // import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// 1. 導入及安裝插件
import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
Vue.use(VueRouter)  

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 2. 創建路由物件及配置映射
const routes = [
    {
        path: '',
        redirect: '/home'   // 默認
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
]
const router = new VueRouter({
    routes,
    mode: 'history' // 將路徑從hish模式改為history
})

// 3. 導出
export default router 