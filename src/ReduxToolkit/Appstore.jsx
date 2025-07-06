import  { configureStore} from "@reduxjs/toolkit";
import CounterSlice from './Slices/counterSlice';


const store = configureStore({
    reducer:{
        CounterStore:CounterSlice
    }
})
export default store