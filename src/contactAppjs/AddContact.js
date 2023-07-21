
import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from './contactSlice'
const AddContact = () => {
  
  const dispatch = useDispatch();

  const [user , setUser] = useState({})

  const handleChange =(e)=>{
    setUser(user=>({...user, [e.target.name]:e.target.value}))
  }
  
  const handleAddItems =()=>{
    dispatch(addContact({id:nanoid(),name:user.name,email:user.email,contact:user.contact,status:user.status}))
    setUser({name:"",email:"",contact:"",status:""})
  }
  return (
    <div>
      <div className="addContactContainer">
        <label >Name</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />
        <label >Email</label>
        <input type="text" name="email" value={user.email} onChange={handleChange}/>
        <label >Contact</label>
        <input type="text" name="contact" value={user.contact} onChange={handleChange}/>
        <label >Status</label>
        <input type="text" name="status" value={user.status} onChange={handleChange}/>
        <button onClick={handleAddItems}>Save</button>
      </div>
    </div>
  )
}

export default AddContact
