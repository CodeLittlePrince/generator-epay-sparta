const app = getApp()
/**
 * 代言人项目的登录逻辑
 * 1、进入页面调用getCurrent 接口
 * 1.1 调用成功，此时用户的登录态为 【已登录】
 * 1.2 调用失败了（没有cookie或者cookies过期） 调用 login接口
 *
 * 2、调用Login接口带有wxAuth code， 通过该code，后台可以获取用户的openID
 * 2.1 该接口调用成功，cookies会在Header返回小程序，网络层的库，会保存该值，并按照cookie的规范在下次请求的时候带上
 *  此时的用户状态为登录成功。
 * 2.2 该接口调用失败（812） 说明当前的微信用户并没有在我们的系统里创建过用户，此时，小程序端认为没有登录
 *
 * 流程详情见：https://nos.globalpay.163.com/gp-doc-img-login-process.jpg?imageView&interlace=1&type=webp
 */

Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    app.showLoading('小程序加载中')
    this.data.redirect = options.redirect
    this.getShareData()
      .then(this.getCurrentUserInfo)
      .catch(this.checkPartnerLogin)
      .then((res) => {
        app.globalData.userInfo = res
      })
      .catch((err) => {
        // 哨兵
        if (err.code !== '812') {
          app.showToast(err.text)
        }
        app.globalData.userInfo = null
      })
      .finally(() => {
        app.hideLoading()
        this.showMainPage()
      })
  },

  checkPartnerLogin() {
    return this.wxLogin().then(this.checkLogin)
  },

  wxLogin() {
    return app.wxAccount.login()
  },

  /**
   * https://nei.hz.netease.com/interface/detail/?pid=30722&id=292014
   */
  checkLogin(code) {
    return new Promise((resolve, reject) => {
      app.http.post('/global/partner/login.htm', {
        weiXinCode: code,
        autoRegister: false,
      }).then((res) => {
        resolve(res.partnerDTO)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  getCurrentUserInfo() {
    return new Promise((resolve, reject) => {
      app.http.get('/global/partner/currentInfo.htm')
        .then((res) => {
          resolve(res.partnerDTO)
        })
        .catch((err) => {
          // 出错了，直接也认为是成功了，调用方根据该值进行分支转发
          reject(err)
        })
    })
  },

  showMainPage() {
    if (this.data.redirect) {
      const pageUrl = decodeURIComponent(this.data.redirect)
      app.router.redirectTo(pageUrl)
      this.data.redirect = null
    } else {
      app.router.redirectTo('/pages/home/index')
    }
  },

  getShareData() {
    return Promise.all([
      this.getEnums(),
      this.getDiamondConfig(),
    ])
  },

  getEnums() {
    return new Promise((resolve, reject) => {
      app.http.get('/global/partner/enums.htm')
        .then((res) => {
          app.globalData.enums = res
          resolve()
        }).catch((err) => {
          reject(err.text)
        })
    })
  },

  /**
   * 获取diamond开关配置
   */
  getDiamondConfig() {
    return new Promise((resolve, reject) => {
      app.http.post(
        '/global/data/config.htm',
        {
          group: 'GLOBAL_PARTNER',
          dataIdList: [
            'mpVersion',
            'switch',
          ],
        },
      ).then((res) => {
        app.globalData.diamond = res
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  },
})
