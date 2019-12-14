const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	mode: IS_PRODUCTION ? 'production' : 'development',
	devtool: 'source-map',

	output: {
		publicPath: '/',
	},

	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'node_modules')
		],

		extensions: [
			'.js', '.json', // Defaults
			'.jsx'
		]
	},

	devServer: {
		historyApiFallback: true,
	},

	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/static/index.html'),
			favicon: path.resolve(__dirname, 'src/static/favicon.ico'),
		}),

		new MiniCssExtractPlugin(),

		new CopyWebpackPlugin([
			path.resolve(__dirname, 'src/static/og-thumbnail.jpg'),
			path.resolve(__dirname, 'src/static/oembed.json'),
		]),
	],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					'eslint-loader',
				]
			},

			{
				test: /\.s[a|c]ss$/,
				use: [
					IS_PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'sass-loader',
				]
			},

			// We write everything in Sass, CSS handling is just for third-party libraries.
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				]
			},

			{
				test: /\.(jpe?g|png)/,
				use: [
					'file-loader',
				]
			}
		]
	},

	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
};
