# juzikong

+ localStorage.setItem(key, String), set的值必须是字符串，如果你的数据是对象都需要先行转换（JSON.stringify(xxx)）,取出时localStorage.getItem(key)，如果不是字符串，取出后可以通过JSON.parse(xxx)转回对象。

+ axios 传递query参数params时须有user_id: user_id
 export function getOtherUserInfo(user_id) {
  return axios('/admin/getOtherUserInfo', {
    params: {
      user_id: user_id
    }
  })
}

+ dialog作组件时不能点击遮罩层或者右上方进行关闭,会直接改变props(子组件不允许直接修改父组件传过来的prop)

+  前置钩子偶尔不能显示meta
``` // 前置钩子（hook回调）（在跳转之前就改）
 router.beforeEach((to, from, next) => {
   // 从from跳转到to   
   document.title = to.matched[0].meta.title;
  // console.log(to);
   next();
 }) 
```
+ 子路由的path前面不加斜杠\

+ $router.push跳转界面不刷新（一般跳本界面）:watch监听$route(to),打印to

+ 单行文本垂直居中height=line-height

+ pre自动换行要设置    white-space: pre-wrap;

+ 导航组件重复点击报错 NavigationDuplicated(也就是说这是vue-router3.1版本之后，对于航组件重复点击的一个错误处理方式。)
   - 降版
   - 禁止全局路由错误处理打印(在引用VueRouter处添加)
     + ```const originalPush = VueRouter.prototype.push
          VueRouter.prototype.push = function push(location, onResolve, onReject) {
            if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
            return originalPush.call(this, location).catch(err => err)
          }

          const originalReplace = VueRouter.prototype.replace
          VueRouter.prototype.replace = function repalce(location, onResolve, onReject) {
            if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
            return originalReplace.call(this, location).catch(err => err)
          }```    
   - 为每一个增加回调函数
     + ```this.$router.push('/location').catch(err => {err});```
     + ```this.$router.replace('/location').catch(err => {err});```


     
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
