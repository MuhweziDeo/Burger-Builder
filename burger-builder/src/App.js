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
  switchNameHandler=(newName)=>{
    console.log('1222')
    this.setState({
      persons:[
        {name:newName, age:"24"},
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
      {/* user bind method as opposed to arrow function */}
      <button onClick={()=>this.switchNameHandler('deo arrow function')}>Click Me</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'deo the bind way')}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'updated'))
  }
}

export default App;
