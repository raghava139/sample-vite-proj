import React, { useState } from 'react'
import { useMemo } from 'react';


const expensiveCalculation = (num) => {
    console.log("Expensive Calculation Running...");
    return num * 10;
  };
const MemoFun = () => {
    const [count,setCount] =useState(0);
    const [num,setNum] =useState(5);

    const memoValue = useMemo(()=>expensiveCalculation(num),[num]);
    // const memoValue = expensiveCalculation(num)
    // console.log('memoValue',memoValue)
  return (
    <>
        <div>MemoFun{memoValue}</div>
        <div>count{count}</div>
        <button type='button'onClick={()=>setCount(count+1)}>countincrement</button>
        <button type='button' onClick={()=>setNum(num+1)}>numberincrement</button>
    </>
  )
}

export default MemoFun