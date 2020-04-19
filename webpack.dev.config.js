const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const Merge = require('webpack-merge')

const devConfig = {

	mode: 'development', 

	devServer: {
		inline: true,//打包后加入一个websocket客户端
		hot: true,//热加载
		contentBase: path.join(__dirname, "..", "build"), //静态文件根目录
		port: 3001, // 端口
		host: 'localhost',
		overlay: true,
		compress: false // 服务器返回浏览器的时候是否启动gzip压缩
	},

	watchOptions: {
		ignored: /node_modules/, //忽略不用监听变更的目录
		aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
		poll: 1000 //每秒询问的文件变更的次数
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	devtool: 'eval-source-map'
}


module.exports = Merge(baseConfig, devConfig);


