
import React, { createContext, useState } from 'react'

//1. create
export const AuthContext=createContext()


//2. provider
const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(true)   // flase

    const login=()=>{
        setIsAuth(true)
    }
    const logout=()=>{
        setIsAuth(false)
    }
  return (
    <AuthContext.Provider value={{isAuth, login, logout}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider