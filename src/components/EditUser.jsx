import {makeStyles,FormGroup, FormControl, InputLabel, Input, Button, Typography} from '@material-ui/core'
import { useEffect, useState } from 'react';
import { editUser, getUsers } from "../services/api";
import { useHistory, useParams} from 'react-router-dom';

const useStyle=makeStyles({
    contaner:{
        '&>*':{    
            width:'50%',
            margin: '20px 0 0 25%'
        }
    }
})
const initialvalue={
    name:'',
    userName:'',
    email:'',
    phone:''
}



const EditUser=()=>{
    const[user,setUser]=useState(initialvalue);
    const{name,userName,email,phone}=user;
    // console.log(user);
    const classes=useStyle();
    const history=useHistory();
    const {id}=useParams();

useEffect(()=>{
    loadUserData();
},[]);
const loadUserData=async()=>{
    const response=await getUsers(id);
    setUser(response.data);
}

    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        //console.log(e.target.value);
        //console.log(user);
    }
   

    const editUserDetails=async()=>{
        await editUser(id,user);
        history.push('/user');
    
    }
    
    return(
        <FormGroup className={classes.contaner} style={{marginTop:'90px'}}>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='userName' value={userName}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone no</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone}/>
        </FormControl>
        <Button variant="contained" color="primary" onClick={()=>editUserDetails()}>Edit User</Button>
        </FormGroup>
    )
}
export default EditUser;