const autoprefixer = require('autoprefixer')
<% if (!isPc) { -%>
const pxtorem = require('postcss-pxtorem')

<% } -%>
module.exports = {
  plugins: [
    autoprefixer({
      browsers: [
<% if (!isPc) { -%>
        '> 1%',
        'iOS >= 7.0',
        'Android >= 4.3'
<% } else { -%>
        '> 1%',
        'last 2 versions',
        '<%- ieVersion %>'
<% } -%>
      ]
    })<% if (!isPc) { %>,
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