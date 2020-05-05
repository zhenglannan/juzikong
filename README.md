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
