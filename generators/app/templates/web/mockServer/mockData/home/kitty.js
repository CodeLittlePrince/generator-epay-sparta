// 返回的结果处理
module.exports = (params, shareData) => {
  return {
    message: 'error message',
    result: true,
    status: '200',
    params,
    shareData,
  }
}