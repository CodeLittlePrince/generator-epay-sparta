const app = getApp()

Page({
  ignoreScrolleEvent() {
    return false
  },

  loginIntoSystem(code, e) {
    return new Promise((resovle, reject) => {
      const params = {
        autoRegister: true,
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv,
        weiXinCode: code,
      }
      app.http.post(
        '/global/partner/login.htm',
        params,
      ).then((res) => {
        // 此时已经登录成功，给数据保存下拉
        app.globalData.userInfo = res.partnerDTO
        resovle(res.promUser)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  onGetPhoneNumberCallback(e) {
    if (e.type === 'getphonenumber' && e.detail && e.detail.iv) {
      // 获取小程序用户信息的授权码 然后给后端！
      app.showLoading()
      app.wxAccount
        .login()
        .then((code) => this.loginIntoSystem(code, e))
        .then(() => {
          app.router.reLaunch('/pages/home/index')
        })
        .catch((err) => {
          app.showToast(err.text)
        })
        .finally(() => {
          app.hideLoading()
        })
    }
  },
})
