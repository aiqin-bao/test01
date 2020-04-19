const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const resolvePath = (name) => path.resolve(__dirname, name)

const prodConfig = {

	mode: 'production',

	output: {
		path: resolvePath('build'),
		filename: '[name].[hash:4].js',
		chunkFilename: '[name].[hash:4].js',
		pathinfo: false,
		publicPath: '/'  //cdn
	},

	optimization: {
		minimize: true,
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: 'initial',
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 0,
					name: 'common'
				}
			}
		}
	}
}


module.exports = Merge(baseConfig, prodConfig)