import React, { Component } from 'react';

import Header from '../Header';
import './Layout.css';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="Layout-root">
        <Header />
        {children}
      </div>
    )
  }
}

export default Layout;
