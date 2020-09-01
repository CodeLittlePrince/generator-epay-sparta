module.exports = {
  share: [
    {
      name: 'shareData1',
      desc: '共享数据1',
      selections: [
        {
          name: '无羊',
          value: `[
            sheep [ @none ]
          ]`
        },
        {
          name: '一只羊',
          value: `[
            sheep [ @one ]
          ]`
        },
        {
          name: '很多羊',
          value: `[
            sheep [ @lots ]
          ]`
        },
      ]
    }
  ],

  api: [
    // 主页-hello 用到了运行时控制success和error
    {
      desc: 'hello kitty',
      url: '/api/home/hello',
      selections: [
        {
          name: '成功',
          value: `[
            result [@success],
            @good
          ]`
        },
        {
          name: '失败',
          value: `[
            result [@error],
            @bad
          ]`
        }
      ]
    }
  ]
}