import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContaxtProvider'

const Button = ({disabled, onClick, btnText}) => {

    const {theme}= useContext(AppContext)
  return (
    <button disabled={disabled}
     style={{
        background:theme=== "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        padding:"7px",
        border: theme === "dark" ? "1px solid white" : "1px solid red ",
        margin:"10px",
        cursor : !disabled ? "pointer" : "not-allowed",
    }}
    onClick={onClick}
    >

    {btnText}</button>
  )
}

export default Button