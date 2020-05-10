import express from 'express';
import path from 'express';

// Webpack
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../config/webpack.dev';



const app = express();
const staticMiddleware = express.static('dist');
const compiler = webpack(config);

// Middleware
app.use(staticMiddleware);
app.use(webpackDevMiddleware(compiler, config.devServer));

app.listen(3000, () => {
  console.log('Server is listening');
});
