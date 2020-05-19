// weapp-cookie文档：
// https://github.com/charleslo1/weapp-cookie
import cookies from './lib/weapp-cookie'

export default {
  install(app) {
    this.app = app
    app.cookie = cookies
  },
}
