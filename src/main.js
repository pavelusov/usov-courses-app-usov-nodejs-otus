import 'babel-runtime/regenerator';
import 'react-hot-loader/patch';
import 'babel-register';
import 'webpack-hot-middleware/client?reload=true';
import './main.css';
import './index.html';
import './app';

const hello = async () => {
  await console.log('hot hello');
  console.log('done');
};

hello();
