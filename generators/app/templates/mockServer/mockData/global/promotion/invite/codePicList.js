const Mock = require('mockjs')
// 780
const qrCode = 'https://nos.netease.com/epay-platform-test/e1100c8e-952f-408e-a51b-5d3b95b4432c.png'
// 1710 x 3036
const img1 = 'https://nos.netease.com/epay-platform-test/3fc5463a-647b-46e8-b2f1-4771ea90e6fe.png'
const img2 = 'https://nos.netease.com/epay-platform-test/f37745f9-c7ad-4ddb-a5bf-2268f43d5b57.png'
const img3 = 'https://nos.netease.com/epay-platform-test/379772ab-b34f-459f-98b5-020ecafc853f.png'

module.exports = () => Mock.mock({
  'errors': '',
  'message': '操作成功',
  'result': [
    {
      'enName': 'dinglei',
      'srcUrl': img1,
      'qrCodeUrl': qrCode
    },
    {
      'enName': 'dinglei',
      'srcUrl': img2,
      'qrCodeUrl': qrCode
    },
    {
      'enName': 'dinglei',
      'srcUrl': img3,
      'qrCodeUrl': qrCode
    }
  ],
  'qrCodeUrl': qrCode,
  'status': '200',
  'success': true
})
