class Http {
  constructor() {
    this.app = null
  }

  install(app) {
    this.app = app
    app.http = this
  }

  get(url, params, config) {
    return new Promise((resolve, reject) => {
      this.request('GET', url, params, resolve, reject, config);
    })
  }

  post(url, params, config) {
    return new Promise((resolve, reject) => {
      this.request('POST', url, params, resolve, reject, config);
    })
  }

  request(method, url, params, resolve, reject, conf) {
    const that = this
    const config = conf || {};
    // 后端数据返回格式（用户可以根据各个产品的后端返回自行改变）
    // {
    //   "code": "000000",
    //   "msg": "some message",
    //   "content": *
    // }
    // let userInfo = wx.getStorageSync('userInfo');
    const { env, version } = this.app.globalData.config
    console.log(env.domain.mainSite + url)
    wx.request({
      url: env.domain.mainSite + url,
      header: {
        // cookie: `st=${userInfo.st || ''}`,
        version,
      },
      method,
      data: params,
      success(res) {
        if (res.statusCode === 200) {
          that.dealResponse(res, resolve, reject, url);
        } else {
          // console.log(res.data)// 之后接哨兵
          reject({
            text: res.data || '小程序异常啦',
          });
        }
      },
      fail(e) {
        // 捕获不是ajax获取后，状态码造成的异常
        // code 999，是为了标识其它故障（已和数据员和后端商量确定）
        console.log(e.errMsg)// 之后接哨兵
        reject({
          text: '小程序异常啦',
          code: 999,
        });
      },
      ...config,
    });
  }

  /**
   * 处理数据返回
   * @param {*} res
   * @param {*} resolve
   * @param {*} reject
   */
  dealResponse(res, resolve, reject, url) {
    const data = res.data || res
    const { status } = data
    // status状态码含义
    // 200：成功
    // 401：未授权
    // 402：登陆超时
    // 403：未认证
    // 404：无数据
    // 422：数据校验失败
    // 500：程序异常
    // 602：登录冻结
    // 603：密码失效

    // 后端会将错误文案放在message里面
    switch (+status) {
      case 200:
        resolve(data.result)
        break
      case 402:
        this.lostSignInStatus(reject, data, url, status)
        break
      case 403:
        this.lostSignInStatus(reject, data, url, status)
        break
      case 602:
        this.rejectAction(reject, data, url, status)
        break
      case 603:
        this.lostSignInStatus(reject, data, url, status)
        break
      default:
        this.rejectAction(reject, data, url, status)
    }
  }

  lostSignInStatus(reject, data, url, status) {
    // 用户信息接口因为是用作判断登录状态的，所以在这里做特殊处理，不进行跳转，在router中去处理
    if (url !== '/global/partner/currentInfo.htm') {
      this.app.router.redirectTo('/pages/login/index')
    }
    this.rejectAction(reject, data, url, status)
  }

  rejectAction(reject, data, url, status) {
    return reject({
      text: data.message,
      code: status,
      errors: data.errors,
    })
  }
}

export default new Http()
