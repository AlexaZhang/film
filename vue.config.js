// vue.config.js
module.exports = {
    publicPath:'/miaomiao',
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target:"http://39.97.33.178/api",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
    
  }
  // .env.development
  VUE_APP_BASE_API='/api'