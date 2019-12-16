const devConfig = require('../webpack/dev.config')
const path = require('path')
// mock文件的根目录
const mockRoot = path.join(__dirname, './mockData')
const KoaMockSwitch = require('koa-mock-switch')
// mock管理列表
const mockSwitchMap = require('./mockSwitchMap')
const mock = new KoaMockSwitch({
  root: mockRoot,
  port: devConfig.proxyServerPort,
  switchMap: mockSwitchMap,
  apiPrefix: '',
  apiSuffix: '.json'
})
// 启动mock服务
mock.start()
// nodemon会command+c终止终端都无法关闭mock进程
// 所以需要进程接受信号来调用koa-mock-switch接口来关闭
;['SIGINT', 'SIGTERM'].forEach(signal => {
  process.on(signal, () => {
    mock.stop()
  })
})