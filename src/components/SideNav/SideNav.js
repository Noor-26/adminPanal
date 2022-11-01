import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react';
import Navber from '../Navber/Navber';

// importing icons from react icons
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { SlHome } from 'react-icons/sl';
import { FiActivity } from 'react-icons/fi';
import { BsInfoCircle } from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'; 
import { IoIosArrowForward,IoIosArrowDown } from 'react-icons/io'; 

// importing images 
import planImg from '../../images/plan.png'
import logo from '../../images/logo.png'
 import checkList from '../../images/checklist.png'
 import circle from '../../images/circle.png'
 import settings from '../../images/setting.png'

const SideNav = () => {
  const [open, setOpen] = useState(true);


  const [isOpened2, setOpened2] = useState(false) 
  const [height2, setHeight2] = useState("0px")
  const HandleOpening2 = () => {
      setOpened2(!isOpened2)
      setHeight2(isOpened2 ? "0px" : `28vh`) 
    } 

    const [isOpened3, setOpened3] = useState(false) 
    const [height3, setHeight3] = useState("0px")
    const HandleOpening3 = () => {
        setOpened3(!isOpened3)
        setHeight3(isOpened3 ? "0px" : `18vh`) 
      } 

    const [isOpened4, setOpened4] = useState(true) 
    const [height4, setHeight4] = useState("0px")
    const HandleOpening4 = () => {
        setOpened4(!isOpened4)
        setHeight4(isOpened4 ? "0px" : `24vh`) 
      } 
    const [isOpened5, setOpened5] = useState(false) 
    const [height5, setHeight5] = useState("0px")
    const HandleOpening5= () => {
        setOpened5(!isOpened5)
        setHeight5(isOpened5 ? "0px" : `18vh`) 
      } 
    const [isOpened6, setOpened6] = useState(false) 
    const [height6, setHeight6] = useState("0px")
    const HandleOpening6= () => {
        setOpened6(!isOpened6)
        setHeight6(isOpened6 ? "0px" : `26vh`) 
      } 
      useEffect(() => {
        if(isOpened6 === true){
          setHeight4("52vh")
        }else{
        setHeight4("0px")  
        }
      }, [isOpened6])
      const allClose= () => {
        setOpen(!open)
       
      
         setOpened2(false)
        setHeight2('0px')
      
        setOpened3(false)
        setHeight3('0px')

        setOpened4(false)
        setHeight4('0px')

        setOpened5(false)
        setHeight5('0px')
      }
      useEffect(() => {
        if(isOpened6 === false){
          setHeight4("20vh")
        }
      }, [isOpened6])
      
  return (
    <div className="flex">
    <div onMouseEnter={() => setOpen(true)}
      className={` ${
        open ? "w-64" : "w-24 "
      }  h-screen    relative duration-300`}
    >
      <div className={`absolute cursor-pointer -right-0 top-4 p-2 bg-white  rounded-full  rotate-180 ${!open && "hidden"} `}  onClick={allClose}>
        
      <MdOutlineDoubleArrow className={` text-[18px] ${!open && "hidden"}  `} />
      </div>
      <Link to="/">
      <div className="flex gap-x-4 items-center top-0 p-2 pb-[11px] bg-def ">
      <div className="avatar">
<div className="w-12 rounded-full">
  <img src={logo} />
</div>
</div>
        <h1
          className={` origin-left font-medium text-xl duration-200 uppercase main_head text-white ${
            !open && "scale-0"
          }`}
        >
          pmes
        </h1>
      </div>  
      </Link>

          {/* Sidenav routes */}
<div className='h-[80vh] sideNav_manu overflow-y-scroll'>
      <ul className="pt-6">
      
        <Link to="/">
          <li
             className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-md  text-nav_font items-center gap-x-4 
            `}
          >
<div className={`${ open ? "w-5" : "w-10"}  duration-200  rounded`}>
  <SlHome className={`relative ${open ? "left-[10px]" : "left-[20px]" } text-[20px] duration-500`}/>
</div>  
            <span className={`${!open && "hidden"} origin-left duration-200 relative top-[3px]`}>
              Dashboard
            </span>
          </li>
            </Link>
     <li className={`${!open && "hidden"} origin-left duration-200 text-[13px] my-3 text-center text-dimfont divider`}>SUB PROJECT MANAGEMENT</li>
     <li><div>
     
<div>
  <ul>
  <Link to="/subprojectplanning">
          <li
             className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-md text-nav_font items-center gap-x-4 
            `}
          >
<div className={`w-5  duration-200  rounded`}>
  
  <img src={planImg} className={`relative ${open ? "left-[10px]" : "left-[20px]" }  duration-500`} alt="" />   
</div>  
            <span className={`${!open && "hidden"} text-[15px] origin-left duration-200`}>
            Sub Project Planing
            </span>
          </li>
            </Link>

  <Link to="/subprojectlist">
          <li
             className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-md text-nav_font items-center gap-x-4 
            `}
          >
<div className={`w-5  duration-200  rounded`}>
 
  <img src={checkList} className={`relative ${open ? "left-[10px]" : "left-[20px]" }  duration-500`} alt="" />   
</div>  
            <span className={`${!open && "hidden"} text-[15px] origin-left duration-200`}>
            List of Sub Project
            </span>
          </li>
            </Link>
  <Link to="/activityproject">
          <li
             className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-md text-nav_font items-center gap-x-4 
            `}
          >
