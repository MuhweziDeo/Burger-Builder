import React from 'react';
const person =(props) =>{
 return <p>Im a {props.name} and am {Math.floor(Math.random()*props.age)}</p>
}
export default person;
// use function based components