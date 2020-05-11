import React, { Component } from 'react';
import Layout from '../Layout';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout>
        {children}
      </Layout>
    )
  }
}

export default App;
