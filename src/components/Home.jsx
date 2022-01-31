import {Box,makeStyles, Typography} from '@material-ui/core';
import img1 from '../assests/images/Login.jpg';
import img2 from '../assests/images/tea.jpg';

const useStyle=makeStyles({
          image:{
               width:'50%',
               height:'50%'
          },
          component:{
              margin:70
          }
})

const Home=()=>{
    const classes=useStyle();
    return(
        <Box className={classes.component}>
        <Typography variant="h4" style={{marginBottom:40}}>My home page</Typography>
            <Box style={{display:'flex'}}>
                <img className={classes.image} src={img1}/>
                <img className={classes.image} src={img2}/>
            </Box>
        </Box>
    )
}
export default Home;
