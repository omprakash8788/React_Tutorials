import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contaxt/AuthContextProvider'

const Login = () => {
  const {isAuth,login}= useContext(AuthContext)
  return (
    <div>
      <h1>Login Page</h1>
      <button disabled={isAuth} onClick={login}>Login</button>
    </div>
  )
}

export default Login