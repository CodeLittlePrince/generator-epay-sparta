const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackDev = require('./webpack.config.dev')
const devConfig = require('./dev.config')
const webpackConfigBase = require('./webpack.config.base')

async function serve() {
  // 设置静态资源路径
  const {
    ip,
    devServerPort,
    devLocalHost,
    devServerHost,
    proxyServerHost,
  } = await devConfig.getDevConfig()
  // webpack entry注入热更新需要的js
  injectDevHotReloadEntries(devServerHost)
  // 编译webpack
  const compiler = webpack(webpackDev)
  // 编译webpack完后终端提示
  webpackCompileDoneTip(compiler, devLocalHost, devServerHost, proxyServerHost)
  // devServer初始化
  const devServer = initDevServer(compiler, proxyServerHost)
  // 监听终端信号关闭devServer进程
  listenProcessSignalForServerClose(devServer)
  // devServer错误提示
  listenDevServerErrorForTip(devServer, ip, devServerPort)
}

// 启动devServer
serve()

function injectDevHotReloadEntries(publicUrl) {
  // inject dev & hot-reload middleware entries
  const sockjsUrl = `?${publicUrl}/sockjs-node`
  // inject dev/hot client
  webpackDev.entry.app.push(
    // dev server client
    require.resolve('webpack-dev-server/client') + sockjsUrl,
    // hmr client
    require.resolve('webpack/hot/dev-server')
  )
}

function initDevServer(compiler, proxyServerHost) {
  return new WebpackDevServer(
    compiler,
    {
      clientLogLevel: 'none',
      quiet: true,
      proxy: {
        // 凡是 `/api` 开头的 http 请求，都会被代理到 target 上，由 koa 提供 mock 数据。
        // koa 代码在 ./mock 目录中，启动命令为 npm run mock。
        '/': {
          target: proxyServerHost, // 如果说联调了，将地址换成后端环境的地址就哦了
          secure: false,
          changeOrigin: true,
          // Skipping proxy for browser request
          bypass: function(req) {
            if (
              req.headers.accept.indexOf('html') !== -1 &&
              req.url !== '/mock-switch/'
            ) {
              return '/index.html'
            }
            if (-1 < req.url.indexOf('favicon.ico')) {
              return '/favicon.ico'
            }
          }
        }
      },
      disableHostCheck: true, // 为了手机可以访问
      contentBase: webpackConfigBase.resolve('dev'), // 本地服务器所加载的页面所在的目录
      watchContentBase: true,
      inline: true, // 实时刷新
      hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
  )
}

function webpackCompileDoneTip(compiler, devLocalHost, devServerHost, proxyServerHost) {
  // 编译完成后提示文案
  compiler.hooks.done.tap('Webpack devServer serve', stats => {
    if (stats.hasErrors()) {
      return
    }
    console.log()
    console.log('  App running at:')
    console.log(`  - Local:   ${chalk.cyan(devLocalHost)}`)
    console.log(`  - Network: ${chalk.cyan(devServerHost)}`)
    console.log(`  - Mock:    ${chalk.cyan(proxyServerHost)}`)
    console.log()
    console.log('  Note that the development build is not optimized.')
    console.log(`  To create a production build, and take a view of files' size, run ${chalk.cyan('npm run analyze')}.`)
    console.log()
  })
}

/**
 * 关闭监听保证进程关闭
 * @param {object} server webpackDevServer
 */
function listenProcessSignalForServerClose(server) {
  ;['SIGINT', 'SIGTERM'].forEach(signal => {
    process.on(signal, () => {
      server.close(() => {
        process.exit(0)
      })
    })
  })
}

function listenDevServerErrorForTip(server, ip, devServerPort) {
  server.listen(devServerPort, ip, err => {
    err && console.log(err)
  })
}