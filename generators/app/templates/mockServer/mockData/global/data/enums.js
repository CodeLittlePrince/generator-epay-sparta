const data = {
  'dataDictionary': {
    'shopBusinessScopeList': [
      {
        'id': 'GENERAL_CONSUME_DIGITAL_GOODS',
        'name': '一般消费品、电子商品零售'
      },
      {
        'id': 'BULK_STOCK_INDUSTRIAL_EQUIPMENT',
        'name': '大宗商品、工业设备'
      },
      {
        'id': 'JEWEL_ANTIQUE_ARTS',
        'name': '珠宝、古董、艺术品零售'
      },
      {
        'id': 'WHOLESALE',
        'name': '批发'
      },
      {
        'id': 'VIRTUAL_GOODS',
        'name': '虚拟物品'
      },
      {
        'id': 'TRANSPORT_TRAVEL',
        'name': '运输或旅行服务'
      },
      {
        'id': 'ADVERTISEMENT_SERVICE',
        'name': '广告服务'
      },
      {
        'id': 'OTHER_SERVICES',
        'name': '其他服务'
      }
    ],
    'businessCategory': [
      {
        'id':'0315',
        'name':'酒、饮料和精制茶制造业'
      },
      {
        'id':'0314',
        'name':'食品制造业'
      },
      {
        'id':'0318',
        'name':'纺织服装、服饰业'
      },
      {
        'id':'0321',
        'name':'家具制造业'
      },
      {
        'id':'0322',
        'name':'造纸和纸制品业'
      },
      {
        'id':'0323',
        'name':'印刷和记录媒介复制业'
      },
      {
        'id':'0324',
        'name':'文教、工美、体育和娱乐用品制造业'
      },
      {
        'id':'0326',
        'name':'化学原料和化学制品制造业'
      },
      {
        'id':'0329',
        'name':'橡胶和塑料制品业'
      },
      {
        'id':'0333',
        'name':'金属制品业'
      },
      {
        'id':'0336',
        'name':'汽车制造业'
      },
      {
        'id':'0338',
        'name':'电气机械和器材制造业'
      },
      {
        'id':'0339',
        'name':'计算机、通信和其他电子设备制造业'
      },
      {
        'id':'0340',
        'name':'仪器仪表制造业'
      },
      {
        'id':'0341',
        'name':'其他制造业'
      },
      {
        'id':'0651',
        'name':'批发业'
      },
      {
        'id':'0652',
        'name':'零售业'
      },
      {
        'id':'0758',
        'name':'装卸搬运和运输代理业'
      },
      {
        'id':'0759',
        'name':'仓储业'
      },
      {
        'id':'0964',
        'name':'互联网和相关服务'
      },
      {
        'id':'0965',
        'name':'软件和信息技术服务业'
      },
      {
        'id':'1272',
        'name':'商务服务业'
      },
      {
        'id':'1581',
        'name':'其他服务业'
      },
      {
        'id':'1885',
        'name':'新闻和出版业'
      },
      {
        'id':'1886',
        'name':'广播、电视、电影和影视录音制作业'
      }
    ],
    'channelAccountType': [{
      'id': 'Checking',
      'name': '普通支票'
    }, {
      'id': 'Saving',
      'name': '储蓄'
    }],
    'currencyMoneyType': [
      {
        'id': 'CNY',
        'name': '￥'
      },
      {
        'id': 'USD',
        'name': '$'
      },
      {
        'id': 'EUR',
        'name': '€'
      },
      {
        'id': 'GBP',
        'name': '￡'
      },
      {
        'id': 'CAD',
        'name': '$'
      },
      {
        'id': 'JPY',
        'name': '￥'
      }
    ],
    'currencyType': [
      {
        'id': 'CNY',
        'name': '人民币'
      },
      {
        'id': 'USD',
        'name': '美元'
      },
      {
        'id': 'EUR',
        'name': '欧元'
      },
      {
        'id': 'GBP',
        'name': '英镑'
      },
      {
        'id': 'CAD',
        'name': '加元'
      },
      {
        'id': 'JPY',
        'name': '日元'
      }
    ],
    // 公司性质
    'economicType': [
      {
        'id': '100',
        'name': '内资'
      },
      {
        'id': '110',
        'name': '国有全资'
      },
      {
        'id': '120',
        'name': '集体全资'
      },
      {
        'id': '130',
        'name': '股份合作'
      },
      {
        'id': '140',
        'name': '联营'
      },
      {
        'id': '141',
        'name': '国有联营'
      },
      {
        'id': '142',
        'name': '集体联营'
      },
      {
        'id': '143',
        'name': '国有与集体联营'
      },
      {
        'id': '149',
        'name': '其他联营'
      },
      {
        'id': '150',
        'name': '有限责任（公司）'
      },
      {
        'id': '151',
        'name': '国有独资（公司）'
      },
      {
        'id': '159',
        'name': '其他有限责任（公司）'
      },
      {
        'id': '160',
        'name': '股份有限（公司）'
      },
      {
        'id': '170',
        'name': '私有'
      },
      {
        'id': '171',
        'name': '私有独资'
      },
      {
        'id': '172',
        'name': '私有合伙'
      },
      {
        'id': '173',
        'name': '私营有限责任（公司）'
      },
      {
        'id': '174',
        'name': '私营股份有限（公司）'
      },
      {
        'id': '175',
        'name': '个体经营'
      },
      {
        'id': '179',
        'name': '其他私有'
      },
      {
        'id': '190',
        'name': '其他内资'
      },
      {
        'id': '200',
        'name': '港澳台投资'
      },
      {
        'id': '210',
        'name': '内地和港澳台合资'
      },
      {
        'id': '220',
        'name': '内地和港澳台合作'
      },
      {
        'id': '230',
        'name': '港澳台独资'
      },
      {
        'id': '240',
        'name': '港澳台投资股份有限（公司）'
      },
      {
        'id': '290',
        'name': '其他港澳台投资'
      },
      {
        'id': '300',
        'name': '国外投资'
      },
      {
        'id': '310',
        'name': '中外合资'
      },
      {
        'id': '320',
        'name': '中外合作'
      },
      {
        'id': '330',
        'name': '外资'
      },
      {
        'id': '340',
        'name': '国外投资股份有限（公司）'
      },
      {
        'id': '390',
        'name': '其他国外投资'
      },
      {
        'id': '400',
        'name': '境外机构'
      },
      {
        'id': '900',
        'name': '其他'
      }
    ],
    'expectedSalesList': [
      {
        'id': 'LESS_THAN_TEN',
        'name': '小于10万美元'
      },
      {
        'id': 'TEN_TO_FIFTY',
        'name': '10到50万美元'
      },
      {
        'id': 'FIFTY_TO_ONE_HUNDRED',
        'name': '50到100万美元'
      },
      {
        'id': 'MORE_THAN_ONE_HUNDRED',
        'name': '大于100万美元'
      }
    ],
    'merchantStatus': [
      {
        'id': 'INACTIVATED',
        'name': '未激活'
      },
      {
        'id': 'PENDING',
        'name': '待审核'
      },
      {
        'id': 'NORMAL',
        'name': '正常'
      },
      {
        'id': 'FROZEN',
        'name': '冻结'
      },
      {
        'id': 'CANCELLED',
        'name': '注销'
      },
      {
        'id': 'IDENTIFY_REJECTED',
        'name': '实名审核未通过'
      }
    ],
    'merchantType': [
      {
        'id': 'ENTERPRISE',
        'name': '企业'
      },
      {
        'id': 'PERSONAL',
        'name': '个人'
      }
    ],
    'shopAreaType': [
      {
        'id': 'AMAZON_NORTH_AMERICA',
        'name': 'Amazon北美'
      },
      {
        'id': 'AMAZON_EURO',
        'name':	'Amazon欧洲'
      },
      {
        'id': 'AMAZON_JAPAN',
        'name':	'Amazon日本'
      },
      {
        'id': 'PAYPAL_AMERICA',
        'name': 'eBay'
      }
    ],
    'subShopType': [
      {
        id: 'WISH',
        name: 'Wish'
      },
      {
        id: 'EBAY',
        name: 'eBay'
      }
    ],
    'shopBizType': [
      {
        'id': 'WITHDRAW',
        'name': '提现'
      },
      {
        'id': 'INCOME',
        'name': '入账'
      }
    ],
    'countryAreaList': [
      {
        'id': 'GB',
        'name': '英国'
      },
      {
        'id': 'IT',
        'name': '意大利'
      },
      {
        'id': 'ES',
        'name': '西班牙'
      },
      {
        'id': 'DE',
        'name': '德国'
      },
      {
        'id': 'CN',
        'name': '中国大陆'
      },
      {
        'id': 'HK',
        'name': '香港'
      }
    ],
    'paymentStatus': [
      {
        'id': 'INIT',
        'name': '待处理'
      },
      {
        'id': 'PROCESS',
        'name': '处理中'
      },
      {
        'id': 'FAIL',
        'name': '付款失败'
      },
      {
        'id': 'SUCCESS',
        'name': '处理完成'
      },
    ],
    'shopStatus': [
      {
        'id': 'UNBOUND',
        'name': '待绑定'
      },
      {
        'id': 'PENDING',
        'name': '审核中'
      },
      {
        'id': 'FAIL',
        'name': '审核失败'
      },
      {
        'id': 'NORMAL',
        'name': '正常'
      },
      {
        'id': 'CANCELLED',
        'name': '关闭'
      }
    ],
    'withdrawStatusList': [
      {
        'id': 'INIT',
        'name': '提现中'
      },
      {
        'id': 'WITHDRAW',
        'name': '提现中'
      },
      {
        'id': 'SUCCESS',
        'name': '成功'
      }
    ],
    // 活动开关
    'activityInfoList': [
      {
        'id': 'europe_shop_zero_fee_rate2',
        'name': '2019070813PA00000003' // 'xxx'
      }
    ],
    'hkBeneficiaryCertType': [ // 香港受益人证件类型
      {
        'name': '第二代身份证',
        'id': 'STOCKHOLDER_ID_CARD'
      },
      {
        'name': '香港永久性居民身份证',
        'id': 'STOCKHOLDER_HK_ID_CARD'
      },
      {
        'name': '护照',
        'id': 'STOCKHOLDER_PASSPORT'
      },
      {
        'name': '护照（旧版，签发时间为2012年5月16号之前）',
        'id': 'STOCKHOLDER_OLD_PASSPORT'
      }
    ],
    'hkPersonCertType': [{ // 个人、
      'name': '香港永久性居民身份证',
      'id': 'HK_ID_CARD'
    },
    {
      'name': '护照',
      'id': 'PASSPORT'
    },
    {
      'name': '护照（旧版）',
      'id': 'OLD_PASSPORT'
    }],
    'hkDirectorCertType': [{ // 董事证件类型
      'id':'ID_CARD',
      'name':'身份证'
    },
    {
      'id':'PASSPORT',
      'name':'护照'
    },
    {
      'id':'OLD_PASSPORT',
      'name':'旧护照'
    },
    {
      'id':'HK_ID_CARD',
      'name':'香港永久性居民身份证'
    }],
  },
  'channelOpenControlMap': {
    'AMAZON_EURO': {
      'currencyList': ['EUR', 'GBP'],
      'enable': true,
      'message': '831活动期间，收款账号统一于9月5日分配'
    }
  },
  'shopTypeDictionary': {
    'AMAZON_NORTH_AMERICA': [
      {
        'id': 'AMAZON_US',
        'name': '美国'
      }
    ]
  },
  'areaCurrencyDictionary': {
    'PAYPAL_AMERICA': [
      {
        'id': 'USD',
        'name': '美元'
      }
    ],
    'AMAZON_JAPAN': [
      {
        'id': 'JPY',
        'name': '日元'
      }
    ],
    'AMAZON_NORTH_AMERICA': [
      {
        'id': 'USD',
        'name': '美元'
      },
      {
        'id': 'CAD',
        'name': '加元'
      }
    ],
    'AMAZON_EURO': [
      {
        'id': 'EUR',
        'name': '欧元'
      },
      {
        'id': 'GBP',
        'name': '英镑'
      }
    ]
  },
  // 帮助中心所有的问题映射
  'commonQuestions': {
    // 如何获取卖家编号，AWS访问密钥ID，密钥
    'amazon_seller_id_and_aws_keys': 'http://global.epay.163.com/#/helpCenter/2018071217DT00073303/2018071815HQ00074313',
    // 从Amazon平台入账到网易支付需要多久？
    'amazon_withdraw_time': 'http://global.epay.163.com/#/helpCenter/2018071217DT00073303/2018071217HQ00073305',
    // 如何把收款账号绑定到亚马逊后台？
    'bind_to_amazon_backstage': 'http://global.epay.163.com/#/helpCenter/2018071217DT00073303/2018071217HQ00073306',
    // 如何把收款账号绑定到eBay后台？
    'bind_to_paypal_backstage': 'https://globalpay.163.com/#/helpCenter/2018072419DT01215907/2019101216HQ01609712',
    // 亚马逊更换收款账户的注意事项，防止被冻结或被审核
    'change_amazon_gather_account': 'http://global.epay.163.com/#/helpCenter/2018071217DT00073303/2018071815HQ00074311',
    // 如何修改登录密码？
    'change_login_password': 'http://global.epay.163.com/#/helpCenter/2018071619DT00074301/2018071815HQ00074317',
    // 如何修改手机号？
    'change_mobile_phone': 'http://global.epay.163.com/#/helpCenter/2018071619DT00074301/2018071815HQ00074316',
    // 如何查看Amazon店铺链接?
    'check_amazon_shop_links': 'http://global.epay.163.com/#/helpCenter/2018071217DT00073303/2018071217HQ00073305',
    // 如何联系网易支付客服？
    'contact_us': 'http://global.epay.163.com/#/helpCenter/2018071619DT00074302/2018071815HQ00074318',
    // 使用连连提现会占用我的外管额度吗？
    'lian_lian_and_my_exchange_limit': 'http://global.epay.163.com/#/helpCenter/2018071217DT00073304/2018071815HQ00074314',
    // 注册账户需要哪些资料
    'register_profiles': 'http://global.epay.163.com/#/helpCenter/2018071619DT00074300/2018071619HQ00074305',
    // 提现额度有上限吗？
    'withdraw_amount_limit': 'http://global.epay.163.com/#/helpCenter/2018071217DT00073304/2018071815HQ00074315',
    // 如何填写账户持有人姓名
    'account_holder_name': 'https://globalpay.163.com/#/helpCenter/2018072419DT01215907/2018112210HQ01304559',
    // 活动跳转
    'activity_description': 'https://globalpay.163.com/#/helpCenter/2018072419DT01215907/2018112210HQ01304559',
    // 企业实名认证和个人实名认证的区别是什么？
    'identify_personal_enterprise_difference': 'https://globalpay.163.com/#/helpCenter/2018072419DT01215918/2019042315HQ01487147',
    // 欧洲站实名认证该选哪种实名认证方式？
    'europe_identify_way': 'https://globalpay.163.com/#/helpCenter/2018072419DT01215918/2019042315HQ01487182',
    // 缴税时效性等问题解答请至帮助中心查看 立即前往
    'tax_payment_way': 'https://globalpay.163.com/#/helpCenter/2018072419DT01215929/2019061115HQ01543545',
    'paypal_statement_dowloand': 'https://globalpay.163.com/#/helpCenter/2018072419DT01215907/2019101814HQ01612487'
  },
  'currentTimestamp': 1547448000370
}

// 返回的结果处理
module.exports = function() {
  return {
    'message': 'SUCCESS',
    'result': data,
    'status': '200'
  }
}