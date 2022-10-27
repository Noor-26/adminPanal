import React, { useState, useRef } from "react"
import { GrSearch } from 'react-icons/gr';
import { IoIosArrowUp,IoIosArrowDown,IoIosArrowForward } from 'react-icons/io';
import {FaExpand} from 'react-icons/fa';
import {SlReload} from 'react-icons/sl';
import PlannedTable from "./ContentTable/PlannedTable";
import ActualTable from "./ContentTable/ActualTable";
import SlippageTable from "./ContentTable/SlippageTable";
const Activity = () => {
  const [isOpened, setOpened] = useState(true)
  const [height, setHeight] = useState("80vh")
  const HandleOpening = () => {
      setOpened(!isOpened)
      setHeight(!isOpened ? "80vh" : `0px`) 
    } 
  const [isOpened2, setOpened2] = useState(false) 
  const [height2, setHeight2] = useState("0px")
  const HandleOpening2 = () => {
      setOpened2(!isOpened2)
      setHeight2(isOpened2 ? "0px" : `45vh`) 
    } 
  const [isOpened3, setOpened3] = useState(false) 
  const [height3, setHeight3] = useState("0px")
  const HandleOpening3 = () => {
      setOpened3(!isOpened3)
      setHeight3(isOpened3 ? "0px" : `45vh`) 
    } 
    const [height4, setHeight4] = useState("0px")
    const [isOpened4, setOpened4] = useState(false) 
  const HandleOpening4 = () => {
      setOpened4(!isOpened4)
      setHeight4(isOpened4 ? "0px" : `45vh`) 
    } 
  const [isOpened5, setOpened5] = useState(false) 
  const [height5, setHeight5] = useState("0px")
  const HandleOpening5 = () => {
      setOpened5(!isOpened5)
      setHeight5(isOpened5 ? "0px" : `45vh`) 
    } 
  const [isOpened6, setOpened6] = useState(false) 
  const [height6, setHeight6] = useState("0px")
  const HandleOpening6 = () => {
      setOpened6(!isOpened6)
      setHeight6(isOpened6 ? "0px" : `45vh`) 
    } 
  const [isOpened7, setOpened7] = useState(false) 
  const [height7, setHeight7] = useState("0px")
  const HandleOpening7 = () => {
      setOpened7(!isOpened7)
      setHeight7(isOpened7 ? "0px" : `45vh`) 
    } 
  const [isOpened8, setOpened8] = useState(false) 
  const [height8, setHeight8] = useState("0px")
  const HandleOpening8 = () => {
      setOpened8(!isOpened8)
      setHeight8(isOpened8? "0px" : `45vh`) 
    } 
  const [isOpened9, setOpened9] = useState(false) 
  const [height9, setHeight9] = useState("0px")
  const HandleOpening9 = () => {
      setOpened9(!isOpened9)
      setHeight9(isOpened9 ? "0px" : `45vh`) 
    } 
  const [isOpened10, setOpened10] = useState(false) 
  const [height10, setHeight10] = useState("0px")
  const HandleOpening10 = () => {
      setOpened10(!isOpened10)
      setHeight10(isOpened10 ? "0px" : `45vh`) 
    } 
  const [isOpened11, setOpened11] = useState(false) 
  const [height11, setHeight11] = useState("0px")
  const HandleOpening11 = () => {
      setOpened11(!isOpened11)
      setHeight11(isOpened11 ? "0px" : `45vh`) 
    } 
  const [isOpened12, setOpened12] = useState(false) 
  const [height12, setHeight12] = useState("0px")
  const HandleOpening12 = () => {
      setOpened12(!isOpened12)
      setHeight12(isOpened12 ? "0px" : `45vh`) 
    } 
  const [isOpened13, setOpened13] = useState(false) 
  const [height13, setHeight13] = useState("0px")
  const HandleOpening13 = () => {
      setOpened13(!isOpened13)
      setHeight13(isOpened13 ? "0px" : `45vh`) 
    } 
  
  return (
    <div>
      <div  className="border  duration-200">
      <div onClick={HandleOpening} className="bg-[#F4F5FA] cursor-pointer p-4 flex  justify-between  ">
        <h4 className="font-semibold ">Activity 7: Sub Project Implementation</h4>
        
     
        {isOpened ?  <IoIosArrowDown /> :<IoIosArrowUp />}
      </div>
      <div
        style={{ height: height }}
        className=" overflow-y-auto bg-white transition-all duration-200 px-4"
      >
     
    
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening2} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  items-center ">
        <div>

        <h4 className="font-semibold text-def underline">Sub Activity 7.1: Pre-contruction Conference/ Workshop</h4>
        <p className='font-bold mt-2 text-[15px]'>Output 7.1 : <span className='font-medium '> Conference / Workshop Minutes</span></p>
        </div>
        {isOpened2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height2 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 pt-4 px-4'>
        
          <p className='font-bold text-[15px] underline'>Responsibility </p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening3} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.2: Site Handover to Contractor</h4>
        {isOpened3 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height3 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.2 : <span className='font-medium text-[#ff0000]'> Site possession letter to the Contractor</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening4} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.3: Safeguards: Meeting with Community (Prior to Construction)</h4>
        {isOpened4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height4 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.3 : <span className='font-medium '> Minutes of Community Meeting</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening5} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.4: Physical and Financial Monitoring: 20% Construction Completion </h4>
        {isOpened5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height5 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.4 : <span className='font-medium '> Report submitted to PIU/ WB</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening6} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.5: Safeguards: Community Monitoring and Feedback </h4>
        {isOpened6 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height6 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.5 : <span className='font-medium '> Reports to PIU/ WB</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening7} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.6: Physical and Financial Monitoring: 40% Construction Completion</h4>
        {isOpened7 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height7 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.6 : <span className='font-medium '>  Report submitted to PIU/ WB
</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening8} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.7: Safeguards: Community Monitoring and Feedback </h4>
        {isOpened8 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height8 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.7 : <span className='font-medium '>  Reports to PIU/ WB</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening9} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.8: Physical and Financial Monitoring: 60% Construction Completion</h4>
        {isOpened9 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height9 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.8 : <span className='font-medium '>  Report submitted to PIU/ WB</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening10} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.9: Safeguards: Community Monitoring and Feedback </h4>
        {isOpened10 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height10 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.9 : <span className='font-medium '>  Reports to PIU/ WB</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening11} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.10: Physical and Financial Monitoring: 60% Construction Completion </h4>
        {isOpened11 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height11 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.10 : <span className='font-medium '>  Report submitted to PIU/ WB</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening12} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.11: Safeguards: Community Monitoring and Feedback </h4>
        {isOpened12 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height12 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.11 : <span className='font-medium '>  Report submitted to PIU/ WB
</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
    <div  className="border mt-3  duration-200">
      <div onClick={HandleOpening13} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold text-def underline">Sub Activity 7.12: Physical and Financial Monitoring: 100% Construction Completion</h4>
        {isOpened13 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height13 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Output 7.12 : <span className='font-medium '> Report submitted to PIU/ WB</span></p>
          <p className='font-bold text-[15px]'>Responsibility : <span className='font-medium '>  name</span></p>
          <p className='font-bold text-[15px]'>Lead Actor : <span className='font-medium '>  jamil marmud
</span></p>
          <p className='font-bold text-[15px]'>Time Frame : <span className='font-medium '> 
</span></p>
<div className="grid grid-cols-3 gap-5 mt-5">
<PlannedTable/>
<ActualTable/>
<SlippageTable/>
</div>
       
        </div>
        </div>
      </div> 
   
   
        </div>
      </div> 

    </div>
  )
}

export default Activity