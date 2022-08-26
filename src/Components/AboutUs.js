import React, { useState } from 'react'
import "../CSS/AboutUs.css"
import {toast}  from "react-toastify"
function AboutUs() {
  const [email,setemail] = useState(null)
  const [phonenumber,setphoneNumer] = useState(null)
  const handleSubmit=()=>{
    if(email=""|| !phonenumber)
    {
      console.log("toast")
      toast.error("Fill in the details");
    }
        console.log(email,phonenumber)

  }
  return (
    <div className='aboutus'>
              <input type="email" className='addContactInput' placeholder='E-mail'
                  onChange={(e)=>{
                        setemail(e.target.value);
                  }}
              
              ></input>
              <input type="number" className='addContactInput' placeholder='8008158841'
                onChange={(e)=>{
                     setphoneNumer(e.target.value)
                }}
              
              ></input>
              <button type='submit'  className='addContactButton' onClick={handleSubmit}>Save</button> 
                
              

    </div>
  )
}

export default AboutUs  