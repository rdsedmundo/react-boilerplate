import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <section>
        <h1>Hello World</h1>
      </section>
    );
  }
}

export default hot(module)(App);
