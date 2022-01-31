import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle=makeStyles({
          header:{
              background: '#111111',

              
              

          },
          tab:{
              color:'#ffffff',
              marginRight:20,
              textDecoration:'none',
              fontSize:20
          }
})

// position="static"
const Navbar=()=>{
    const classes=useStyle();
    return(
        <AppBar className={classes.header}>
           <Toolbar>
              <NavLink className={classes.tab} to="./" exact>Home page</NavLink>
              <NavLink className={classes.tab} to="./user" exact>All User</NavLink>
              <NavLink className={classes.tab} to="./add" exact>Add user</NavLink>
           </Toolbar>
        </AppBar>
    );
}
export default Navbar;