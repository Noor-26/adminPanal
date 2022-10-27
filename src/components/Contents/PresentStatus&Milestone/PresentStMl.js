import React from 'react'
import phoneImg from '../../../images/phone.png'
import { Link } from 'react-router-dom'
import { CgPlayListCheck } from 'react-icons/cg'
import { BiFilterAlt } from 'react-icons/bi'
import PresentStatusTable from './StatusTable/PresentStatusTable'
const PresentStMl = () => {
  return (
    <div>
            <div className='flex justify-between py-2 px-4 '>
        <div className='flex'>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src={phoneImg} />  
  </div>
</div>
<div className='ml-2'>
    <p className="font-semibold capitalize text-[#165DC5]">present status and milestones</p>
    <p className='text-[14px] capitalize  text-[#959298]'>page instructions</p>
</div>
        </div>
        <Link to="/subprojectlist" ><button className=" bg-btn_def border-none hover:bg-btn_def py-2 px-8 uppercase text-white rounded text-[15px] flex items-center"> <span className='py-1 px-2 mr-2 rounded relative right-[5px] text-center mx-auto bg-white '><CgPlayListCheck className="text-[22px] bg-white mx-auto relative left-[2px] text-center text-btn_def  font-bold "/> </span> Sub Project list </button></Link>
        </div>

        <div className="card mt-8 card-compact border w-full bg-base-100 p-4 shadow rounded-md">
    <p className='flex items-center'><BiFilterAlt className='text-[18px] mr-2'/> <span> Filter</span></p> 
</div>
<PresentStatusTable/>
    </div>
  )
}

export default PresentStMl