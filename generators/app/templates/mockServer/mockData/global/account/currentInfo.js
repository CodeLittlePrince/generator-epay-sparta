const Mock = require('mockjs')

// 返回的结果处理
module.exports = function() {
  /**
   * 实名认证case：
   * 1、大陆个人实名认证
   * 2、大陆企业实名认证
   * 3、大陆个人+大陆企业实名认证
   * 4、大陆个人+香港企业实名认证
   * 5、香港个人实名认证
   * 6、香港企业实名认证
   * 7、香港个人+香港企业实名认证
   */
  return Mock.mock({
    '@notLoggedIn': {
      'errors': {},
      'message': '用户未登录',
      'status': '402',
      'success': false,
      'result': '用户未登录',
    },
    '@loggedIn': {
      'errors': {},
      'message': '操作成功',
      'status': '200',
      'success': true,
      'result': {
        'ip': '@ip',
        'merchantId': '@id',
        'operatorId': '@id',
        'merchantAbility': {
          // 0-无任何能力 1-人民币提现能力 2-外币提现能力 3-人民币提现、外币提现能力
          // 逻辑：目前后端通过商户绑定的银行卡来做能力的判断
          // 无绑定银行卡则为0
          // 绑定了大陆个人银行卡则为1
          // 绑定了大陆企业银行卡则为3
          // 绑定了香港个人银行卡则为2
          // 绑定了香港企业银行卡则为2
          '@none': 0,
          '@RMBWithdraw': 1,
          '@exchangeWithdraw': 2,
          '@withdraw': 3,
        },
        // 是否显示vat入口（活动开关）true/false
        // 由于该状态和其它状态无强关系，为了减少case，手动修改
        'vatAvailable': true,
        'merchant': {
          'coreAccountId': '@id',
          'merchantId': '@id',
          'platformId': '@id',
          'businessCategory': 'GENERAL_CONSUME_DIGITAL_GOODS',
          'province': '浙江省',
          'city': '杭州市',
          'address': '青青大草原老村长家门口',
          'merchantName': 'zixiu',
          'merchantNameCn': '*拉蕾',
          'merchantType' : {
            '@noCerified': '',
            '@personal': 'PERSONAL',
            '@enterprise': 'ENTERPRISE',
            '@hkPersonal': 'HK_PERSONAL',
            '@hkEnterprise': 'HK_ENTERPRISE',
            '@personal+enterprise': 'PERSONAL',
            '@personal+hkEnterprise': 'PERSONAL',
            '@hkPersonal+hkEnterprise': 'HK_PERSONAL',
          },
          'note': '审核不通过信息',
          /**
           * 后台有个preStatus“预审”的状态，预审通过后，这里的status还是变成PENDING，只有最终的审核通过才变NORMAL；
           * 注意：
           *      预审通过后，holderList持有人会初始化，最终审核通过后，持有人的isWithdrawHolder为Y的会和merchant同步
           *      并且，isWithdrawHolder为Y的持有人以后永远为Y，即第一个添加的持有人就是今后的取款人。
           * 名词解释：
           *      1.预审：机器OCR自动识别，自动审核
           */
          'status': {
            '@inactivated': 'INACTIVATED', // 未激活/未审核
            '@pending': 'PENDING', // 待审核
            '@normal': 'NORMAL', // 正常
            '@frozen': 'FROZEN', // 冻结
            '@cancelled': 'CANCELLED', // 注销
            '@identify_rejected': 'IDENTIFY_REJECTED', // 实名审核未通过
          },
        },
        'holderList': {
          '@noCerified': [],
          '@personal': [{
            'holderId': '@id',
            'merchantId': '@id',
            'holderName': '@name',
            'holderNameCn': '@cname',
            'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
            'businessCategory': '0652',
            'economicType': '173',
            'holderType': 'PERSONAL', // 类型同merchant
            'isWithdrawHolder': 'Y', // Y为提现持有人；即第一次实名的所属人
            'status': 'NORMAL', // 类型同merchant
            /**
             * preStatus为“预审”的状态，预审指的是机器OCR自动识别，自动审核，
             * 预审并不会影响status，status的值只和预审后的人工审核有关。
             * 另外，holderList持有人初始化，实在用户提价资料的时候就初始化好了，isWithdrawHolder为Y，然后status为PENDING。
             * holderList中isWithdrawHolder为Y的持有人永远和merchant同步。
             * 实名通过后isWithdrawHolder为Y的对应的持有人的isWithdrawHolder值就不会再变了。
             */
            'preStatus': 'SUCCESS', // ['', 'INIT', 'SUCCESS', 'FAIL']
            'note': '实名审核未通过的原因这里啊'
          }],
          '@enterprise': [{
            'holderId': '@id',
            'merchantId': '@id',
            'holderName': '@name',
            'holderNameCn': '@cname',
            'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
            'businessCategory': '0652',
            'economicType': '173',
            'holderType': 'ENTERPRISE',
            'isWithdrawHolder': 'Y',
            'status': 'NORMAL',
            'preStatus': 'SUCCESS',
            'note': '实名审核未通过的原因这里啊'
          }],
          '@hkPersonal': [{
            'holderId': '@id',
            'merchantId': '@id',
            'holderName': '@name',
            'holderNameCn': '@cname',
            'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
            'businessCategory': '0652',
            'economicType': '173',
            'holderType': 'HK_PERSONAL',
            'isWithdrawHolder': 'Y',
            'status': 'NORMAL',
            'preStatus': 'SUCCESS',
            'note': '实名审核未通过的原因这里啊'
          }],
          '@hkEnterprise': [{
            'holderId': '@id',
            'merchantId': '@id',
            'holderName': '@name',
            'holderNameCn': '@cname',
            'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
            'businessCategory': '0652',
            'economicType': '173',
            'holderType': 'HK_ENTERPRISE',
            'isWithdrawHolder': 'Y',
            'status': 'NORMAL',
            'preStatus': 'SUCCESS',
            'note': '实名审核未通过的原因这里啊'
          }],
          '@personal+enterprise': [
            {
              'holderId': '@id',
              'merchantId': '@id',
              'holderName': '@name',
              'holderNameCn': '@cname',
              'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
              'businessCategory': '0652',
              'economicType': '173',
              'holderType': 'PERSONAL',
              'isWithdrawHolder': 'Y',
              'status': 'NORMAL',
              'preStatus': 'SUCCESS',
              'note': '实名审核未通过的原因这里啊'
            },
            {
              'holderId': '@id',
              'merchantId': '@id',
              'holderName': '@name',
              'holderNameCn': '@cname',
              'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
              'businessCategory': '0652',
              'economicType': '173',
              'holderType': 'ENTERPRISE',
              'isWithdrawHolder': 'N',
              'status': 'NORMAL',
              'preStatus': 'SUCCESS',
              'note': '实名审核未通过的原因这里啊'
            }
          ],
          '@personal+hkEnterprise': [
            {
              'holderId': '@id',
              'merchantId': '@id',
              'holderName': '@name',
              'holderNameCn': '@cname',
              'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
              'businessCategory': '0652',
              'economicType': '173',
              'holderType': 'PERSONAL',
              'isWithdrawHolder': 'Y',
              'status': 'NORMAL',
              'preStatus': 'SUCCESS',
              'note': '实名审核未通过的原因这里啊'
            },
            {
              'holderId': '@id',
              'merchantId': '@id',
              'holderName': '@name',
              'holderNameCn': '@cname',
              'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
              'businessCategory': '0652',
              'economicType': '173',
              'holderType': 'HK_ENTERPRISE',
              'isWithdrawHolder': 'N',
              'status': 'NORMAL',
              'preStatus': 'SUCCESS',
              'note': '实名审核未通过的原因这里啊'
            }
          ],
          '@hkPersonal+hkEnterprise': [
            {
              'holderId': '@id',
              'merchantId': '@id',
              'holderName': '@name',
              'holderNameCn': '@cname',
              'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
              'businessCategory': '0652',
              'economicType': '173',
              'holderType': 'HK_PERSONAL',
              'isWithdrawHolder': 'Y',
              'status': 'NORMAL',
              'preStatus': 'SUCCESS',
              'note': '实名审核未通过的原因这里啊'
            },
            {
              'holderId': '@id',
              'merchantId': '@id',
              'holderName': '@name',
              'holderNameCn': '@cname',
              'holderAddress': '{"address":"青青大草原老村长家门口","city":"杭州市","cityCode":"350100","district":"西湖区","districtCode":"350122","province":"浙江省","provinceCode":"350000"}',
              'businessCategory': '0652',
              'economicType': '173',
              'holderType': 'HK_ENTERPRISE',
              'isWithdrawHolder': 'N',
              'status': 'NORMAL',
              'preStatus': 'SUCCESS',
              'note': '实名审核未通过的原因这里啊'
            }
          ],
        },
        // 企业法人或个人的实名信息
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
        },
      },
    }
  })
}
