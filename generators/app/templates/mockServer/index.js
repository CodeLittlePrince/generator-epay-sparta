const proxyConfig = require('../webpack/proxy.config')
const path = require('path')
// mock文件的根目录
const mockRoot = path.join(__dirname, '../mock')
// require koa-mock-switch
const KoaMockSwitch = require('koa-mock-switch')
// mock管理列表
const mockSwitchMap = require('./mockSwitchMap.js')
/**
 * KoaMockSwitch(mockRoot, mockSwitchMap, apiSuffix)
 * @param mockRoot mock文件的根目录
 * @param mockSwitchMap mock管理列表
 * @param apiSuffix 客户端请求api的后缀，比如'/api/kitty.json'，apiSuffix就是'.json'
 */
const mock = new KoaMockSwitch({
  root: mockRoot,
  switchMap: mockSwitchMap,
  apiSuffix: '.json'
})
// 启动mock服务
mock.start(proxyConfig.port)