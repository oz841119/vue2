import Vue from 'vue' // 1.導入Vue
import VueRouter from 'vue-router' // 2.導入Vue路由

// *  導入Vue組件文件 * //
// import Home from '../components/Home'
// import About from '../components/About'
// import Sale from '../components/Sale'
// import User from '../components/User'

// * 實現懶加載 * //
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const Sale = () => import('../components/Sale')
const User = () => import('../components/User')

// import { component } from 'vue/types/umd' 意義不明 待釐清

Vue.use(VueRouter) // 3.使用Vue路由

// 4. 創建實例  一個映射關係就是一個物件
const routes = [{
        path: '', //默認
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/sale',
        component: Sale
    },
    {
        path: '/user/:userID', // 配置動態路由
        component: User
    }
]

const router = new VueRouter({
    // 配置路由與組件之間的關係
    routes: routes,
    mode: 'history', //將默認的hash值改為history 主要讓url的路徑不要出現#符號
    linkActiveClass: 'active' //默認(活躍中)標籤會有一個類名 可以將這個類名透過這種方式修改
})

// 5. 導出
export default router

///// 原本生成的導出配置
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })