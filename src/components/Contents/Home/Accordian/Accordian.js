import React, { useState, useRef } from "react"
import { GrSearch } from 'react-icons/gr';
import { IoIosArrowUp,IoIosArrowDown } from 'react-icons/io';
import Card from "./Card";
const Accordian = () => {
    const [isOpened, setOpened] = useState(false)
    const [height, setHeight] = useState("0px")
    const contentElement = useRef(null)
    const HandleOpening = () => {
        setOpened(!isOpened)
        setHeight(!isOpened ? `60vh` : "0px")
      }
  return (
    <div  className="border cursor-pointer duration-200">
      <div onClick={HandleOpening} className="bg-[ #F4F5FA] p-4 flex  justify-between  ">
        <h4 className="font-semibold">Overview of Sub Projects</h4>
        {isOpened ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div
        style={{ height: height }}
        className="bg-gray-200 overflow-hidden transition-all duration-200"
      >
        <div className="flex w-full pt-4 px-2">
        <div className="form-control border ">
  <label className="input-group ">
    <span className="bg-white"><GrSearch className="
    text-[#959298] text-xl"/></span>
    <input type="text" placeholder="Search here" className="input  w-[50vw] focus:outline-none" />
  </label>
</div>
<div className="dropdown dropdown-end ml-5">
  <label tabIndex={0} className="btn m-1 bg-white text-[#959298]  border-[#959298] hover:bg-white">Filter by Status</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100   rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<div className="dropdown dropdown-end ml-5">
  <label tabIndex={0} className="btn m-1 bg-white text-[#959298]  border-[#959298] hover:bg-white">Filter by Status</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100   rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
        </div>
        <div className="grid grid-cols-2 gap-5 px-4">
        <Card/>
        <Card/>

        </div>
        
      </div> 
    </div>
  )
}

export default Accordian