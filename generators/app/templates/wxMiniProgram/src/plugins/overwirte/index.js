/**
 * 负责覆盖小程序原生API
 */
const overwirte = {
  showToast(title, icon = 'none') {
    if (title) {
      setTimeout(() => {
        wx.showToast({
          title,
          icon,
          mask: true,
          duration: 2000,
        })
      }, 0);
    }
  },

  showModal(config) {
    wx.showModal({
      confirmColor: '#1c2497',
      ...config,
    })
  },

  showLoading(title = '加载中') {
    wx.showLoading({
      title,
      mask: true,
    })
  },

  hideLoading() {
    wx.hideLoading()
  },

}

overwirte.install = (app) => {
  app.showToast = overwirte.showToast
  app.showLoading = overwirte.showLoading
  app.hideLoading = overwirte.hideLoading
  app.showModal = overwirte.showModal
}

export default overwirte
