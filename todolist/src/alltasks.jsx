import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import AddTaskForm from './addtaskform';
import { useState } from 'react';
import DisplayTasks from './displaytasks';
export default function Alltasks(){
    let [data,setdata]= useState(["wakeUp"]);
    return(
        <>
            <AddTaskForm data={data} setdata={setdata}></AddTaskForm>
            <DisplayTasks data={data}></DisplayTasks>
            <br />
            
         </>
        );
}