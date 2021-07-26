import Vue from 'vue' // 1.導入Vue
import VueRouter from 'vue-router' // 2.導入Vue路由
// import { component } from 'vue/types/umd'

// *  導入Vue組件文件 * //
// import Home from '../components/Home'
// import About from '../components/About'
// import Sale from '../components/Sale'
// import User from '../components/User'

// * 實現懶加載 * //
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const Sale = () => import('../components/Sale')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
const Test = () => import('../components/Test')

// import { component } from 'vue/types/umd' 意義不明 待釐清

Vue.use(VueRouter) // 3.使用Vue路由

// 4. 創建實例  一個映射關係就是一個物件
const routes = [{
        path: '', //默認
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首頁'
        },
        children: [
            {
                path:'', // 默認
                redirect: 'news'
            },
            {
                path:'news', // 子路由不需加/ 會自動拼接
                component: HomeNews
            },
            {
                path:'message', // 子路由不需加/ 會自動拼接
                component: HomeMessage
            },
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '關於'
        },
    },
    {
        path: '/sale',
        component: Sale,
        meta: {
            title: '銷售'
        },
    },
    {
        path: '/user/:userID', // 配置動態路由
        component: User,
        meta: {
            title: '用戶'
        },
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '檔案'
        },
    },
    {
        path: '/test',
        component: Test,
        meta: {
            title: '測試'
        },
    }
]

const router = new VueRouter({
    // 配置路由與組件之間的關係
    routes: routes,
    mode: 'history', //將默認的hash值改為history 主要讓url的路徑不要出現#符號
    linkActiveClass: 'active' //默認(活躍中)標籤會有一個類名 可以將這個類名透過這種方式修改
})
router.beforeEach(
    (to,from,next) =>  // 取得每頁的title
        { document.title = to.matched[0].meta.title 
          next()  // 這個next是必須調用的  這個方法之後會用來做判斷用戶是否有登陸
        }
)

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