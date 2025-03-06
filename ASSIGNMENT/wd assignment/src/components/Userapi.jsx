import React, { useEffect, useState } from 'react'

function Userapi() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
    
            const data = await response.json();
            setUsers(data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsers();
      }, []);
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
    
  return (
    <div>
    <h2>User List</h2>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
  )
}

export default Userapi
