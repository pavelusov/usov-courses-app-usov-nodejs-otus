const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['babel-polyfill', './src/main.js']
    // main: ['core-js/fn/promise', './src/main.js']
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    overlay: true,
    stats: {
      colors: true,
    },
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
