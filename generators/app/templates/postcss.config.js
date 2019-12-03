const autoprefixer = require('autoprefixer')
<% if (!isPc) { -%>
const pxtorem = require('postcss-pxtorem')

<% } -%>
module.exports = {
  plugins: [
    autoprefixer()<% if (!isPc) { %>,
    pxtorem({
      rootValue: 100,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 2
    })<% } %>
  ]
}