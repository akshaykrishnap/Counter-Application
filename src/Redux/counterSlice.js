import { createSlice } from "@reduxjs/toolkit";



export const counterSlice =createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    /* actions are created inside reducers key */
    reducers:{
        /* function to increment value */
        increment:(state,action)=>{
             state.value+=action.payload  /* funtion with argument-- value will be obtained */
        },

        /* function to decrement value */
        decrement:(state,action)=>{
            state.value-=action.payload
        },

        /* function to reset value */
        reset:(state)=>{
            state.value=0
        }
    }
})

/* actions are used by componets */
export const {increment, decrement, reset} = counterSlice.actions


/* reduce is required for store to change the value of state */
export default counterSlice.reducer