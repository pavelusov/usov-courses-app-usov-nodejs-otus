import express from 'express';
import path from 'express';

// Webpack
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../config/webpack.dev';


const app = express();
const staticMiddleware = express.static('dist');
const compiler = webpack(config);

// Middleware
// 1
app.use(webpackDevMiddleware(compiler, config.devServer));
// 2
app.use(webpackHotMiddleware(compiler));

app.use(staticMiddleware);
app.listen(3000, () => {
  console.log('Server is listening');
});
