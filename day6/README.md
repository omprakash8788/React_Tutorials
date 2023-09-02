## Day-7 

## Topic - React hooks lifecycle ..
Mount(Birth)
Update(Life)
Unmount(Death)

useEffect(()=>{
    // called only once
},[])

useEffect(()=>{
    // called everytime
})

useEffect(()=>{
    //It will be called before unmounting 
    return()=>{
        //I will be called while unmounting 
    }
},[]);

useEffect(()=>{
    // pass dependencies
},[dependencies])

