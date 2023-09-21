import React, { useContext } from 'react'
import { AuthContext } from '../contaxt/AuthContextProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {


    const {isAuth}=useContext(AuthContext)


    if(!isAuth){
        // this is condition for if the user is auth or not , if user not auth it render on login page
if(!isAuth){
    return <Navigate to="/login"/>
   }
    }


  return children
}

export default PrivateRoute