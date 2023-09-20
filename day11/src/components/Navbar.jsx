import React from 'react'
import { Link, NavLink } from 'react-router-dom'


// 2 ways to link pages 
const links=[
    {path:"/", title: "Home"},
    {path:"/about", title: "About"},
    {path:"/contact", title: "Contact"},
    {path:"/login", title: "Login"},
    {path:"/user", title: "User"},


]

const Navbar = () => {
    const defaultLinkStyle = { textDecoration:"none", color:"blue", fontSize:"20px"};
    const activeLinkStyle = { textDecoration:"none", color:"red", fontSize:"20px"}
  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    }}
  >
    {
        links.map(({path, title})=>(
            <NavLink style={({isActive})=>{
                return isActive ? activeLinkStyle : defaultLinkStyle;
            }} key={path} to={path}>
            {title}
            </NavLink>
            // <Link key={path} to={path}>{title}</Link>
        ))
    }
   
   {/* 1 ways to link page */}
    {/* <Link style={{textDecoration:"none"}} to="/">Home</Link>
    <Link style={{textDecoration:"none"}} to="/about">About</Link>
    <Link style={{textDecoration:"none"}} to="/contact">Contact</Link>
    <Link style={{textDecoration:"none"}} to="/login">Login</Link>
    <Link style={{textDecoration:"none"}} to="/user">User</Link> */}
  </div>
  )
}

export default Navbar