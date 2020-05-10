import express from 'express';
import path from 'express';
import staticGzip from 'express-static-gzip';

// Webpack
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const isProd = process.env.NODE_ENV === 'production';

/**
 * Development
 */
if (!isProd) {
  console.log('** Development **');
  const config = require('../../config/webpack.dev');
  const compiler = webpack(config);
  // Middleware
// 1
  app.use(webpackDevMiddleware(compiler, config.devServer));
// 2
  app.use(webpackHotMiddleware(compiler));
}

const staticMiddleware = express.static('dist');
app.use(staticMiddleware);

// app.use(staticGzip('dist'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is listening');
});
