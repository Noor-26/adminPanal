import React from 'react'
import phoneImg from '../../../images/phone.png'
import dollarImg from '../../../images/dollar.png'
import reportsImg from '../../../images/reports.png'
import ProcessingImg from '../../../images/processing.png'
import { Link } from 'react-router-dom'
import { CgPlayListCheck } from 'react-icons/cg'
import ResultsOfFrameWI from './ResultOfFrameworkIndicator/ResultsOfFrameWI'
import Activity from '../../Activity/Activity'
const Manualworksheet = () => {
  return (
    <div>
         
            <div className='flex justify-between py-2 px-4 mt-2 '>
        <div className='flex'>
        <div className="avatar">
  <div className="w-[41px] rounded-md py-1">
    <img src={phoneImg} />
  </div>
</div>
<div className='ml-2'>
    <p className="font-semibold capitalize text-[20px] text-[#165DC5]">DCUNP Manual M & E Worksheet</p>
    <p className='text-[14px] capitalize text-[#959298]'>page instructions</p>
</div>
        </div>
        <Link to="/subprojectlist" >
        <button className=" bg-btn_def border-none hover:bg-btn_def py-2 pr-8 uppercase text-white rounded-md text-[15px] flex items-center"> <span className='py-1 px-2 mx-4 rounded relative  text-center  bg-white '><CgPlayListCheck className="text-[22px] bg-white mx-auto relative left-[2px] text-center text-btn_def  font-bold "/> </span> Sub Project list </button>
          </Link>
     
       
        </div>
   <div className='h-[75vh] overflow-y-scroll'>

        <div className="card rounded-md mt-8 card-compact border w-full bg-base-100 p-4 shadow">
  <div className=" flex items-center">
  <div className="form-control w-full max-w-[15rem] ">
  <label className="label">
    <span className="label-text text-[#484848] capitalize">package ID</span>
   
  </label>
  <select className="select select-bordered focus:outline-none">
    <option disabled selected>W-07/LA</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  
</div>
  <div className="form-control w-full max-w-[15rem] ml-5 ">
  <label className="label">
    <span className="label-text text-[#484848] capitalize">Sub-Project Type</span>
   
  </label>
  <select className="select select-bordered focus:outline-none">
    <option disabled selected>W-07/LA</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  
</div>
   
    <div className='pl-5'>
        <p className=' text-[14px] text-dimfont '>Sub-project name</p>
        <p className='text-[14px] w-[95%]'>Improvement  and Construction of Raj Narayan Dhar Road, Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road (RND, KRU, SASN Roads)</p>
    </div>
  </div>
</div>
<div className=' mt-5'>
<div className='flex'>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src={dollarImg} />
  </div>
</div>
<div className='ml-2 '>
    <p className=" text-[20px] capitalize text-nav_font">Cost</p>
    <p className='text-[14px] capitalize  text-[#959298]'>In Lac BDT</p>
</div>
        </div>
<div className=' bg-white rounded mt-2 shadow'>
<div className='flex justify-around py-2'>

<div> 
<p className='text-[14px] text-dimfont'>SPAR Cost</p>
<p>24,500</p>
</div>
<div>
<p className='text-[14px] text-dimfont'>SDB Cost</p>
<p>12,37363</p>
</div>
<div>
<p className='text-[14px] text-dimfont'>Contracted Cost</p>
<p>1,00,5445</p>
</div>
<div>
<p className='text-[14px] text-dimfont'>Completed Cost</p>
<p>327717881</p>
</div>

</div>
</div>
</div>


<div className=' mt-5'>
<div className='flex items-center'>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src={reportsImg} />
  </div>
</div>
<div className='ml-2 '>
    <p className="font-medium text-[20px] capitalize text-nav_font"> part 1: Result of Framework Indicator</p>
</div>
        </div>
<ResultsOfFrameWI/>
</div>

<div className=' mt-5'>
<div className='flex items-center'>
        <div className="avatar">
  <div className="w-12 rounded">
    <img src={ProcessingImg} />
  </div>
</div>
<div className='ml-2 '>
    <p className="font-medium text-[20px] capitalize text-nav_font">Part 2: Sub Project Processing</p>
</div>
        </div>
<Activity/> 
</div>


</div>

    </div>
  )
}

export default Manualworksheet