import React, { useEffect } from 'react'
import axios from 'axios'

const AxiosExample = () => {
    useEffect(()=>{
    //   axios
    //   .get(`https://jsonplaceholder.typicode.com/users`,{
    //     params:{
    //         id:2
    //     }
    //   })  
    //   .then((res)=>console.log(res))
    //   .catch((err)=>console.log(err))


    // Post Request
    axios.post(`https://jsonplaceholder.typicode.com/posts`,{
        userId:1,
        title:"Some title",
        body:"some thing about somethings"

    })

      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))

    },[])

  return (
    <div>AxiosExample</div>
  )
}

export default AxiosExample;


// Make a network request
