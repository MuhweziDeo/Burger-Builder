import React,{Component} from 'react';
import './Person.css';

class Persons extends Component{
    render(){
        return(
            <div className='Person'>
            <p onClick={this.props.click}>Im a {this.props.name} and am {Math.floor(Math.random()*this.props.age)}</p>
             <p>{this.props.children}</p>
           <input type="text" value={this.props.name} onChange={this.props.changed}  />
             </div>
        )
    }
}
// const person =(props) =>{
//  return(
//      <div className='Person'>
//      <p onClick={props.click}>Im a {props.name} and am {Math.floor(Math.random()*props.age)}</p>
//      <p>{props.children}</p>
//      <input type="text" value={props.name} onChange={props.changed}  />
//      </div>
//  )
// }
export default Persons;
// use function based components