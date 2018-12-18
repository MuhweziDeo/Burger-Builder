import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>Hello</h1>
      <Person name="deo" age="25"/>
      <Person name="dee" age="28"/>
      <Person name="aggrey" age="32"/>
    </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'updated'))
  }
}

export default App;
