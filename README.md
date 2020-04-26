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

+ 发布新句子dialog中设置dialogFormVisible为vuex的state,就不能点击遮罩层或者右上方进行关闭
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
