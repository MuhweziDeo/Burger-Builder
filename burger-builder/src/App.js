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

    ],
    showPersons:false
  
  }
 

  changeNameHandler=(event)=>{
    console.log('1222')
    console.log(event.target)
    this.setState({
      persons:[
        {name:'dee', age:"24"},
        {name: 'deo',age:"27"},
        {name:event.target.value, age:"34"},
  
      ]
    }
    
    )
  };
  deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons;
    // this points to original state but not changing the value bad practise
    // const persons=this.state.persons.slice();
    // copies array from original state and assigns it to persons
    // or
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})

  };
  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    console.log(doesShow);
    this.setState({showPersons:!doesShow})

  };
  render() {
    const style={
      color:'red'
    }
    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map(
            (person,index)=>{
              console.log(index)
              return <Person name={person.name} age={person.age} click={()=>this.deletePersonHandler(index)}/>
            }
          )};

        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'deo the bind way')}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.changeNameHandler} /> */}
        </div>
      )
    }
    return (
    <div className="App">
      <h1>Hello</h1>
      {/* user bind method as opposed to arrow function */}
      <button style={style} onClick={this.togglePersonHandler}>Click Me</button>
      {persons}
    </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'updated'))
  }
}

export default App;
