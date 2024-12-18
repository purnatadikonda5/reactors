import Button from '@mui/material/Button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';

export default function AddTaskForm({data,setdata}){
    let [newtask,setnewtask]=useState("");
    let handleChange =(event)=>{
        setnewtask(event.target.value);
        console.log(event.target.value);
    }
    let handleClick=(event)=>{
        if(newtask== "" )return;
        setdata((curr)=> [...curr,newtask]);
        setnewtask("");
    }
    return(
        <>
            <form action="">
            <TextField id="outlined-basic" name='newtask' value={newtask} size='normal' onChange={handleChange} label="Enter the task" color='success' variant="outlined"  />
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <Button variant="contained" color='success' size='large' onClick={handleClick}>Add Tasks</Button>

            </form>
            
         </>
        );
}