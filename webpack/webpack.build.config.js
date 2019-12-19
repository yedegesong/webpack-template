const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const moment = require('moment')

moment.locale('zh-cn')
const time = (moment().format('YYYY-MM-DD HH:mm:ss'))
const BaseConfig = require('./webpack.base.config')

const env = process.env.NODE_ENV === 'test'
  ? require('../config/test.env')
  : require('../config/prod.env')

const CONFIG = merge(BaseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new ManifestPlugin(), // 输出webpack模块的映射文件到对应json
    new webpack.ProgressPlugin(), // 编译过程插件
    // 提取js内的动态css到单独的外围css文件
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new OptimizeCssAssetsPlugin(), // 压缩css
    new webpack.BannerPlugin({
      banner: `构建日期:${time}`,
    }),
  ],
})
module.exports = CONFIG
