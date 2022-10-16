import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react';
import Navber from '../Navber/Navber';

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="flex">
    <div
      className={` ${
        open ? "w-72" : "w-24 "
      } border-r border-2 h-screen p-5   relative duration-300`}
    >
       <img src="https://placeimg.com/192/192/people"  className={`absolute cursor-pointer -right-3 top-6 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}/>
      <div className="flex gap-x-4 items-center">
      <div className="avatar">
<div className="w-12 rounded-full">
  <img src="https://placeimg.com/192/192/people" />
</div>
</div>
        <h1
          className={` origin-left font-medium text-xl duration-200 uppercase ${
            !open && "scale-0"
          }`}
        >
          pmes
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-md font-semibold items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
          <div className="avatar">
<div className={`${ open ? "w-10" : "w-10"} duration-200  rounded`}>
  <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" />
</div>
</div>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className='w-full'>
      <Navber/> 
      <Outlet/>
    </div>
  </div>
  )
}

export default SideNav