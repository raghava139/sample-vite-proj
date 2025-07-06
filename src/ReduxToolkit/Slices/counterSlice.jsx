import { createSlice } from "@reduxjs/toolkit";
import { FetchtheData } from "../Api";


const CounterSlice = createSlice({
    name:"counterapp",
    initialState:{
        counter:0
    },
    reducers:{
        increment:(state)=>{
          state.counter  = state.counter+1
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(FetchtheData.pending,(state,action)=>{
            console.log(action.payload)
        })
        .addCase(FetchtheData.fulfilled,(state,action)=>{
            console.log(action.payload)
        })
        .addCase(FetchtheData.rejected,(state,action)=>{
            console.log(action.payload)
        })
    }
})

export const {increment} = CounterSlice.actions;
export default CounterSlice.reducer;