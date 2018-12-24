import React from 'react';
import classes from './ToolBar.css';
import Logo from '../../Layout/Logo/Logo';
const toolbar=()=>(
  <header className={classes.ToolBar}>
    <div>MENU</div>
    <Logo/>
    <nav>
      ...
    </nav>
  </header>

);

export default toolbar;
