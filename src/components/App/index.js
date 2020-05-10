import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c: 1
    };
  }

  onClick( ) {
    const { c } = this.state;
    this.setState({c: c + 1})
  }

  render() {
    const { c } = this.state;
    return (
      <div onClick={this.onClick.bind(this)}>App44 Component hello {c}</div>
    )
  }
}

export default App;