<div className={`${ open ? "w-5" : "w-10"}  duration-200  rounded`}>
  <FiActivity className={`relative ${open ? "left-[10px]" : "left-[20px]" } text-[20px] duration-500`}/>
</div>  
            <span className={`${!open && "hidden"} origin-left text-[15px] duration-200`}>
           Activity Timeline
            </span>
          </li>
            </Link>
  </ul>
</div>
</div></li>
     <li><div>

<div  className="  duration-200">
  <div onClick={HandleOpening2} className="bg-[#F4F5FA] cursor-pointer p-4 flex items-center  justify-between  ">
    <div className='flex items-center'>

    <HiOutlineArrowTrendingUp className=" mr-2 font-bold text-[20px]"/>
    <h4 className={`${!open && "hidden"} origin-left duration-200 text-nav_font`}>SP Progress</h4>
    </div>
    <div className={` ${!open && "hidden"}  text-end`}>
    
    {isOpened2 ? < IoIosArrowDown/> :  < IoIosArrowForward/>}
    </div>
  </div>
  <div 
    style={{ height: height2 }}
    className=" overflow-hidden my-2 transition-all duration-500"
  >
   <ul>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 pl-3 ml-2`}> <Link to="/sparprogresslist">SPAR Progress</Link> </li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/dedprogresslist"> DED Progress </Link></li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/sbdprogresslist">  SBD / BOQ  Progress </Link></li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}>Procurement Progress</li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px]  border-l-2 mt-2 pl-3 ml-2`}>Contract Progress</li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}>Constraction Progress</li>
   </ul>

    </div>
  </div> 

