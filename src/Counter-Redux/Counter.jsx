import { useDispatch, useSelector } from "react-redux";
import { increment } from "../ReduxToolkit/Slices/counterSlice";
import { useEffect } from "react";
import { FetchtheData } from "../ReduxToolkit/Api";

function CounterApp(){
    const dispatch = useDispatch();
    const getThestore = useSelector((state)=>state.CounterStore)
    const incrementFunction =()=>{
        console.log('clicked');
        dispatch(increment())
    }   
    useEffect(()=>{
        dispatch(FetchtheData());
    },[])
    return(
        <div>
            <div>{getThestore.counter}</div>
            <button type="button" onClick={incrementFunction}>increment</button>
        </div>
    )
}

export default CounterApp; 