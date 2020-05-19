class WxAccount {
  install(app) {
    this.app = app
    app.wxAccount = this
  }

  /**
   * 只有需要用到session_key的时候才需要用此方法
   */
  checkSessionAutoRenew() {
    return new Promise((resolve, reject) => {
      this.checkSession()
        .then(() => {
          resolve()
        })
        .catch(() => {
          this.login()
            .then((code) => {
              resolve(code)
            })
            .catch(() => {
              reject()
            })
        })
    })
  }

  checkSession() {
    return new Promise((resolve, reject) => {
      wx.checkSession({
        success() {
          resolve()
        },
        fail() {
          reject()
        },
      })
    })
  }

  login() {
    const that = this
    return new Promise((resolve, reject) => {
      wx.login({
        success(res) {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res && res.code) {
            resolve(res.code)
          } else {
            reject(new Error('微信登录失败！1'))
          }
        },
        fail(err) {
          that.app.showToast(`微信登录失败！${err}`)
          reject(new Error('微信登录失败！2'))
        },
      })
    })
  }
}

export default new WxAccount()
