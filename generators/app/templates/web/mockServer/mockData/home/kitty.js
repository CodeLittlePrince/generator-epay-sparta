// 返回的结果处理
module.exports = ({ params, share }) => {
  return {
    message: 'error message',
    result: true,
    status: '200',
    params,
    shareData: share.data,
  }
}