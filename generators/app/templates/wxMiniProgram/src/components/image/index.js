const app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },

  properties: {
    src: {
      type: String,
      value: '',
    },

    width: {
      type: Number,
      value: 200,
    },

    height: {
      type: Number,
      value: 200,
    },

    mode: {
      type: String,
      value: 'scaleToFill',
    },

    extClass: {
      type: String,
      value: '',
    },

    errorImage: {
      type: String,
      value: './img/img-err.svg',
    },
  },

  data: {
    srcCopy: './img/img-err.svg',
  },

  observers: {
    src(val) {
      this.processImage(val)
    },
  },

  // lifetimes得在2.2.3基础库才支持
  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached() {
      // 处理图片
      this.processImage(this.data.src)
    },
  },

  methods: {
    /**
     * 图片加载失败后回调
     */
    handleError() {
      this.setData({
        srcCopy: this.data.errorImage,
      })
    },
    /**
     * 根据手机分辨率处理图片（结合图片云服务）
     */
    processImage(imageUrl) {
      let src = imageUrl || this.data.srcCopy
      if (this.data.src && this.data.src !== '') {
        const nosReg = /(epay.*?nos)|(nos\.globalpay)/
        // 只有Nos下的图片才处理
        if (nosReg.test(src)) {
          const { systemInfo } = app.globalData
          const screenWidth = (systemInfo && systemInfo.screenWidth) || 375
          const pixelRatio = (systemInfo && systemInfo.pixelRatio) || 2
          const designWidth = 750 // 设计稿用ihpone6为基准
          const k = screenWidth / designWidth // 系数
          // 为了不让每个图片都获取一遍设备信息损耗性能，把pixelRatio放在globalData中
          const suitableWidth = Math.ceil(this.data.width * pixelRatio * k)
          // 结合阿里云oss
          const isAndroid = systemInfo.platform === 'android'
          src += src.indexOf('?imageView') === -1 ? `?imageView&thumbnail=${suitableWidth}x0&interlace=1` : `&thumbnail=${suitableWidth}x0&interlace=1`
          if (isAndroid) {
            src += '&type=webp'
          }
        }
      }
      this.setData({
        srcCopy: src,
      })
    },
  },
})
