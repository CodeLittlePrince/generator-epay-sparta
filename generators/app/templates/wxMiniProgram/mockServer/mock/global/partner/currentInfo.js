const Mock = require('mockjs')

// 返回码,812为用户不存在
// 返回的结果处理
module.exports = () => ({
  message: 'error message',
  result: Mock.mock({
    partnerDTO: {
      mobile: /^1[0-9]{10}$/,
      inviteCode: 55555,
    },
  }),
  status: '402',
  errors: {},
})
