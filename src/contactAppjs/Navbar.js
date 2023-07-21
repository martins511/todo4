import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./contact.css"
const Navbar = () => {
  return (
    <div>
        <ul className="navcontainer">
          <div className="navcontact">Contact App</div>
          <li className='navrq'><Link to ="/rq">RQheros</Link></li>
          <li className="navhome"><Link to="/home" >Home</Link></li>
          <li className="navaddcontact"><Link to="/addcontact" >Add Contact</Link></li>
          <li className="navabout"><NavLink to="/about/name" >About</NavLink></li>
          <li className="searchbar"><input type="text" placeholder='Search Name...' /></li>
        </ul>
    </div>
  )
}

export default Navbar
