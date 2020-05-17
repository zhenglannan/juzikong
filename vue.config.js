module.exports = {
  // publicPath:'./',
  configureWebpack: {
    // 配置路径的时候
    resolve: {
      // extension配置默认后缀名不用写

      // 别名的配置
      alias: { 
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
        // 'common':'@/common'
      }
    },
    // 开发模式代理，打包去掉，同一环境同端口下是不存在跨域问题的了
    devServer: { 
      //代理多个路径特定到同一个 target 下
      proxy: 'http://127.0.0.1:3000/'
    }
  }
}