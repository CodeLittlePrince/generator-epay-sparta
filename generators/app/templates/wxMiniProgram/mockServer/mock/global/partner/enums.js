const data = {
  dataDictionary: {
    partnerRewardBizTypeList: [
      {
        id: 'REGISTRATION',
        name: '注册成功',
      }, {
        id: 'SHOP_BINDING',
        name: '绑店成功',
      }, {
        id: 'INCOME',
        name: '首次入账',
      },
    ],
    partnerInvitedMerchantStatusList: [
      {
        id: 'REGISTRATION',
        name: '已注册',
      }, {
        id: 'SHOP_BINDING',
        name: '已绑店',
      }, {
        id: 'INCOME',
        name: '已入账',
      },
    ],
    inviteStatusList: [
      {
        id: 'INITIAL',
        name: '邀请未完成',
      }, {
        id: 'SUCCESS',
        name: '邀请成功',
      }, {
        id: 'FAILED',
        name: '邀请失败',
      },
    ],
  },
  currentTimestamp: 1111,
}

// 返回的结果处理
module.exports = () => ({
  message: 'SUCCESS',
  result: data,
  status: '200',
})
