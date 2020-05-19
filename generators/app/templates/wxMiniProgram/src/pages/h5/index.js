const app = getApp()

Page({
  onLoad(options) {
    app.showLoading('页面加载中')
    this.setData({
      url: decodeURIComponent(options.url),
    })
  },

  handleError() {
    app.hideLoading()
    app.showToast('页面加载失败')
  },

  handleLoad() {
    app.hideLoading()
  },
})
