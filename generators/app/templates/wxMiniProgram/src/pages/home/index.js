const app = getApp();

Page({
  data: {
    hasUserInfo: false,
  },

  onShow() {
    this.initUserInfoStatus()
  },

  initUserInfoStatus() {
    this.setData({
      hasUserInfo: !!app.globalData.userInfo,
    })
  },

  goLogin() {
    app.router.navigateTo('/pages/login/index')
  },
});
