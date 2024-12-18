import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import './indtask.css'
export default function IndTask({task}){
    {console.log("given--",task);}
    return(
        <>
        <div className='indtask'>
        <p>{task}</p>
        <Button variant='outlined' color='error' startIcon={<DeleteIcon />}>Delete</Button>
        <Button variant='outlined' color='success' startIcon={<DoneIcon />}>Done</Button>
        </div>
        </>
    );
}