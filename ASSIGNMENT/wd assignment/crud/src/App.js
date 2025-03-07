// import React from 'react'
// // import { BrowserRouter, Route, Routes } from 'react-router-dom'
// // import Write from './components/Write'
// // import Read from './components/Read'
// // import Updateread from './components/Updateread'
// // import Updatewrite from './components/Updatewrite'
// import Crud from './Crud'
// import { adduser } from './UserSlice'
// import { useDispatch, useSelector } from 'react-redux'

// function App() {
// const disptach=useDispatch()
// const userlist=useSelector((state)=>state.users.value);

//   return (
//     <div>
//               {userList.map((user) => {
//           return (
//             <div>
//               <h1> {user.name}</h1>
//               <h1> {user.username}</h1>
// </div>
// </div>
//       {/* <Crud/> */}
//       {/* <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Write/>} />
// <Route path='/read' element={<Read/>}/>
// <Route path='/updateread' element={<Updateread/>}/>

// <Route path='/updatewrite/:firebaseid' element={<Updatewrite/>}/>
//       </Routes>
      
//       </BrowserRouter> */}
//     </div>
//   )
// }

import { useDispatch, useSelector } from "react-redux";
import { deleteuser, addtodo, updateuser } from "./TodoSlice";
import { useState } from "react";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [addtodoText, setAddTodo] = useState("");
  const [edit, setEdit] = useState(null);
  const [edittext, setEditText] = useState("");

  return (
    <div>
      <h1>To-Do List</h1>

      {/* Add Todo Section */}
      <div>
        <p>Add Todo</p>
        <input
          type="text"
          value={addtodoText}
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <button
          onClick={() => {
            if (addtodoText.trim() !== "") {
              dispatch(addtodo({ id: Date.now(), name: addtodoText }));
              setAddTodo("");
            }
          }}
        >
          Add
        </button>
      </div>

      {/* Display Todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => dispatch(deleteuser({ id: todo.id }))}>
              Delete
            </button>
            <button onClick={() => setEdit(todo.id)}>Edit</button>

            {/* Update Todo Section */}
            {edit === todo.id && (
              <div>
                <input
                  type="text"
                  value={edittext}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="Update task"
                />
                <button
                  onClick={() => {
                    if (edittext.trim() !== "") {
                      dispatch(updateuser({ id: todo.id, name: edittext }));
                      setEdit(null);
                      setEditText("");
                    }
                  }}
                >
                  Update
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
