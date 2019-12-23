const Mock = require('mockjs')

// 广告位类型。
// PC_HOMEPAGE_BANNER: PC首页banner
// PC_REGISTER_LOGIN_BANNER: PC注册登录页广告位
// PC_WITHDRAW_APPLY_SUCCESS_BANNER: PC提现成功广告位
// WX_WITHDRAW_APPLY_SUCCESS_BANNER: 小程序提现申请成功广告位
// INVITE_CODE_BACKGROUND_BANNER: 邀请有礼推广小程序二维码背景图
// PC_MERCHANT_MY_COUPON: 我的优惠文字广告位
// PC_REALNAME_COUPON_BANNER: 实名页广告位
// WX_HOMEPAGE_INVITE_BANNER: 小程序首页邀请有礼文案
// HIGH_QUALITY_SELLER_BANNER:优质卖家展示
// FRIENDS_BUSINESS_URL_BANNER:友商链接

// 主站顶部广告位 PC_HOMEPAGE_NOTIFY
// 账号管理页面顶部 ACCOUNT_MANAGE_NOTIFY
// 申请账号页面顶部 ACCOUNT_APPLY_NOTIFY
// 提现管理页面顶部 WITHDRAW_MANAGE_NOTIFY
// 提现操作页面顶部 WITHDRAW_OPERATE_NOTIFY

module.exports = () => {
  let adUrl = '/#/login'
  let srcUrl = 'https://epay.nosdn.127.net/4379a379-eef3-4eca-a518-5d0bac559dd2.png'

  return Mock.mock({
    'errors': '{}',
    'message': '操作成功',
    'result': {
      'H5_PROMOTION_ZONE_THUMBNAIL_BANNER|2': [{
        'cmsId': '81007',
        'title': '@cword(10, 20)',
        'enName': 'QW6jVpJNZP',
        'advertiseSource': 'ZAzkXC0atC',
        'cmsContent': '@cword(10, 20)',
        'adUrl': adUrl,
        'srcUrl': srcUrl
      }],
      'H5_PROMOTION_ZONE_BANNER|2': [{
        'cmsId': '81007',
        'title': '@cword(10, 20)',
        'enName': 'QW6jVpJNZP',
        'advertiseSource': 'ZAzkXC0atC',
        'cmsContent': '@cword(10, 20)',
        'adUrl': adUrl,
        'srcUrl': srcUrl
      }],
    },
    'status': '200',
    'success': true
  })
}