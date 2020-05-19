Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {
    extClass: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
    background: {
      type: String,
      value: '',
    },
    color: {
      type: String,
      value: '',
    },
    back: {
      type: Boolean,
      value: true,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    animated: {
      type: Boolean,
      value: true,
    },
    show: {
      type: Boolean,
      value: true,
      observer: '_showChange',
    },
    delta: {
      type: Number,
      value: 1,
    },
  },
  data: {
    displayStyle: '',
    needBack: false,
  },
  attached: function attached() {
    const that = this;

    const isSupport = !!wx.getMenuButtonBoundingClientRect;
    const rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
    wx.getSystemInfo({
      success: function success(res) {
        const ios = !!(res.system.toLowerCase().search('ios') + 1);
        that.setData({
          ios,
          statusBarHeight: res.statusBarHeight,
          innerWidth: isSupport ? `width:${rect.left}px` : '',
          innerPaddingRight: isSupport ? `padding-right:${res.windowWidth - rect.left}px` : '',
          leftWidth: isSupport ? `width:${res.windowWidth - rect.left}px` : '',
        });
      },
    });
    this.setData({
      needBack: getCurrentPages().length > 1,
    })
  },

  methods: {
    _showChange: function _showChange(show) {
      const { animated } = this.data;
      let displayStyle = '';
      if (animated) {
        displayStyle = `opacity: ${show ? '1' : '0'};-webkit-transition:opacity 0.5s;transition:opacity 0.5s;`;
      } else {
        displayStyle = `display: ${show ? '' : 'none'}`;
      }
      this.setData({
        displayStyle,
      });
    },
    back: function back() {
      const { data } = this;
      wx.navigateBack({
        delta: data.delta,
      });
      this.triggerEvent('back', { delta: data.delta }, {});
    },
  },
});
