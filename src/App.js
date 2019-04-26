import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      handleClick: () => {
      }
    }
  }
  render() {
    return (
      <div>
        <h1 onClick={() => this.state.handleClick()}>Hello World</h1>
      </div>
    );
  }
}
export default App;
