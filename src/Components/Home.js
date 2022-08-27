import React, { useEffect, useState } from 'react'
import "../CSS/Home.css"
import { RealTimeDataBase } from "../Firebase/FirebaseConfig"
import { ref, onValue } from "firebase/database"
function Home() {
  const [email, setEmail] = useState("pavaneeshwar7077@gmail.com");
  const [phonenumber, setPhoneNumber] = useState("8008158841")
  useEffect(()=>{
    const databaseRef = ref(RealTimeDataBase, 'contacts/' + '3e20');
  onValue(databaseRef, (snapshot) => {
    const data = snapshot.val();
    setEmail(data.email);
    setPhoneNumber(data.phonenumber)
  });
  })



  const handleEdit = () => { }
  const handleDelete = () => { }


  return (
    <div className='home'>
      <div className='contact'>
        <p>{email}</p>
        <p>{phonenumber}</p>
        <button onClick={handleEdit}>Delete</button>
        <button onClick={handleDelete}>Edit</button>
      </div>
    </div>
  )
}

export default Home