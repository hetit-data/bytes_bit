import React, { useState } from 'react';
import app from '../firebaseconfig';
import { getDatabase, ref, get ,remove} from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function Updateread() {
    const navigate = useNavigate();
    const [array, setArray] = useState([]);

    const display = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "nature/fruits");

        try {
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const myData = snapshot.val();
                const tempArray = Object.keys(myData).map((id) => ({
                    ...myData[id],
                    fruitid: id
                }));
                setArray(tempArray);
            } else {
                alert("No data found");
            }
        } catch (error) {
            alert("Error fetching data: " + error.message);
        }
    };
   const  deletefruit=async(fruitidpara)=>{
    const db = getDatabase(app);
    const dbRef = ref(db, "nature/fruits/"+fruitidpara);
    await remove(dbRef)
    window.location.reload()
   }
    return (
        <div>
            <button onClick={display}>Display Data</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>
                        {item.fruitname}: {item.fruitdefine} (ID: {item.fruitid})
                        <button onClick={() => navigate(`/updatewrite/${item.fruitid}`)}>
                            Update
                        </button>
                        <button onClick={() => deletefruit(item.fruitid)}>
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Updateread;
