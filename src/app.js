import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import HTML from './components/App/HTML';

function render(Component) {
  ReactDOM.hydrate(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root'),
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default;
    render(App);
  })
}