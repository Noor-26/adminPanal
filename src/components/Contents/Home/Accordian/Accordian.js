import React, { useState, useRef } from "react"
import { GrSearch } from 'react-icons/gr';
import { IoIosArrowForward,IoIosArrowDown } from 'react-icons/io';
import {FaExpand} from 'react-icons/fa';
import {SlReload} from 'react-icons/sl';
import Card from "./Card";
const Accordian = () => {
    const [isOpened, setOpened] = useState(true)
    const [height, setHeight] = useState("70vh")
    const HandleOpening = () => {
        setOpened(!isOpened)
        setHeight(!isOpened ? "70vh" : `0px`) 
      } 
    const [isOpened2, setOpened2] = useState(false) 
    const [height2, setHeight2] = useState("0px")
    const HandleOpening2 = () => {
        setOpened2(!isOpened2)
        setHeight2(!isOpened2 ? "0px" : `50vh`) 
      } 
  return (
    <div className="h-[75vh] overflow-y-scroll">

    <div  className="border  duration-200">
      <div onClick={HandleOpening} className="bg-[#F4F5FA] cursor-pointer p-4 flex  justify-between  ">
        <h4 className="font-semibold tracking-[0.15px] text-[20px] text-acc_head">Overview of Sub Projects</h4>
        <div className="grid grid-cols-3 gap-5">
          {/* <AiOutlineCompress/> if open */}
        <SlReload className="font-bold"/>
        <FaExpand/>
        {isOpened ?  <IoIosArrowDown /> :<IoIosArrowForward />}
        </div>
      </div>
      <div
        style={{ height: height }}
        className=" overflow-y-auto bg-white transition-all duration-200"
      >
        <div className="flex items-center pb-4 w-full pt-4 px-2">
        <div className="form-control border rounded-md ">
  <label className="input-group ">
    <span className="bg-white"><GrSearch className="
    text-[#959298] text-xl"/></span>
    <input type="text" placeholder="Search here" className="input  w-[43vw] focus:outline-none " />
  </label>
</div>
<div className="dropdown dropdown-end ml-5">
  <label tabIndex={0} className="btn m-1 bg-white text-[#959298]  border-[#959298] hover:bg-white">Filter by Status <IoIosArrowDown className=" font-bold ml-4 text-[18px]"/></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100   rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
<div className="dropdown dropdown-end ml-5">
  <label tabIndex={0} className="btn m-1 bg-white text-[#959298]  border-[#959298] hover:bg-white">Filter by Date <IoIosArrowDown className=" font-bold ml-4 text-[18px]"/></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100   rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 px-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening2} className="bg-[#F4F5FA] cursor-pointer p-4 flex  justify-between  ">
        <h4 className="font-semibold">Recent Update</h4>
        {isOpened2 ? <IoIosArrowForward /> : <IoIosArrowDown />}
      </div>
      <div
        style={{ height: height2 }}
        className=" overflow-y-auto  transition-all duration-200"
      >
        <div className="flex items-center pb-4 w-full pt-4 px-2">
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
        </div>
      </div> 
    </div>
  )
}

export default Accordian