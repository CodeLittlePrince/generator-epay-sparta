const polyfill = {
  inject() {
    if (!Promise.prototype.finally) {
      // eslint-disable-next-line
      Promise.prototype.finally = function (callback) {
        const P = this.constructor
        return this.then(
          (value) => P.resolve(callback()).then(() => value),
          (reason) => P.resolve(callback()).then(() => { throw reason }),
        )
      }
    }
  },
}

export default polyfill
