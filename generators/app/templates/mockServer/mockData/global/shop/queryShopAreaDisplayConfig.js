const Mock = require('mockjs')
let data = Mock.mock({
  'result': [{
    'displayType': 'OPEN', // "OPEN", "开放展示" | "GREY_OPEN", "灰度展示" | "CLOSE", "关闭展示"
    'shopAreaType': 'AMAZON_NORTH_AMERICA',
    'shopAuthTypeMap': {
      'JUMP_AUTH': 'OPEN',
      'HAND_AUTH': 'OPEN',
      'NO_AUTH': 'OPEN'
    },
    'shopConditionTypeMap': {
      'EXIST': 'OPEN',
      'NOT_EXIST': 'OPEN'
    },
    'shopCurrencyMap': {
      'USD': 'OPEN',
      'CAD': 'OPEN'
    }
  }, {
    'displayType': 'OPEN', // "OPEN", "开放展示" | "GREY_OPEN", "灰度展示" | "CLOSE", "关闭展示"
    'shopAreaType': 'AMAZON_EURO',
    'shopAuthTypeMap': {
      'HAND_AUTH': 'OPEN',
      'JUMP_AUTH': 'OPEN',
      'NO_AUTH': 'OPEN'
    },
    'shopConditionTypeMap': {
      'EXIST': 'CLOSE',
      'NOT_EXIST': 'OPEN'
    },
    'shopCurrencyMap': {
      'EUR': 'OPEN',
      'GBP': 'OPEN'
    }
  }, {
    'displayType': 'OPEN', // "OPEN", "开放展示" | "GREY_OPEN", "灰度展示" | "CLOSE", "关闭展示"
    'shopAreaType': 'AMAZON_JAPAN',
    'shopAuthTypeMap': {
      'JUMP_AUTH': 'OPEN',
      'HAND_AUTH': 'OPEN',
      'NO_AUTH': 'OPEN'
    },
    'shopConditionTypeMap': {
      'EXIST': 'OPEN',
      'NOT_EXIST': 'OPEN'
    },
    'shopCurrencyMap': {
      'JPY': 'OPEN',
    }
  }, {
    'displayType': 'OPEN', // "OPEN", "开放展示" | "GREY_OPEN", "灰度展示" | "CLOSE", "关闭展示"
    'shopAreaType': 'RAKUTEN_JAPAN',
    'shopAuthTypeMap': {
      'HAND_AUTH': 'OPEN',
      'NO_AUTH': 'OPEN'
    },
    'shopConditionTypeMap': {
      'EXIST': 'OPEN',
    },
    'shopCurrencyMap': {
      'JPY': 'OPEN',
    }
  }, {
    'displayType': 'OPEN', // "OPEN", "开放展示" | "GREY_OPEN", "灰度展示" | "CLOSE", "关闭展示"
    'shopAreaType': 'PAYPAL_AMERICA',
    'shopAuthTypeMap': {
      'JUMP_AUTH': 'OPEN',
      'HAND_AUTH': 'OPEN',
      'NO_AUTH': 'OPEN'
    },
    'shopConditionTypeMap': {
      'EXIST': 'OPEN',
    },
    'shopCurrencyMap': {
      'USD': 'OPEN',
      'CAD': 'OPEN',
    }
  }, {
    'displayType': 'GREY_OPEN', // "OPEN", "开放展示" | "GREY_OPEN", "灰度展示" | "CLOSE", "关闭展示"
    'shopAreaType': 'AMAZON_AUSTRALIA',
    'shopAuthTypeMap': {
      'JUMP_AUTH': 'OPEN',
      'HAND_AUTH': 'GREY_OPEN',
      'NO_AUTH': 'OPEN'
    },
    'shopConditionTypeMap': {
      'EXIST': 'OPEN',
      'NOT_EXIST': 'OPEN'
    },
    'shopCurrencyMap': {
      'USD': 'OPEN',
      'CAD': 'OPEN'
    }
  }]
})

// 返回的结果处理
module.exports = function () {
  return {
    'message': 'SUCCESS',
    'result': data.result,
    'status': 200
  }
}