const Mock = require('mockjs')

const data = Mock.mock({
  'ip': '193.164.182.72',
  'merchantId': '230000198606229643',
  'merchantAbility': 1,
  'vatAvailable': true,
  'merchant': {
    'coreAccountId': '220000198811162941',
    'merchantId': '710000198411265534',
    'platformId': '460000198807264771',
    'businessCategory': 'GENERAL_CONSUME_DIGITAL_GOODS',
    'province': '浙江省',
    'city': '杭州市',
    'address': '青青大草原老村长家门口',
    'merchantName': 'zixiu',
    'merchantNameCn': '*拉蕾',
    'merchantType': 'PERSONAL',
    'note': '审核不通过信息',
    'status': 'NORMAL'
  },
  'holderList': [{
    'holderId': '12000019880703269X',
    'merchantId': '350000198908256724',
    'holderName': 'Linda Allen',
    'holderNameCn': '田娜',
    'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
    'businessCategory': '0652',
    'economicType': '173',
    'holderType': 'PERSONAL',
    'isWithdrawHolder': 'Y',
    'status': 'NORMAL',
    'preStatus': 'SUCCESS',
    'note': '实名审核未通过的原因这里啊'
  }],
  'idCardDetail': {
    'idCardName': '*拉蕾',
    'idCardNo': '2*************4',
    'idCardType': 'HK_ID_CARD'
  },
  'operator': {
    'mail': 'nijunjie@corp.netease.com',
    'merchantId': '2018070221ME00000002',
    'mobile': '138******88',
    'operatorId': 'nijunjie@corp.netease.com',
    'operatorType': 'MAIN',
    'status': 'NORMAL',
    'associatedType': 'AGENT2'
  }
})
  
module.exports = () => ({
  'status': '200',
  'message': 'success',
  'success': true,
  'result': data
})