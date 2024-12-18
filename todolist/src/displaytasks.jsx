import './displaytasks.css';
import IndTask from "./indtask";
import { v4 as uuidv4 } from 'uuid';
export default function DisplayTasks({data,setdata}){
    return (
        <>
            <div className="dis-main">
                <p>TASKS TO DO : </p>
                <ul>
                {data.map((task)=>{
                    
                    return <li key={task.id}> <IndTask task={task} setdata={setdata}/></li>;
                })}
                </ul>
            </div>
        </>

    );
}