import React, { useState } from 'react'

export default function ToDo() {

    const [text,setText]=useState("");
    const[task,setTask]=useState([]);
    
    const handleInputChange=(e)=>{
        setText(e.target.value);

    }
    const handleAddText=()=>{
        if(text.trim()!==""){
            setTask([...task,text]);
            setText("")
        }
    }
    const handleDelete=(index)=>{
        const updatedTasks=task.filter((_,i)=>i !==index);
        setTask(updatedTasks);
    }
  return (
    <div>
        <input onChange={handleInputChange} type="text" />
        <button onClick={handleAddText}>add</button>
        <ul>
           {task.map((item,index)=>(
            <li key={index}>
                {item}
                <button onClick={()=>handleDelete(index)}>Delete</button>

            </li>
           ))}
         
        </ul>
    </div>
  )
}
