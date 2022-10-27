import React from 'react'
import { HiDotsVertical } from 'react-icons/hi';
import {Link} from 'react-router-dom'
const Card = () => {
  return (
    <div className="card detail_card duration-200   card-compact bg-base-100 shadow rounded-md">
  <div className="card-body  ">
    <div className='flex justify-between  px-4 items-center bg-[#F5F5F5] w-full'>
<div>
    <h2 className="card-title text-[#544F5A]"> W-14<span className=' pl-2 text-[#959298] font-medium'>Khilgaon-Bashabo</span> </h2>
</div>
<div className="dropdown dropdown-end ml-5">
  <label tabIndex={0} className="btn m-1 bg-[#F5F5F5] text-[#959298]  border-none hover:bg-[#F5F5F5] text-[20px]">  <HiDotsVertical/>   
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100   rounded-box w-52">
    <li><Link to={`/subprojectplanning`}>Sub Project Planing</Link></li>
    <li><Link to={`/subprojectplanning`}>Sub-Project Process</Link></li>
    <li><Link to={`/activityproject/1`}>Activity Timeline</Link></li>
    <li><Link to={`/subprojectplanning`}>Result of Framework Indicator Report</Link></li>
 
  </ul>
</div>

    </div>
     <div className='flex '>
    <div className='relative '>

    <div className="radial-progress text-[#56CA00] relative top-5 left-[20px]" style={{"--value":89 ,"--size": "7.5rem","--thickness": "0.5rem"}}><span className="text-[#544F5A] relative top-[5px] text-center font-semibold  text-2xl"> 89% <br />
    <p className='text-[12px] relative bottom-[8px] font-medium text-dimfont'>Cons. Progress</p>
    </span></div>  
    <div className="radial-progress text-def absolute left-[4px] top-[4px]" style={{"--value":70,"--size": "9.5rem", "--thickness": "0.5rem" }}></div>
    <div className=' absolute flex bottom-[-60px] left-[10px]'>
      <div className='mr-2 flex items-center'> <p className="w-[14px] rounded h-[14px] bg-[#56CA00]"></p> <span className='text-[13px] font-semibold text-dimfont pl-1'>Planning</span> </div>
      <div className='mr-2 flex items-center'> <p className="w-[14px] rounded h-[14px] bg-def"></p> <span className='text-[13px] pl-1 font-semibold text-dimfont'  >Construction</span> </div>
    </div> 
    </div>
    <div className=' pl-12 pr-2  w-full'>
    <div class="flex justify-evenly w-full">
                <div class="flex items-center "> 
                <p class="w-[20px] h-[20px] mr-2 rounded bg-[#D3BBFE]"></p>
                <p className='text-[#544f5a] font-semibold'>Construction End Date</p>
                </div>
                <p class="text-end  text-[#959298]">Dec 19, 2022</p>
                
                </div>
    <div class="flex justify-evenly mt-2 w-full">
                <div class="flex items-center "> 
                <p class="w-[20px] h-[20px] mr-2 rounded bg-[#EAF5EA]"></p>
                <p className='text-[#544f5a] font-semibold'>Construction End Date</p>
                </div>
                <p class="text-end  text-[#959298]">Dec 19, 2022</p>
                
                </div>
    </div>

     </div>
     <div class="flex justify-around mt-[65px] mb-3">
                  <div className='text-center '>
                    <p class="mb-1 text-semibold">Jan 19,2022</p>
                    <p class="text-[#959298] text-[14px]">Cons. Start Date</p>
                  </div>
                  <div className='text-center'>
                    <p class="mb-1 text-semibold">Dec 19,2022</p>
                    <p class="text-[#959298] text-[14px]">Cons. Deadline</p>
                  </div>
                  <div className='text-center'>
                    <p class="mb-1 text-semibold">47 Days</p>
                    <p class="text-[#959298] text-[14px]">Days Remaining</p>
                  </div>
                  <div className='text-center'>
                    <p class="mb-1 text-semibold">Nov 12, 2022</p>
                    <p class="text-[#959298] text-[14px]">Last Update</p>
                  </div>
                
                </div>
  </div>
</div>
  )
}

export default Card