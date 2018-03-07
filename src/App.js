import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  sendMessage=() => {
    this.props.socket.emit('message', 'Hello world!');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.sendMessage.bind(this)}>
      Send!
    </button>
      </div>
    );
  }
}

export default socketConnect(App);
