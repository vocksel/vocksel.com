import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import locals from './locals.babel.js';

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      { test: /\.pug$/, use: 'pug-loader' },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.(png|jpg|ico)/, use: 'url-loader?limit=10000' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico',
      template: './src/views/index.pug',

      // Accessed in the Pug files at `htmlWebpackPlugin.options.locals`.
      //
      // This is how we have to pass data to our templates. It took so long to
      // figure this out.
      locals: locals
    })
  ]
};
