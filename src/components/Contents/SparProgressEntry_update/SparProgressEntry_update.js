import React from 'react'
import SparProgressDetails from './SparProgressDetails/SparProgressDetails'
import phoneImg from '../../../images/phone.png'
import { Link } from 'react-router-dom'
import { CgPlayListCheck } from 'react-icons/cg'

const SparProgressEntry_update = () => {
  return (
    <div className=''>
        <div className='flex justify-between py-2 px-4 mt-2'>
        <div className='flex'>
        <div className="avatar">
  <div className="w-[41px]  rounded-md py-1">
    <img src={phoneImg} />
  </div>
</div>
<div className='ml-2'>
    <p className="font-semibold capitalize text-[20px] text-[#165DC5]">SPAR Progress Entry / Update</p>
    <p className='text-[14px] capitalize text-[#959298]'>Most asked questions</p>
</div>
        </div>
        <Link to="/sparprogresslist" >
        <button className=" bg-btn_def border-none hover:bg-btn_def py-2 pr-8 uppercase text-white rounded-md text-[15px] flex items-center"> <span className='py-1 px-2 mx-4 rounded relative  text-center  bg-white '><CgPlayListCheck className="text-[22px] bg-white mx-auto relative left-[2px] text-center text-btn_def  font-bold "/> </span> SPAR Progress list</button>
          </Link>
         
        </div>
        <div className='h-[75vh] overflow-y-scroll'>

        <div className="card rounded-md mt-8 card-compact border w-full bg-base-100 p-4 shadow"> 
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
    <div className='pl-3'>
        <p className='text-[#535353] font-semibold'>Sub-project name</p>
        <p className='text-[14px] w-[95%]'>Improvement  and Construction of Raj Narayan Dhar Road, Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road (RND, KRU, SASN Roads)</p>
    </div>
  
</div>
<div className='flex items-center mt-3'>
    <div className="avatar">
<div className="w-12 rounded">
<img src={phoneImg} />
</div>
</div>
<div className='ml-2'>
<p className="font-semibold  text-[#165DC5]">SPAR Progress</p>
</div>
    </div>
<div className="grid mt-5 md:grid-cols-1 lg:grid-cols-3  gap-5">
<SparProgressDetails/>
<SparProgressDetails/>
<SparProgressDetails/>

</div>
</div>
</div>
    </div>
  )
}

export default SparProgressEntry_update