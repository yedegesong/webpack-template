const webpack = require('webpack')
const webpackConfig = require('../config/webpack.build.config')

const compiler = webpack(webpackConfig)
compiler.watch({
  // watchOptions 示例
  aggregateTimeout: 300,
  poll: undefined,
}, (err, stats) => {
  // 在这里打印 watch/build 结果...
  if (err) {
    console.error(err.stack || err)
    if (err.details) {
      console.error(err.details)
    }
    return
  }
  console.log(`${(stats.endTime - stats.startTime) / 1000}秒`)

  const info = stats.toString({
    colors: true,
  })

  if (stats.hasErrors()) {
    console.error(info.errors)
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }
  // console.log(stats.endTime-stats.startTime)
  console.log(info)
})
