 import React, { Component } from 'react';

import './App.css';
import Person from  '../components/Persons/Person/Person'
class App extends Component {
  // states are on only avialable in class components not function components
  state={
    persons:[
      {id:"1",name:"de", age:"24"},
      {id:"2",name:"deo", age:"27"},
      {id:"5",name:"aggrey", age:"34"},

    ],
    showPersons:false
  
  }
 

  changeNameHandler=(event,id)=>{
    // console.log('1222')
    // console.log(event.target)
    // find person
    // console.log(this.state.persons[0].name)
    const personIndex=this.state.persons.findIndex(p => {
      console.log(p.name)
      return p.id ===id;
    })
    // console.log(personIndex)
    // create copy of array not to change original
    const person=this.state.persons[personIndex];
    // new person
    // console.log(person)
    person.name=event.target.value;
    // current person
    const persons=[...this.state.persons]
    console.log('##############',persons)
    persons[personIndex]=person;

    this.setState({persons:persons}
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
            (person,id)=>{
              console.log(id)
              return <Person name={person.name} age={person.age} click={()=>this.deletePersonHandler(person.id)} key={id} changed={(event)=>this.changeNameHandler(event,person.id)}/>
            }
          )};

        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'deo the bind way')}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.changeNameHandler} /> */}
        </div>
      )
    }
    let classes=[];
    if (this.state.persons.length<=2){
      classes.push('red')

    }
    return (
    <div className="App">
      <h1 className={classes}>Hello</h1>
      {/* user bind method as opposed to arrow function */}
      <button style={style} onClick={this.togglePersonHandler}>Click Me</button>
      {persons}
    </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'updated'))
  }
}

export default App;
