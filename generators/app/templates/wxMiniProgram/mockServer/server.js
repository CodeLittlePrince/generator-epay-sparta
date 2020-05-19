const path = require('path')
const KoaMockSwitch = require('koa-mock-switch')
// mock文件的根目录
const mockRoot = path.join(__dirname, './mock')
const port = 8300
const mock = new KoaMockSwitch({
  root: mockRoot,
  port,
  apiPrefix: '',
  apiSuffix: '.htm',
})

// 启动mock服务
mock.start()
console.log(`数据模拟服务运行在${port}端口，对应域名请查看config/env.js配置`)

// eslint-disable-next-line semi-style
;['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, () => {
    mock.stop()
  })
})
