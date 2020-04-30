import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home")
const Discovery = () => import("views/discovery/Discovery")
const Channels = () => import("views/channels/Channels")
const Profile = () => import("views/profile/Profile")
const ProfileCollections = () => import("views/profile/children/ProfileCollections")
const ProfilePosts = () => import("views/profile/children/ProfilePosts")
const ProfileLikes = () => import("views/profile/children/ProfileLikes")
const SetInfo = () => import("views/profile/children/SetInfo")
const CategoriesWork = () => import("views/channels/children/children/CategoriesWork")

const Login = () => import("common/login/Login")
const Register = () => import("common/login/Register")


Vue.use(VueRouter)

const routes = [
  // 重定向路径页面
  {
    path: '',
    redirect: '/home'
  }, {
    // 首页
    path: '/home',
    component: Home,
    meta: {
      title: '句子控'
    },
  }, {
    // 句子页面
    path: '/discovery',
    component: Discovery,
    meta: {
      title: '句子'
    },
  }, {
    // 分类页面
    path: '/channels',
    component: Channels,
    meta: {
      title: '分类'
    },
  }, {
    // 个人中心
    path: '/profile/:id',
    component: Profile,
    meta: {
      title: '个人中心'
    },
    // 3个tab子路由
    children: [
      // {
      //   path: '',
      //   redirect: '/profile/:id/profileCollections'
      // },
      {
        path: '/profileCollections',
        component: ProfileCollections,
        meta: {
          title: '个人专辑'
        },
      }, {
        path: '/profilePosts',
        component: ProfilePosts,
        meta: {
          title: '个人句子'
        },
      }, {
        path: '/profileLikes',
        component: ProfileLikes,
        meta: {
          title: '个人喜欢'
        },
      }
    ]
  }, {
    // 专辑分类页面
    path: '/setInfo',
    component: SetInfo,
    meta: {
      title: '账号设置'
    },
  }, {
    // 专辑分类页面
    path: '/categories/work/:workId',
    component: CategoriesWork,
    meta: {
      title: '专辑分类'
    },
  }, {
    // 登陆页面
    path: '/login',
    component: Login,
    meta: {
      title: '登陆'
    },
  }, {
    // 注册页面
    path: '/register',
    component: Register,
    meta: {
      title: '注册'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 每个导航对应窗口的名字
// 前置钩子（hook回调）（在跳转之前就改）
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title;
  // console.log(to);
  next();
})

export default router