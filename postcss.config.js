const config = {
  // map: {
  //   inline: false, // 使用源码地图 但不是用行内源码
  // }, //关闭source-map
  plugins: {
    'postcss-preset-env': {
      stage: 0,
    },
    'postcss-apply': {},
    'postcss-color-function': {},
    stylelint: {},
  },
}

module.exports = config
