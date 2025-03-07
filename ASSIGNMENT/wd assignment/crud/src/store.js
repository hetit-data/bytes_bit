import { configureStore } from "@reduxjs/toolkit";
import reducer from "./TodoSlice";
const store = configureStore({

    reducer:{
        todos:reducer
    }
})
export default store