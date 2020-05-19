const app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
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
  },

  methods: {
    handleBack() {
      app.router.redirectTo('/pages/blank/index')
    },
  },
})
