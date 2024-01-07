import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount]=useState(0);

    

    const increament=()=>{
        setCount(count+1);
    
     

    }
    const decreament=()=>{
        setCount(count-1);

    }




  return (
    <div>
      <h1>Counter App</h1>
      <p>Count :{count} </p>
 
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decreaament</button>
    </div>
  )
}
