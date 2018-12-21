 import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';
class App extends Component {
  // states are on only avialable in class components not function components
  constructor(props){
    super()
    console.log(super())
    console.log('constructor',props)
    this.state={
      persons:[
        {id:"1",name:"de", age:"24"},
        {id:"2",name:"deo", age:"27"},
        {id:"5",name:"aggrey", age:"34"},
  
      ],
      showPersons:false
    
    }
  }
  componentWillMount(){
    console.log('inside component will mount')
  }

  componentDidMount(){
    console.log('inside component did mount')
  }
  // state={
  //   persons:[
  //     {id:"1",name:"de", age:"24"},
  //     {id:"2",name:"deo", age:"27"},
  //     {id:"5",name:"aggrey", age:"34"},

  //   ],
  //   showPersons:false
  
  // }
 

  changeNameHandler=(event,id)=>{
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
    console.log('inside render')
    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          <Persons persons={this.state.persons} click={this.deletePersonHandler} changed={this.changeNameHandler}/>
       

        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'deo the bind way')}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.changeNameHandler} /> */}
        </div>
      )
    }
    return (
    <div className="App">
    <Cockpit appTitle={this.props.title} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonHandler} />{persons} 
     
    </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'updated'))
  }
}

export default App;
