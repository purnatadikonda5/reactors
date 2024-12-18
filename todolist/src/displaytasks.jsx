import './displaytasks.css';
import IndTask from "./indtask";
export default function DisplayTasks({data}){
    return (
        <>
        <div className="dis-main">
            <p>TASKS TO DO : </p>
            {data.map((task)=>{
                {console.log("given-",task)}
                <IndTask task={task} />
            })}
        </div>
        </>
        
    )
}