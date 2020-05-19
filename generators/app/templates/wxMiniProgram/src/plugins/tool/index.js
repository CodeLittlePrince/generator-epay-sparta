class Tool {
  constructor() {
    this.app = null
  }

  install(app) {
    this.app = app
    app.tool = this
  }

  /**
   * 通过字典翻译英文(key)成中文
   * @param {String} dictName 字段名
   * @param {String} key 要查询的key值
   */
  translate(dictName, key) {
    const dict = this.app.globalData.enums.dataDictionary[dictName] || []
    for (let i = 0; i < dict.length; i += 1) {
      const it = dict[i]
      if (key === it.id) {
        return it.name
      }
    }
    return key
  }

  formatMoney(amount) {
    return (+amount).toFixed(0).replace(/\B(?=(\d{3})+\b)/g, ',')
  }
}

export default new Tool()
