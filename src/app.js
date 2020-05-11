import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import router from './routes/router';

async function render(Component) {
  const { pathname } = window.location;
  const Route = await router.resolve({ pathname });

  ReactDOM.hydrate(
    <AppContainer>
      <Component>
        <Route />
      </Component>
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
