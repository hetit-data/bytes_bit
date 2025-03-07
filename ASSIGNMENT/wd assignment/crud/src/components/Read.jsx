import React, { useState } from 'react'
import app from '../firebaseconfig'
import { getDatabase, ref, get } from 'firebase/database'
function Read() {
    const [array, setarray] = useState([])
    const display = async () => {
        const db = getDatabase(app);
        const dbref = ref(db, "nature/fruits")
        const getting = await get(dbref)
        if (getting.exists()) {
            setarray(Object.values(getting.val()))
        }
        else {
            alert("error")
        }
    }
    return (
        <div>
            <button onClick={display}>data display</button>
            <ul>

{

    array.map((item,index)=>(
        <li key={index}>
            {item.fruitname}: {item.fruitdefine}
        </li>
    ))
}
            </ul>
        </div>
    )
}

export default Read
