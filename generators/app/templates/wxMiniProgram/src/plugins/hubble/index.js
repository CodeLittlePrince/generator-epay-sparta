/**
 * api文档
 * https://hubble.netease.com/help/_book/kai-fa-wen-dang/MiniProgram-sdk.html
 */
import DATracker from './lib/DATracker.1.2.0'
import envConfig from '../../config/env'
import version from '../../config/version'
import sha256 from './lib/sha256'

// 一下配置为选填
DATracker.init(envConfig.hubbleAppKey, {
  // 指明小程序类型: (微信: wx) | (字节跳动: tt) | (支付宝: my) | (百度: swan)
  miniType: 'wx',
  // appVersion 为应用版本号属性
  appVersion: version,
  // 设置false，关闭调试模式，默认为false
  debug: envConfig.type === 'local',
  // 重写路由变动时触发的函数
  onPageShow() {},
  // 重新定义数据发送方式，延迟为了防止影响主要接口请求晚于埋点
  sendConfig: {
    start: true,
    fn(params) {
      setTimeout(() => {
        send(params)
      }, 1000)
    },
  },
})

/**
 * 接管sdk的数据发送函数实现
 */
function send(params) {
  wx.request({
    url: params.url,
    method: params.method,
    success: params.success,
    fail: params.fail,
  })
}


class Hubble {
  constructor() {
    this.app = null
  }

  install(app) {
    this.app = app
    app.hubble = app.DATracker
    app.hubble.report = this.report(app) // 用track回栈溢出
  }

  report(app) {
    return function func(eventId, hbData) {
      let baseHbdata = {}
      const { systemInfo, userInfo } = app.globalData
      baseHbdata = {
        sdkVersion: systemInfo.SDKVersion,
      }
      if (userInfo) {
        baseHbdata.accid = sha256(userInfo.id)
      }
      app.DATracker.track(eventId, {
        ...baseHbdata,
        ...hbData,
      })
    }
  }
}

export default new Hubble()
