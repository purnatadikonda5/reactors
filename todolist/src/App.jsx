import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alltasks from './alltasks';
import { useState } from 'react';
function App() {
  let [data,setdata]= useState(["Wake-up"]);
  return (
    <>
    <Alltasks></Alltasks>
    {/* <h1>hai</h1>
    <Button variant="contained" color='secondary' size='large' startIcon={<DeleteIcon />}>Delete</Button>
    <br /><br />
    <Button variant="outlined" color='success' size='large' endIcon={<SendIcon />}>Send</Button>
     */}
    </>
  );
}

export default App;
