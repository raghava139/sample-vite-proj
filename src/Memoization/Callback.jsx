import React, { useCallback, useState } from "react";

const Child =React.memo(({onClick}) => {
    console.log('child-behaviour')
    return <button onClick={onClick}>Click me</button>
})


const Parent = () => {
    const [count, setCount] = useState(0);
    const handleClicked=useCallback(()=>{
        console.log('button-parent-child')
    },[])
    // console.log('parent-trigger')
    return (
        <div>
            ParentCallback
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <Child onClick={handleClicked} />
        </div>
    )
}
export default Parent;