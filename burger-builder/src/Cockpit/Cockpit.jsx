import React from 'react';
import './cockpit.css'
const cockpit=(props)=>{
    const style={
        color:'red'
      }
    let classes=[];
    if (props.persons.length<=2){
      classes.push('red')

    }
    return (
        <div>
            <h1 className={classes}>Hello</h1>
        <button style={style} onClick={props.clicked}>Click Me</button>
        </div>
        
    )

};

export default cockpit