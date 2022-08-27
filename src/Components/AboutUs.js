import React, { useState } from 'react'
import {RealTimeDataBase} from "../Firebase/FirebaseConfig"
import {ref,set} from "firebase/database"
import "../CSS/AboutUs.css"
import {v4} from  "uuid"
import { useNavigate } from 'react-router-dom'
import {toast}  from "react-toastify"
function AboutUs() {
  const navigate = useNavigate();
  const [email,setemail] = useState(null)
  const [phonenumber,setphoneNumer] = useState(null)
  const  handleSubmit=()=>{
    if(email===null|| phonenumber===null)
    {
      console.log("toast")
      toast.error("Fill in the details");
    }
    else
    { 
      const Object = {email:email,phonenumber:phonenumber}
      console.log(Object)
      let userId = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }
      set(ref(RealTimeDataBase,"contacts/"+userId()),Object);
      navigate("/"); 
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