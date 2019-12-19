process.env.NODE_ENV = 'production' // 设置环境变量;
const webpack = require('webpack')
const webpackConfig = require('../webpack/webpack.build.config')

const compiler = webpack(webpackConfig)
compiler.run((err, stats) => {
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
