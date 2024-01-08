import React, { useState } from 'react'


export default function Form() {

    const [text,setText]=useState("");
    const [fullname,setFullname]=useState("");


    const handletextchange=(e)=>{
      setText(e.target.value);

    }
    const handleClick=()=>{
        setFullname(text)

    }


  return (
    <div>
        <h1>{fullname}</h1>
        <input onChange={handletextchange} type="text" value={text} />
        <button onClick={handleClick}>click me</button>
      
    </div>
  )
}
