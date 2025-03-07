import React, { useState } from 'react'
import app from "../firebaseconfig"
import { getDatabase, ref, set, push } from 'firebase/database'
function Write() {
    const [input1, setinput1] = useState()
    const [input2, setinput2] = useState()

    const savedata = async () => {
        const db = getDatabase(app)
        const newdoc = push(ref(db, "nature/fruits"));
        set(newdoc, {
            fruitname: input1,
            fruitdefine: input2
        }).then(() => {
            alert("data saved")
        }).catch((error) => {
            alert(error)
        })
    }
    return (

        <div>
            <h1>write</h1>
            <input type="text" value={input1} placeholder='value 1' onChange={(e) => setinput1(e.target.value)} />
            <br />
            <input type="text" value={input2} placeholder='value 2' onChange={(e) => setinput2(e.target.value)} />
            <button onClick={savedata}>save</button>
        </div>
    )
}

export default Write
