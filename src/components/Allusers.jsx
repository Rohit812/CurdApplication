import { useEffect, useState } from "react";
import {Table,TableHead,TableRow,TableCell,TableBody,makeStyles, Button} from '@material-ui/core';
import { getUsers ,deleteUser} from "../services/api";
import { Link } from "react-router-dom";

const Allusers=()=>{
    const [users,setuser]=useState([]);

    const useStyle=makeStyles({
        table:{
            width:'90%',
            margin:'90px 0 0 40px'

        },
        thead:{
            '& > *':{
                background:'#000000',
                color:'#ffffff',
                fontSize:20

            }
        },
        trow:{
            '& > *':{
                fontSize:20,
                background:'#ffffff'

            }

        }
        
    })

    useEffect(()=>{
        getAllusers();
    },[]);
const getAllusers=async()=>{
    const response=await getUsers();
    //console.log(response.data);
    setuser(response.data);
}// close getAllusers

const deleteUserData=async(id)=>{
    await deleteUser(id);
    getAllusers();
}

const classes=useStyle();
    return(

        
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone no.</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               { 
                   users.map(user=>(
            <TableRow className={classes.trow}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.userName}</TableCell>
                   <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                        <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                    </TableCell>
                </TableRow>
                   ))}
            </TableBody>
        </Table>
    )
}

export default Allusers;