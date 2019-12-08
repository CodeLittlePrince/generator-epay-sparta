const os = require('os')
const portfinder = require('portfinder')

/**
 * 获取本机IP
 */
function getLocalIP() {
  const interfaces = os.networkInterfaces()
  let addresses = []
  for (let k in interfaces) {
    for (let k2 in interfaces[k]) {
      let address = interfaces[k][k2]
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address)
      }
    }
  }
  return addresses[0]
}

/**
 * 获取可用的本地端口，用于devServer
 */
async function getDevServerPort() {
  // 动态获取端口，默认8080
  portfinder.basePort = 8080
  return await portfinder.getPortPromise()
}

async function getDevConfig() {
  const protocol = 'http'
  const ip = getLocalIP(0) || 'localhost'
  const domain = `${protocol}://${ip}`
  const devServerPort = await getDevServerPort()
  const proxyServerPort = '7777'
  const devLocalHost = `${protocol}://localhost:${devServerPort}`
  const devServerHost = `${protocol}://${ip}:${devServerPort}`
  const proxyServerHost = `${protocol}://${ip}:${proxyServerPort}`
    
  return {
    ip,
    domain,
    devServerPort,
    proxyServerPort,
    devLocalHost,
    devServerHost,
    proxyServerHost
  }
}

module.exports = {
  getDevConfig
}