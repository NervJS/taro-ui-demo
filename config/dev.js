module.exports = {
  weapp: {
    module: {
      postcss: {
        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          limit: 102400000000
        }
      }
    }
  },
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  weapp: {},
  h5: {}
}
