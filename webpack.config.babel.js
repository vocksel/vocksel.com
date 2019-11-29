import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	mode: IS_PRODUCTION ? 'production' : 'development',
	devtool: 'source-map',

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

	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			favicon: path.resolve(__dirname, 'src/favicon.ico'),
		}),

		new MiniCssExtractPlugin(),
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
				test: /\.scss$/,
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
			}
		]
	},

	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
};
