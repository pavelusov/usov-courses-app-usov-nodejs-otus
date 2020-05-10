import 'babel-runtime/regenerator';
import './main.css';
import './index.html';

const hello = async () => {
  await console.log('hot hello');
};
hello().then(() => {
  console.log('done');
});
