const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = env => {
  return {
    entry: {
      main: ['babel-polyfill', './src/main.js']
      // main: ['core-js/fn/promise', './src/main.js']
    },
    mode: 'production',
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
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
            }
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
    plugins: [
      new OptimizeCssAssetsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash].css',
      }),
      new htmlWebpackPlugin({
        template: './src/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV),
        }
      }),
      new UglifyPlugin(),
      new CompressionPlugin({
        algorithm: 'gzip'
      }),
    ]
  }
};
