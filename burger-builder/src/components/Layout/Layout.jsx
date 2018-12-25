import React,{Component}from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
  state={
    showSideDrawer:false
  }
  sideDrawerClosedHandler=()=>{
    this.setState({showSideDrawer:false});
  }
  SideDrawerToggleHandler=()=>{
    this.setState((prevState)=>{
    return {showSideDrawer:!prevState.showSideDrawer};
  });
  }
  render(){
    return(
      <Aux>
        <ToolBar drawerToggleClicked={this.SideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
          <div>Toolbar,sidebar,Backdrop</div>
          <main className={classes.Content}>
              {this.props.children}
          </main>
      </Aux>
    )
  }}

export default Layout;
