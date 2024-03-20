import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";




export const store = configureStore({
    /* Reducer is predefined key which an object that can hold more than one reducer as key  */
    reducer: {
        counter:counterSlice 
    }
})