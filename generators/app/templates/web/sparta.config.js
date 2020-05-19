const proxyServerConfig = require('./config/proxyServer')

module.exports = {
  favicon: 'favicon.ico',

  webpack: {
    publicPath: process.env.NODE_ENV === 'production' ? process.env.CDN : '/'
  },

  devServer: {
    proxy: [{
      context: ['/api', '/mock-switch'],
      target: `http://localhost:${proxyServerConfig.port}`
    }],
<% if (useRouterHistory) { -%>
    historyApiFallback: true
<% } else { -%>
    historyApiFallback: false
<% } -%>
  }
}