import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchtheData = createAsyncThunk(
    'users_data',
    async(_,{rejectwithValue})=> {
        try{
            const response = await fetch("https://jsonplaceholder.tpicode.com/users");
            const responseData = await response.json();
            return responseData;
        }
        catch(error){
            return rejectwithValue(error)
        }   
    }
)

