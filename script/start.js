const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true,
  },
  contentBase: './dist', // 设置根目录
  // open: true, // 打开浏览器
  port: 8089, // 设置请求的端口
  proxy:{},// 一些代理的配置
  //historyApiFallback: true // html5路由404转向
  //openPage: '/different/page' // 指定打开页面时导航的路径
  compress: true // 一切服务启动gzip
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(devServerOptions.port, '127.0.0.1', () => {
  console.log(`Starting server on http://localhost:${devServerOptions.port}`);
});