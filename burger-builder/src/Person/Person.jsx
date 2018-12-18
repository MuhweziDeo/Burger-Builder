import React from 'react';
const person =(props) =>{
 return(
     <div>
     <p>Im a {props.name} and am {Math.floor(Math.random()*props.age)}</p>
     <p>{props.children}</p>
     </div>
 )
}
export default person;
// use function based components