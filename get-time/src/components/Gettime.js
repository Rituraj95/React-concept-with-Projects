import React, { useState } from 'react'

export default function Gettime() {
    let newTime=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(newTime);

    const updateTime=()=>{
        newTime=new Date().toLocaleTimeString();
        setCtime(newTime);

    };

  return (
    <div>
        <h1>{ctime}</h1>
        <button onClick={updateTime}>Get time</button>

      
    </div>
  )
}
