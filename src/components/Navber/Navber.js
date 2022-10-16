import React from 'react'
import { MdSearch } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
const Navber = () => { 
  return ( 
    <div className="navbar bg-def">
    <div className="navbar-start">
     
      <a className="text-white capitalize pl-3 text-2xl">project monitoring & evaluation system</a>
    </div>
   
    <div className="navbar-end">
      <button className="btn bg-def hover:bg-white duration-500 border-white ">
    About us
      </button>
      <button className="btn bg-def hover:bg-white duration-500 border-white ml-2">
      Abbrivation
      </button>
      <button className="btn btn-ghost btn-circle">
      <MdSearch className="text-white text-xl"/>
      </button>
      <button className="btn btn-ghost btn-circle">
      <FaRegBell className="text-white "/>
      </button>
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
  )
}

export default Navber