import React from 'react';
import Person from './Person/Person'
const persons=(props)=>(props.persons.map(
        (person,id)=>{
          console.log(id)
          return <Person name={person.name} age={person.age} click={()=>props.click(person.id)} key={id} changed={(event)=>props.changed(event,person.id)}/>
        }
      )

)

export default persons;