import React from 'react'
import ProjectDetails from './projects/ProjectDetails'
import phoneImg from '../../../images/phone.png'
import { Link } from 'react-router-dom'
import { CgPlayListCheck } from 'react-icons/cg'
const SubProjectPlanning = () => {
  return (
    <div className=''>
        <div className='flex justify-between py-2 mt-2 px-4 '>
        <div className='flex'>
        <div className="avatar ">
  <div className="w-[41px] rounded-md py-1">
    <img src={phoneImg} />
  </div>
</div>
<div className='ml-2'>
    <p className="font-semibold capitalize text-[20px] text-[#165DC5]">sub project planing</p>
    <p className='text-[14px] capitalize  text-[#959298]'>page instructions</p>
</div>
        </div>
          <Link to="/subprojectlist" ><button className=" bg-btn_def border-none hover:bg-btn_def py-2 px-8 uppercase text-white rounded text-[15px] flex items-center"> <span className='py-1 px-2 mr-2 rounded relative right-[5px] text-center mx-auto bg-white '><CgPlayListCheck className="text-[22px] bg-white mx-auto relative left-[2px] text-center text-btn_def  font-bold "/> </span> Sub Project list </button></Link>
        </div>

        <div className="card mt-8 card-compact border w-full bg-base-100 p-4 shadow rounded-md">
  <div className=" flex items-center">
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text text-[#484848] capitalize">package no</span>
   
  </label>
  <select className="select select-bordered">
    <option disabled selected>W-07/LAL</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  
</div>
   
    <div className='pl-5'>
        <p className='text-[#535353] font-semibold'>Sub-project name</p>
        <p className='text-[14px] w-[95%]'>Improvement  and Construction of Raj Narayan Dhar Road, Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road (RND, KRU, SASN Roads)</p>
    </div>
  </div>
</div>
<div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
<ProjectDetails/>
<ProjectDetails/>
<ProjectDetails/>
<ProjectDetails/>
</div>

    </div>
  )
}

export default SubProjectPlanning