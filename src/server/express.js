import express from 'express';
import path from 'express';
import expressStaticGzip from 'express-static-gzip';

// Webpack
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import hotServerMiddleware from 'webpack-hot-server-middleware';
import configDevClient from '../../config/webpack.dev-client';
import configDevServer from '../../config/webpack.dev-server';
import configProdClient from '../../config/webpack.prod-client';
import configProdServer from '../../config/webpack.prod-Server';

const app = express();
const isProd = process.env.NODE_ENV === 'production';


/**
 * Development
 */
if (!isProd) {
  console.info('** Development **');
  const compilers = webpack([configDevClient, configDevServer]);
  const clientCompiler = compilers.compilers[0];
  const serverCompiler = compilers.compilers[1];
  // Middleware
  // 1
  app.use(webpackDevMiddleware(compilers, configDevClient.devServer));
  // 2
  app.use(webpackHotMiddleware(clientCompiler, configDevClient.devServer));
  // 3
  app.use(hotServerMiddleware(compilers));
} else {
  console.info('** Production **');
  const render = require('./render').default;
  app.use(expressStaticGzip('dist'));
  app.use(render());
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is listening');
});
