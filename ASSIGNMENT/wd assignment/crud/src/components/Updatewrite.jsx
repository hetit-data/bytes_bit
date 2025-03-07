import React, { useEffect, useState } from 'react';
import app from "../firebaseconfig";
import { getDatabase, ref, set, get } from 'firebase/database';
import { useNavigate, useParams } from 'react-router-dom';

function Updatewrite() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const navigate = useNavigate();
    const { firebaseid } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, `nature/fruits/${firebaseid}`);

            try {
                const snapshot = await get(dbRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setInput1(data.fruitname || '');
                    setInput2(data.fruitdefine || '');
                } else {
                    alert("No data found");
                }
            } catch (error) {
                alert("Error fetching data: " + error.message);
            }
        };

        fetchData();
    }, [firebaseid]);

    const saveData = async () => {
        const db = getDatabase(app);
        const newDoc = ref(db, `nature/fruits/${firebaseid}`);

        try {
            await set(newDoc, {
                fruitname: input1,
                fruitdefine: input2
            });
            alert("Data updated successfully");
            navigate(-1); // Navigate back after update
        } catch (error) {
            alert("Error saving data: " + error.message);
        }
    };

    return (
        <div>
            <h1>Update Fruit</h1>
            <input
                type="text"
                value={input1}
                placeholder="Fruit Name"
                onChange={(e) => setInput1(e.target.value)}
            />
            <br />
            <input
                type="text"
                value={input2}
                placeholder="Fruit Definition"
                onChange={(e) => setInput2(e.target.value)}
            />
            <br />
            <button onClick={saveData}>Save</button>
        </div>
    );
}

export default Updatewrite;
