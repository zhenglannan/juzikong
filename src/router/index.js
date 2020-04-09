import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=>import("views/home/Home") 
const Discovery =()=>import("views/discovery/Discovery") 
const Channels =()=>import("views/channels/Channels") 
const Profile =()=>import("views/profile/Profile") 
const CategoriesWork =()=>import("views/channels/children/children/CategoriesWork") 

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/discovery',
    component: Discovery
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/channels',
    component: Channels
  }, {
    path: '/profile',
    component: Profile
  }, 
  {
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
