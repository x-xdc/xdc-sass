var load = require('./sass-loader')

module.exports = function (xdc) {
  var loader
  var SOURCE_MAP = xdc.config.devtool

  if (process.env.NODE_ENV === 'production') {
    loader = load({
      sourceMap: SOURCE_MAP ? '#source-map' : false,
      extract: !!xdc.config.extractCSS,
      postcss: !!xdc.config.postcss
    })
  } else {
    loader = load({
      postcss: !!xdc.config.postcss
    })
  }

  xdc.add('loader.scss', {
    test: /\.scss$/,
    loader: loader.scss
  })

  xdc.add('loader.sass', {
    test: /\.sass$/,
    loader: loader.sass
  })
}
