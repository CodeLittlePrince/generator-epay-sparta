module.exports = () => {
  // 返回最终结果（配合mockSwitch）
  return {
    message: '发送失败',
    result: {
      token: true
    },
    '@success': {
      status: '200'
    },
    '@fail': {
      status: '404'
    }
  }
}