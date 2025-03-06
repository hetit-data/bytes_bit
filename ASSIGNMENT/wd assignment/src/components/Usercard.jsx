import React from 'react'

function Usercard({name,age,location}) {
  return (
    <div>
        <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  )
}

export default Usercard
