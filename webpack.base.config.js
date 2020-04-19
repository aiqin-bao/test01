const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackplugin = require('friendly-errors-webpack-plugin')

const resolvePath = (name) => { 
	return path.resolve(__dirname, name)
}

const baseConfig = {

	entry: {
		main: './src/index.js'
	},

	output: {
		path: resolvePath('build'),
		filename: '[name].js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['react', 'env', 'stage-0']
					}
				}]
			},
			{
				test: /\.(css|scss)/,
				exclude: /node_modules/,
				use: [
					'css-hot-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}
		]
	},

	resolve: {
		extensions: ['.js', '.css', 'scss'],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			path: resolvePath('build')
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		}),
		new FriendlyErrorsWebpackplugin({
			clearConsole: true
		})
	],

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	}

}


module.exports = baseConfig