</div></li>
      </ul>
      <div className={`${!open && "hidden"} origin-left duration-200 text-[13px] my-3 text-center text-dimfont divider`}>REPORTS</div>
      <div  className="  duration-200">
  <div onClick={HandleOpening3} className="bg-[#F4F5FA] cursor-pointer p-4 flex items-center  justify-between  ">
    <div className='flex items-center'>

    <GoGraph className=" mr-2 font-bold text-[20px]"/>
    <h4 className={`${!open && "hidden"} origin-left duration-200 text-nav_font`}>SP Reports</h4>
    </div>
    <div className={` ${!open && "hidden"}  text-end`}>
    
    {isOpened3 ? < IoIosArrowDown/> :  <IoIosArrowForward />}
    </div>
  </div>
  <div 
    style={{ height: height3 }} 
    className=" overflow-hidden my-2 transition-all duration-500"
  >
   <ul>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] mt-2  border-l-2 pl-3 ml-2`}> <Link to="/presentstatus&milestone">Present Status & Milestone</Link> </li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2  pl-3 ml-2`}> <Link to="/sparprogresslist">SP Activities Status</Link> </li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/manualmeworksheet"> Integrated M & E Workplan </Link></li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/manualmeworksheet"> Other Reports</Link></li>
   
   </ul>

    </div>
  </div> 
      <div className={`${!open && "hidden"} origin-left duration-200 text-[13px] my-3 text-center text-dimfont divider`}>DCNUP Officials</div>
      <div  className="  duration-200">
  <div onClick={HandleOpening4} className="bg-[#F4F5FA] cursor-pointer p-4 flex items-center  justify-between  ">
    <div className='flex items-center'>
          <img src={circle} alt="" className='mr-2' />
    
    <h4 className={`${!open && "hidden"} origin-left duration-200 text-nav_font`}>DCNUP</h4>
    </div>
    <div className={` ${!open && "hidden"}  text-end`}>
    
    {isOpened4 ? < IoIosArrowDown/> :  <IoIosArrowForward />}
    </div>
  </div>
  <div 
    style={{ height: height4 }} 
    className=" overflow-hidden my-2 transition-all duration-500"
  >
   <ul>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] mt-2  border-l-2 pl-3 ml-2`}> <Link to="/sparprogresslist">All Personnals</Link> </li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2  pl-3 ml-2`}> <Link to="/sparprogresslist">Designation</Link> </li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/activity">List of Organizations </Link></li>

   
   </ul>
   <div  className="  duration-200">
  <div onClick={HandleOpening6} className="bg-[#F4F5FA] cursor-pointer p-4 flex items-center  justify-between  ">
    <div className='flex items-center'>
          <BsInfoCircle className='mx-2 text-[18px]'/>
    
    <h4 className={`${!open && "hidden"} origin-left duration-200 text-nav_font`}>DCNUP Info</h4>
    </div>
    <div className={` ${!open && "hidden"}  text-end`}>
    
    {isOpened6 ? < IoIosArrowDown/> :  <IoIosArrowForward />}
    </div>
  </div>
  <div 
    style={{ height: height6 }} 
    className=" overflow-hidden mr-2 my-2 transition-all duration-500"
  >
   <ul>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px]   border-l-2 pl-3 ml-2`}> <Link to="/projectinfo">Project Info</Link> </li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2  pl-3 ml-2`}> <Link to="/projectcost">Project Cost</Link> </li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/activity">ADP Allocation </Link></li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/activity">Component </Link></li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/activity">Component Monthly
Target </Link></li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/activity">Component Monthly Progress </Link></li>

   
   </ul>

    </div>
  </div> 
    </div>
  </div> 
      <div className={`${!open && "hidden"} origin-left duration-200 text-[13px] my-3 text-center text-dimfont divider`}>SETTINGS</div>
      <div  className="  duration-200">
  <div onClick={HandleOpening5} className="bg-[#F4F5FA] cursor-pointer p-4 flex items-center  justify-between  ">
    <div className='flex items-center'>

    <img src={settings} alt="" className='mr-2' />

    <h4 className={`${!open && "hidden"} origin-left duration-200 text-nav_font`}>Settings</h4>
    </div>
    <div className={` ${!open && "hidden"}  text-end`}>
    
    {isOpened5 ? < IoIosArrowDown/> :  <IoIosArrowForward />}
    </div>
  </div>
  <div 
    style={{ height: height5 }} 
    className=" overflow-hidden my-2 transition-all duration-500"
  >
   <ul>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] mt-2  border-l-2 pl-3 ml-2`}> <Link to="/sparprogresslist">Roles & Permission</Link> </li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2  pl-3 ml-2`}> <Link to="/sparprogresslist">Lookup Data Types</Link> </li>
    <li className={`${!open && "hidden"} origin-left duration-200 text-[14px] border-l-2 mt-2 pl-3 ml-2`}> <Link to="/activity">List of Organizations </Link></li>

   
   </ul>

    </div>
  </div> 
  </div>
  
    </div>
    <div className='w-full '>
      <Navber/> 
      <Outlet/>
    </div>
  </div>
  )
}

export default SideNav