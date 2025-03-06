import React, { useState } from 'react'

function Buttonclickevent() {
    const [text,settext]=useState("not click")

  return (
    <div>
      <p>{text}</p>
      <button onClick={()=>settext("click")}>click me</button>
    </div>
  )
}

export default Buttonclickevent
