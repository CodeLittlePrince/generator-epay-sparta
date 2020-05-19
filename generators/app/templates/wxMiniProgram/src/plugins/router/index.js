const router = {
  navigateTo(url, params = null, config) {
    if (params) {
      url = connectUrlWithParams(url, params)
    }
    wx.navigateTo({
      url,
      ...config,
    })
  },

  redirectTo(url, params = null, config) {
    if (params) {
      url = connectUrlWithParams(url, params)
    }
    wx.redirectTo({
      url,
      ...config,
    })
  },

  reLaunch(url, params = null, config) {
    if (params) {
      url = connectUrlWithParams(url, params)
    }
    wx.reLaunch({
      url,
      ...config,
    })
  },

  navigateBack(delta = 1, config) {
    wx.navigateBack({
      delta,
      ...config,
    })
  },

  navigateToH5(url, params = null) {
    if (params) {
      url = connectUrlWithParams(url, params)
    }
    url = encodeURIComponent(url)
    this.navigateTo(`/pages/h5/index?url=${url}`)
  },
}

function connectUrlWithParams(url, params) {
  return url.indexOf('?') > -1
    ? `${url}&${obj2Query(params)}`
    : `${url}?${obj2Query(params)}`
}

function obj2Query(params) {
  let rst = ''
  Object.keys(params).forEach((key) => {
    const val = params[key];
    rst += `${key}=${encodeURIComponent(val)}&`
  })
  if (rst.length > 1) {
    rst = rst.slice(0, -1)
  }
  return rst
}

router.install = (app) => {
  app.router = router
}

export default router
