import React, { useState } from 'react'

function Voting() {
    const [age, setAge] = useState("");

  return (
    <div>
   <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>{age >= 18 ? "You are eligible to vote." : "You are not eligible to vote."}</p>
   
      
    </div>
  )
}

export default Voting
