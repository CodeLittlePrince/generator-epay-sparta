/**
 * 小程序更新管理
 */
class Update {
  constructor() {
    this.updateManager = wx.getUpdateManager()
  }

  install(app) {
    this.app = app
    app.update = this
  }

  listen() {
    const { updateManager } = this
    // 小程序下载成功后回调
    updateManager.onUpdateReady(() => {
      this.app.globalData.updateReady = true
      this.app.hideLoading()
      this.updateTip()
    })
    // 监听向微信后台请求检查更新结果事件
    updateManager.onCheckForUpdate((res) => {
      if (res.hasUpdate) {
        this.app.showLoading({
          title: '更新下载中...',
        })
      }
    })
    // 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
    updateManager.onUpdateFailed(() => {
      this.app.showToast('小程序更新失败，请删除小程序重新安装！')
    })
  }

  updateTip() {
    const { updateManager } = this
    if (this.app.globalData.updateReady) {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好了，是否重启应用？',
        confirmColor: '#0064ff',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        },
      })
    }
  }
}

export default new Update()
