import overwirte from './overwirte/index'
import http from './http/index'
import router from './router/index'
import update from './update/index'
import storage from './storage/index'
import cookie from './cookie/index'
import wxAccount from './wxAccount/index'
import hubble from './hubble/index'
import tool from './tool/index'

const plugins = {
  install(app) {
    [
      overwirte,
      http,
      router,
      update,
      storage,
      cookie,
      wxAccount,
      hubble,
      tool,
    ].forEach((plugin) => {
      plugin.install(app)
    })
  },
}

export default plugins
