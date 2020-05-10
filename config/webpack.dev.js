const path = require('path');

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
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
          {
            loader: 'extract-loader',
            options: {
              publicPath: "../"
            }
          },
          {
            loader: 'html-loader',
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    stats: {
      colors: true,
    }
  }
};
