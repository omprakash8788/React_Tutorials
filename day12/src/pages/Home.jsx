import React, { useContext } from 'react'
import { AuthContext } from '../contaxt/AuthContextProvider'

const Home = () => {
  const {isAuth ,logout} = useContext(AuthContext)
  return (
    <div>
     <h1>Home Page</h1>
     <button disabled={!isAuth} onClick={logout}>Logout</button>
    </div>
  )
}

export default Home