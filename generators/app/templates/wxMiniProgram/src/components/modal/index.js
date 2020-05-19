Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {
    title: {
      type: String,
      value: '',
    },
    extClass: {
      type: String,
      value: '',
    },
    maskClosable: {
      type: Boolean,
      value: true,
    },
    mask: {
      type: Boolean,
      value: true,
    },
    show: {
      type: Boolean,
      value: false,
      observer: '_showChange',
    },
    buttons: {
      type: Array,
      value: [],
    },
  },

  data: {
    innerShow: false,
  },

  ready: function ready() {
    const { buttons } = this.data;
    const len = buttons.length;
    buttons.forEach((btn, index) => {
      if (len === 1) {
        btn.className = 'weui-dialog__btn_primary';
      } else if (index === 0) {
        btn.className = 'weui-dialog__btn_default';
      } else {
        btn.className = 'weui-dialog__btn_primary';
      }
    });
    this.setData({
      buttons,
    });
  },

  methods: {
    buttonTap: function buttonTap(e) {
      const { index } = e.currentTarget.dataset;

      this.triggerEvent('buttontap', { index, item: this.data.buttons[index] }, {});
    },
    close: function close() {
      const { data } = this;
      if (!data.maskClosable) return;
      this.setData({
        show: false,
      });
      this.triggerEvent('close', {}, {});
    },
    stopEvent: function stopEvent() {},
  },
});
