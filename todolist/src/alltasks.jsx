import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import AddTaskForm from './addtaskform';
import { useState } from 'react';
import DisplayTasks from './displaytasks';
export default function Alltasks(){
    let [data,setdata]= useState([
        {
            task:"wakeUp",
            isdone:false,
            id:uuidv4()
        }
    ]);
    return(
        <>
            <AddTaskForm  setdata={setdata}></AddTaskForm>
            <DisplayTasks data={data} setdata={setdata}></DisplayTasks>
            <br />
            
         </>
        );
}