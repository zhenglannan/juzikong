import Vue from 'vue'
import VueRouter from 'vue-router'

// 导航组件重复点击报错 NavigationDuplicated
//禁止全局路由错误处理打印
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function repalce(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

const Home = () => import("views/home/Home")
const Discovery = () => import("views/discovery/Discovery")
const Channels = () => import("views/channels/Channels")
const Profile = () => import("views/profile/Profile")
const DiscoveryContent = () => import("views/discovery/children/DiscoveryContent")

// const ProfileCollections = () => import("views/profile/children/ProfileCollections")
// const ProfilePosts = () => import("views/profile/children/ProfilePosts")
// const ProfileLikes = () => import("views/profile/children/ProfileLikes")
const SetInfo = () => import("views/profile/children/SetInfo")
const CategoriesWork = () => import("views/channels/children/children/CategoriesWork")
const CategoriesAuthor = () => import("views/channels/children/children/CategoriesAuthor")
const CategoriesAuthorCountry = () => import("views/channels/children/children/CategoriesAuthorCountry")
const CategoriesAuthorDynasty = () => import("views/channels/children/children/CategoriesAuthorDynasty")
const CategoriesAuthorJob = () => import("views/channels/children/children/CategoriesAuthorJob")


const Login = () => import("common/login/Login")
const Register = () => import("common/login/Register")

const CollectionDetail = () => import("content/collectionDetail/CollectionDetail")
const SentenceDetail = () => import("content/sentence/SentenceDetail")
const Search = () => import("content/search/Search")

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
    children: [
    //   {
    //   path: '/discovery',
    //   redirect: '/discovery/hot',
    // }, 
    {
      path: ':tag',
      component: DiscoveryContent,
    }]
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
    // children: [
    //   // {
    //   //   path: '',
    //   //   redirect: '/profile/:id/profileCollections'
    //   // },
    //   {
    //     path: '/profileCollections',
    //     component: ProfileCollections,
    //     meta: {
    //       title: '个人专辑'
    //     },
    //   }, {
    //     path: '/profilePosts',
    //     component: ProfilePosts,
    //     meta: {
    //       title: '个人句子'
    //     },
    //   }, {
    //     path: '/profileLikes',
    //     component: ProfileLikes,
    //     meta: {
    //       title: '个人喜欢'
    //     },
    //   }
    // ]
  }, {
    //账号设置
    path: '/setInfo',
    component: SetInfo,
    meta: {
      title: '账号设置'
    },
  }, {
    // 专辑作品分类页面
    path: '/categories/work/:type',
    component: CategoriesWork,
    meta: {
      title: '专辑作品分类'
    },
  }, {
    // 专辑作者分类页面
    path: '/categories/author',
    component: CategoriesAuthor,
    meta: {
      title: '专辑作者分类'
    },
    children: [{
      // 子路由前面不加斜杠
      path: 'country/:authorType',
      component: CategoriesAuthorCountry,
      // meta: {
      //   title: '专辑作者分类'
      // },
    }, {
      path: 'dynasty/:authorType',
      component: CategoriesAuthorDynasty,
    }, {
      path: 'job/:authorType',
      component: CategoriesAuthorJob,
    }]
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
  },
  {
    // 点开专辑
    path: '/collectionDetail/:id',
    component: CollectionDetail,
  },
  {
    // 点开juzi
    path: '/sentenceDetail/:id',
    component: SentenceDetail,
  },
  {
    // 搜索界面
    path: '/search',
    component: Search,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: '/dist/',
  routes
})

// 每个导航对应窗口的名字
// 前置钩子（hook回调）（在跳转之前就改）
// router.beforeEach((to, from, next) => {
//   // 从from跳转到to
//   document.title = to.matched[0].meta.title;
//   // console.log(to);
//   next();
// })

export default router