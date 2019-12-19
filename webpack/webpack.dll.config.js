const webpack = require('webpack')
const path = require('path')

const BaseConfig = {
  entry: {
    vendor: ['react', 'react-dom'],
  },
  output: {
    library: '[name]_[hash]',
    path: path.resolve('site'), // 配置输出的地址
    filename: '[name]-[hash].js', // [name] 对象的键 - [hash] 哈希值
    chunkFilename: '[name]-[hash].js', // 异步分块加载文件名表示，如按需加载的模块名定义
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join('site', '[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
  ],
}


module.exports = BaseConfig
