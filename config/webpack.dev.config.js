const webpack = require('webpack')
const Merge = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')

const CONFIG = Merge(BaseConfig, {
  mode: 'development',
  devtool: 'source-map', // 输出Map源
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ serverUrl: JSON.stringify('http://www.baiodu.com') }),
  ],
})
module.exports = CONFIG
