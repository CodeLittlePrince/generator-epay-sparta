const ENV = 'local'

const envDic = {
  local: {
    envVersion: 'develop',
    domain: {
      mainSite: 'http://localhost:8300',
      h5: 'http://localhost:7878/h5/#',
    },
    hubbleAppKey: 'XX-XXXX-XXXXXXXXXXXX',
  },

  dev: {
    envVersion: 'develop',
    domain: {
      mainSite: 'https://dev18-global-devjd.epay.163.com',
      h5: 'https://dev18-global-devjd.epay.163.com/h5/#',
    },
    hubbleAppKey: 'XX-XXXX-XXXXXXXXXXXX',
  },

  test: {
    envVersion: 'develop',
    domain: {
      mainSite: 'https://global-testjd.epay.163.com',
      h5: 'https://global-testjd.epay.163.com/h5/#',
    },
    hubbleAppKey: 'XX-XXXX-XXXXXXXXXXXX',
  },

  trial: {
    envVersion: 'trial',
    domain: {
      mainSite: 'https://globalpay.163.com',
      h5: 'https://globalpay.163.com/h5/#',
    },
    hubbleAppKey: 'XX-XXXX-XXXXXXXXXXXX',
  },

  prod: {
    envVersion: 'release',
    domain: {
      mainSite: 'https://globalpay.163.com',
      h5: 'https://globalpay.163.com/h5/#',
    },
    hubbleAppKey: 'XX-XXXX-XXXXXXXXXXXX',
  },
}

export default {
  type: ENV,
  ...envDic[ENV],
}
