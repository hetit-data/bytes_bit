import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const TodoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" }
  ],
  reducers: {

    addtodo: (state, action) => {
        state.push(action.payload);
      },
      
    deleteuser: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateuser:(state,action)=>{
    state.map((todo)=>{
        if(todo.id===action.payload.id){
            todo.name =action.payload.name
        }
    })
    }

  }
});

export const { deleteuser,addtodo ,updateuser} = TodoSlice.actions;
export default TodoSlice.reducer;
