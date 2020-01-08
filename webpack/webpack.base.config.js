
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 模板插件


const BaseConfig = {
  entry: {
    app: './src/main.js', //  主入口
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve('dist'), // 配置输出的地址
    filename: '[name]-[hash].js', // [name] 对象的键 - [hash] 哈希值
    chunkFilename: '[name]-[hash].js', // 异步分块加载文件名表示，如按需加载的模块名定义
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 匹配规则
        exclude: /node_modules/, // 排除不解析
        loader: 'babel-loader', // 使用的加载器
        options: {
          cacheDirectory: false, // 开启babel 编译缓存
        },
      },
      /* {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      }, */
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/, // 规则
          name: 'common', // 模块名
          chunks: 'all', // chunks 模式
          priority: 1, // 优先级
        },
        // 匹配 entry 入口为 vendor 模块打包到vendor
        vendor: {
          test: /vendor/,
          name: 'vendor',
          chunks: 'all',
          priority: 3,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ // Also generate a test.html
      title: 'Custom template', // 参数
      filename: 'index.html', // 输出的文件名
      template: 'tel/index.html', // 模板地址
    }),
  ],
}


module.exports = BaseConfig
