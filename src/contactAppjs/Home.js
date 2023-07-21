import React from 'react'
import "./contact.css"
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateItem,deleteItem } from './contactSlice'
const Home = () => {
  const dispatch = useDispatch()
  const add = useSelector((state)=>state.count.value)
  const [editedItem, setEditedItem] = useState({})
  const [inputId, setinputId] = useState(null)
  const [toggle,setToggle] =useState(false)
  
  const handleEditedItem = (e)=>{
    setEditedItem(user=>({...user,[e.target.name]:e.target.value}))
  }

  const handleToggle =()=>{
    setToggle(x=>!x)
  }

const editContact = (idx, item)=>{
  setinputId(idx);
  handleToggle();
  setEditedItem(item);

}

const updateContact =(editedItem)=>{
    dispatch(updateItem(editedItem))
    handleToggle();
  
}

  return (
    <div>
      <div className="homeheader">
        <ul className="list">
          <li className='item1'>No.</li>
          <li className='item2'>Name</li>
          <li className='item3'>Email</li>
          <li className='item4'>Contact</li>
          <li className='item5'>Status</li>
          <li className='item6'>Action</li>
        </ul>
      </div>
      <div className="homebody">
        {add?.map((item,idx) => (
          <div key={item.id} className="child">
            {toggle&& inputId===idx?<>
            <input type="text" name='name' value={editedItem.name} onChange={handleEditedItem}/>
            <input type="text" name='email' value={editedItem.email} onChange={handleEditedItem}/>
            <input type="text" name='contact' value={editedItem.contact} onChange={handleEditedItem}/>
            <input type="text" name='status' value={editedItem.status} onChange={handleEditedItem}/>
            <button onClick={()=>updateContact(editedItem)}>Save</button>
            </>:<>
          <p>{}</p>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.contact}</p>
          <p>{item.status}</p>
          </>}
          <div className='action'>
           {!toggle && <button className='edit' onClick={() => editContact(idx, item)}>Edit</button>}
           <button className='delete'onClick={()=>dispatch(deleteItem({id:item.id}))}>Delete</button>
           <button className='view'>View</button>
          </div>
         </div>
        ))}
        
        
      </div>
    </div>
  )
}

export default Home
