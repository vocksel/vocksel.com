import path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    main: 'app.js',
    vendor: [ 'react', 'react-dom', 'react-router', 'moment' ]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[chunkhash].[name].js'
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,

    // Enables automatic reloading when files are changed.
    //
    // As of February 10, 2017, Webpack's docs mention that: "By default the
    // application will be served with inline mode enabled." This doesn't seem
    // to be the case, as without the inline option specified, there is no auto
    // reloading.
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-inline-cli-only
    inline: true
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

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader', 'eslint-loader' ]
      },

      // Separate compiling for the vendor styles.
      //
      // There was a lot of problems from css-loader's modules option applying
      // to vendor libraries. To fix it, we're compiling our vendor styles
      // separately.
      {
        test: /vendor.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ]
        })
      },

      {
        test: /\.scss$/,

        // Ignores the vendor styles that we process in the above rule.
        exclude: /vendor.scss/,

        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },

      {
        test: /\.(png|jpg|ico|gif)/,
        use: 'url-loader?limit=10000'
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      template: 'index.html',
    }),

    new ExtractTextPlugin('style.css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
