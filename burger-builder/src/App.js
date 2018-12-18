import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  // states are on only avialable in class components not function components
  state={
    persons:[
      {name:"dee", age:"24"},
      {name:"deo", age:"27"},
      {name:"aggrey", age:"34"},

    ]
  
  }
  switchNameHandler=()=>{
    console.log('1222')
    this.setState({
      persons:[
        {name:"deeupdated", age:"24"},
        {name:"deo", age:"27"},
        {name:"aggrey", age:"34"},
  
      ]
    }
    
    )
  }
  render() {
    return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={this.switchNameHandler}>Click Me</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'updated'))
  }
}

export default App;
