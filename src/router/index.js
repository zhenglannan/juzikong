import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home")
const Discovery = () => import("views/discovery/Discovery")
const Channels = () => import("views/channels/Channels")
const Profile = () => import("views/profile/Profile")
const CategoriesWork = () => import("views/channels/children/children/CategoriesWork")

Vue.use(VueRouter)

const routes = [
  // 重定向路径页面
  {
    path: '',
    redirect: '/home'
  }, {
    // 首页
    path: '/home',
    component: Home
  }, {
    // 句子页面
    path: '/discovery',
    component: Discovery
  }, {
    // 分类页面
    path: '/channels',
    component: Channels
  }, {
    // 我的页面
    path: '/profile',
    component: Profile
  }, {
    // 专辑分类页面
    path: '/categories/work/:workId',
    component: CategoriesWork
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router