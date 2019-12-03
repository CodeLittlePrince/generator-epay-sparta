import Vue from 'vue'
<% if (!isPc) { -%>
import './responsive'
import './vue-lazyload'
import './toast'
import './dialog'
import device from './device'
// 只有IOS 9.3以下才需要fastclick
if (device.IOS) {
  const splitCount = device.IOSVersion.split('.').length
  const processedVersion = +device.IOSVersion.replace(/\./g, '')
  if (processedVersion < parseInt(9.3 * Math.pow(10, splitCount - 1))) {
    import ('./fastclick')
  }
}
<% } -%>
if (process.env.NODE_ENV !== 'production') {
  import('./mock-switch')
}
import ajax from './ajax'
<% if (includeElementUI) { -%>
import elementUI from './element-ui'
<% } -%>
<% if (includeHubble) { -%>
import hubble from './hubble'
<% } -%>
<% if (includeHybrid) { -%>
import hybrid from './hybrid'
<% } -%>
<% if (includeWechat) { -%>
import wechat from './wechat'
<% } -%>

// vue use插件
Vue.use(ajax)
<% if (!isPc) { -%>
Vue.use(device)
<% } -%>
<% if (includeElementUI) { -%>
Vue.use(elementUI)
<% } -%>
<% if (includeHubble) { -%>
Vue.use(hubble)
<% } -%>
<% if (includeHybrid) { -%>
Vue.use(hybrid)
<% } -%>
<% if (includeWechat) { -%>
Vue.use(wechat)
<% } -%>