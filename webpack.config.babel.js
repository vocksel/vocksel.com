import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
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
			title: 'David Minnerly',
			favicon: path.resolve(__dirname, 'src/favicon.ico'),
			meta: {
				viewport: 'width=device-width, initial-scale=1, user-scalable=no'
			}
		}),
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
					'style-loader',
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
