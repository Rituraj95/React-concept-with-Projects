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
    };
  return (
    <div>
        <input onChange={handleInputChange} type="text" />
        <button onClick={handleAddText}>add</button>
        <ul>
           {task.map((item,index)=>(
            <li key={index}>{item}</li>
           ))}
         
        </ul>
    </div>
  )
}
