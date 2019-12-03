module.exports = {
  'presets': [
    [
      '@babel/env',
      {
        'targets': {
          'browsers': [
<% if (!isPc) { -%>
            '> 0.1%',
            'iOS >= 7.0',
            'Android >= 4.3'
<% } else { -%>
            '> 1%',
            'last 2 versions',
            '<%- ieVersion %>'
<% } -%>
          ]
        },
        'modules': false,
        'useBuiltIns': 'usage',
        'corejs': '2'
      }
    ]
  ],
  'plugins': [
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-object-rest-spread', { 'loose': true, 'useBuiltIns': true }], // babel-preset-env已依赖安装
    ['@babel/plugin-proposal-class-properties', { 'loose': true }]
  ],
  'env': {
<% if (includeUnitTest) { -%>
    'test': {
      'plugins': [ 'istanbul' ]
    }
<% } -%>
  }
}