import env from './config/env'
import version from './config/version'
import polyfill from './polyfill/index'
import plugins from './plugins/index'

App({
  onLaunch() {
    // polyfill注入
    polyfill.inject()
    // 安装插件
    this.installPlugins()
    // 小程序更新监听
    this.update.listen()
    // 系统信息获取
    this.getSystemInfoSync()
  },

  onShow() {
    this.update.updateTip()
  },

  installPlugins() {
    plugins.install(this)
  },

  getSystemInfoSync() {
    this.globalData.systemInfo = wx.getSystemInfoSync()
  },

  isSlug() {
    const { config, diamond } = this.globalData
    if (diamond.mpVersion === config.version || diamond.switch === '0') {
      return true
    }
    return false
  },

  globalData: {
    updateReady: false,
    systemInfo: {},
    enums: {},
    diamond: {},
    userInfo: null,
    config: {
      env,
      version,
    },
  },
})
