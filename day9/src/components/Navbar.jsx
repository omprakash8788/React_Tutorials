import React, { useContext } from 'react'
import { AppContext } from '../context/AppContaxtProvider';
import { AuthContext } from '../context/AuthContextProvider';
import Button from './Button';

const Navbar = () => {
    // consuming context -3 
    const {theme} = useContext(AppContext)
    const {isAuth, login, logout} = useContext(AuthContext)

  return (
    <div style={{
        border: theme === "dark" ? "1px solid white" : "1px solid black",
        margin:0,
        display:"flex",
        justifyContent:"space-evenly"

    }}>
        <h2>Company Logo</h2>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <p>User Authenticated : {isAuth ? "yes":"No"} </p>
            <Button disabled={isAuth}  onClick={login}  btnText="Login"/>
            <Button disabled={!isAuth}  onClick={logout}  btnText="Logout"/>

        </div>
    </div>
  )
}

export default Navbar