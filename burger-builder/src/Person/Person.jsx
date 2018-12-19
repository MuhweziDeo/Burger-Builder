import React from 'react';
const person =(props) =>{
 return(
     <div>
     <p onClick={props.click}>Im a {props.name} and am {Math.floor(Math.random()*props.age)}</p>
     <p>{props.children}</p>
     <input type="text" value={props.name} onChange={props.changed}  />
     </div>
 )
}
export default person;
// use function based components