import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "../CSS/Navbar.css"
function Navbar() {
    const [activeTab,setActiveTab] = useState("home")
  return (
    <div className='navbar'>
                    <Link to="/" className={`${activeTab==="home"?"activeClass":"notactive"}`} onClick={()=>{setActiveTab("home")}}>Home</Link>
                    <Link to="/aboutus" className={`${activeTab==="aboutus"?"activeClass":"notactive"}`} onClick={()=>{setActiveTab("aboutus")}}>Add Contact</Link>
                    <Link to="/login" className={`${activeTab==="login"?"activeClass":"notactive"}`} onClick={()=>{setActiveTab("login")}}>Login</Link>
    </div>
  )
}

export default Navbar