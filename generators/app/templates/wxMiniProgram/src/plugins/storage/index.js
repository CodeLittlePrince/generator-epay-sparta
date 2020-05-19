class Storage {
  constructor() {
    this.app = null
  }

  install(app) {
    this.app = app
    app.storage = this
  }

  setItem(key, value) {
    wx.setStorageSync(key, JSON.stringify(value))
  }

  getItem(key) {
    const value = wx.getStorageSync(key)
    return value ? JSON.parse(value) : null
  }

  removeItem(key) {
    wx.removeStorageSync(key)
  }

  clear() {
    wx.clearStorageSync()
  }
}

export default new Storage()
