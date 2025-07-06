export const WithLogger = (WrappedComponent)=>{
    console.log(WrappedComponent)
    return(props)=>{
        return <WrappedComponent {...props}/>
    }
}