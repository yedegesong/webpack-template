
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清除插件
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 模板插件


const BaseConfig = {
  mode: 'development',
  // devtool: 'source-map', // 输出Map源
  entry: {
    header: './src/components/one', //  主入口
    footer: './src/components/footer', //  主入口
  },
  output: {
    path: path.resolve('www/build'), // 配置输出的地址
    // library: 'one',
    filename: '[name]-[hash].js', // [name] 对象的键 - [hash] 哈希值
    chunkFilename: '[name]-[hash].js', // 异步分块加载文件名表示，如按需加载的模块名定义
    publicPath: '/build',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 匹配规则
        exclude: /node_modules/, // 排除不解析
        use: {
          loader: 'babel-loader',
          options: {

          },
        },
        // loader: 'babel-loader', // 使用的加载器
        // options: {
        //   cacheDirectory: false, // 开启babel 编译缓存
        // },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
          'less-loader',
        ],
      },
    ],
  },
  resolve: {
    /**
     * 设置别名解决相对长路径问题
     */
    alias:
    {
      sdk: path.resolve('sdk'),
      src: path.resolve('src'),
    },
    // 尝试按顺序解决这些扩展
    extensions: ['.js', '.jsx', '.json', '.ts'],
    // webpack 解决模块时，应该解析哪些目录
    modules: [
      'sdk',
      'src',
      'node_modules',
    ],
  },
  externals: {
    // React: 'React',
    // ReactDOM: 'react-dom',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/, // 规则
          name: 'common', // 模块名
          chunks: 'all', // chunks 模式
          priority: 1, // 优先级
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllReferencePlugin({
      // 描述 lodash 动态链接库的文件内容
      manifest: require('../www/site/vendor-manifest.json'),
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html
      title: 'Custom template', // 参数
      filename: 'index.html', // 输出的文件名
      template: 'tel/index.html', // 模板地址
    }),
  ],
}


module.exports = BaseConfig
