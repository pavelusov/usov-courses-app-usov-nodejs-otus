import 'babel-runtime/regenerator';
import 'webpack-hot-middleware/client?reload=true';
import './main.css';
import './index.html';

const hello = async () => {
  await console.log('hot hello');
};
hello().then(() => {
  console.log('done');
});
