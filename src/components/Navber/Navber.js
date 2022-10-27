import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
import dummyImg from '../../images/dummy.png'
const Navber = () => { 
  const [open, setopen] = useState(false)
  return ( 
    <div className=''>
    <div className="navbar bg-def  w-full overflow-hidden">
    <div className="navbar-start ">
     
      <a className="text-white main_head capitalize pl-3 md:text-xl lg:text-2xl">project monitoring & evaluation system</a>
    </div>
   
    <div className="navbar-end">
      
   

      
      <button className="btn btn-ghost btn-circle">
      <MdSearch className="text-white text-xl"/>
      </button>
      <button className="btn btn-ghost btn-circle">
      <FaRegBell className="text-white "/>
      </button>
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={dummyImg} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box z-40 w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Navber