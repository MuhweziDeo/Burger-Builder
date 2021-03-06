import React from 'react';
import Logo from '../../Layout/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer=(props)=>{
  let attachedClasses=[classes.SideDrawer,classes.Close]
  if (props.open){
    attachedClasses=[classes.SideDrawer, classes.Open]
  }
  console.log(attachedClasses);
  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Logo}>
          <Logo height="11%"/>
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
    </Aux>
  );
}

export default sideDrawer;
