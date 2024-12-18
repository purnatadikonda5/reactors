import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import './indtask.css'
import { ClassNames } from '@emotion/react';
import { createRef } from 'react';

export default function IndTask({task,setdata}){
    let handledelete =()=>{
        console.log(task);
        setdata((data)=>{
            return data.filter((tsk)=>tsk.id!=task.id);
        });
    }
    let handledone =(event)=>{
        setdata((data)=>{
            return data.map((tsk)=>{
                if(tsk.id==task.id){
                    task.isdone=!task.isdone;
                    return task;
                }
                else{
                    return tsk;
                }
            })
        })
    }
    return(
        <>
       <div className='indtask'>
       <p>{task.task.toString().toUpperCase()}</p> &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='outlined' color='error' startIcon={<DeleteIcon />} onClick={handledelete}>Delete</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant={task.isdone?"contained":"outlined"} color='success' onClick={handledone} startIcon={<DoneIcon />}>{task.isdone?<i>Not Done</i>:<i>Done</i>}</Button>
        
       </div>
        </>
    );
}