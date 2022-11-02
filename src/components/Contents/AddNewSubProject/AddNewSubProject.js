import React from 'react'

import phoneImg from '../../../images/phone.png'
import { GrSearch } from 'react-icons/gr'
import { CgPlayListCheck } from 'react-icons/cg'
import AddnewRevisedProject from './AddnewRevisedProject'
import SubProjectStatus from '../SubProjectStatus/SubProjectStatus'
import ReviesedModal from './Modals/ReviesedModal'
import NewstatusContent from './Modals/NewstatusContent'
import CreateNewStatusModal from './Modals/CreateNewStatusModal'

import usaIcon from '../../../images/usa_icon.png'
import bangIcon from '../../../images/bangladesh_icon.PNG'
import { Link } from 'react-router-dom'
const AddNewSubProject = () => {
  return (
    <div>
          <div className='flex justify-between py-2 px-4 mt-2'>
        <div className='flex'>
        <div className="avatar">
  <div className="w-[41px]  rounded-md py-1">
    <img src={phoneImg} />
  </div>
</div>
<div className='ml-2'>
    <p className="font-semibold capitalize text-[20px] text-[#165DC5]">Add New Sub-Project (SP)</p>
    <p className='text-[14px] capitalize text-[#959298]'>Most asked questions</p>
</div>
        </div>
        <Link to="/subprojectlist" >
        <button className=" bg-btn_def border-none hover:bg-btn_def py-2 pr-8 uppercase text-white rounded-md text-[15px] flex items-center"> <span className='py-1 px-2 mx-4 rounded relative  text-center  bg-white '><CgPlayListCheck className="text-[22px] bg-white mx-auto relative left-[2px] text-center text-btn_def  font-bold "/> </span> Sub Project list </button>
          </Link>
        
       
        </div>
        <div className='h-[75vh] overflow-y-scroll'>
        <div className="card  rounded-md mt-8 card-compact border w-full bg-base-100 p-4 shadow ">
          <p className='font-bold'>Sub Project Detail</p>
          <div className='flex justify-between'>
          <div className="form-control  ">
          <label className="label">
    <span className="label-text">Package Name</span>
  </label>
  <label className="input-group border ">
    <input type="text" placeholder=" Enter Package Name" className="input  w-[20vw] focus:outline-none" />
  </label>
</div>

              <div className="form-control">
              <label className="label">
    <span className="label-text">SP Name</span>
  </label>
  <label className="input-group border ">
  
    <input type="text" placeholder=" Enter Sub Project Name" className="input  w-[59vw] focus:outline-none" />
  </label>
</div>
          </div>
          <div className='flex justify-between mt-2'>
          <div className="form-control  ">
          <label className="label">
    <span className="label-text">SP Short Name</span>
  </label>
  <label className="input-group border ">
    <input type="text" placeholder="Enter SP Short Name" className="input  w-[20vw] focus:outline-none" />
  </label>
</div>
    <div className='flex items-center'>
          <div className="form-control mr-5 ">
          <label className="label">
    <span className="label-text">Ward No.</span>
  </label>
  <label className="input-group border ">
    <input type="text" placeholder="Enter ward no" className="input  w-[20vw] focus:outline-none" />
  </label>
</div>

              <div className="form-control                                                                                   ">
              <label className="label">
    <span className="label-text">Neighbourhood Area</span>
  </label>
  <label className="input-group border ">
  
    <input type="text" placeholder=" Enter Project Area" className="input  w-[26vw] focus:outline-none" />
  </label>
</div>
<div className="form-control border relative top-[18px] ">
<select className="select w-[150px] focus:outline-none">
  <option disabled selected>Select</option>
  <option>Homer</option>
  <option>Marge</option> 
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>
</div>
 
          </div>
    </div>
    <div className='flex items-center my-4'>
      <div>

    <label className="label">
    <span className="label-text">Sub Project Category / Type</span>
  </label>
<div className="form-control border ">
<select className="select w-80 focus:outline-none"> 
  <option disabled selected>Select Category</option>
  <option>Homer</option>
  <option>Marge</option> 
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>
</div>
      </div>
 
<div className="form-control ml-3">
  <label className="label">
    <span className="label-text">USD Rate</span>
  </label>
  <label className=" border items-center flex px-2 w-[300px] bg-white">
    <span className='bg-white w-[200px] overflow-hidden'>
    <div className="avatar pt-1">
  <div className="w-[35px] h-[25px] rounded">
    <img src={usaIcon} /> 
  </div>
    <span className="text-dimfont pl-2">USD 1 = </span>
</div>
  
</span>
    <input type="text" value={85} className="input focus:outline-none  border-none w-[5vw]" />
    <span className='bg-white w-[200px] overflow-hidden'>
    <div className="avatar">
    <span className="text-dimfont pr-3">BDT </span>
  <div className="w-[35px] h-[25px] rounded">
    <img src={bangIcon} /> 
  </div>
</div>
  
</span>
  </label>
</div>
          </div>
  
    <div className="form-control  ">
          <label className="label">
    <span className="label-text">Location Description</span>
  </label>
  <label className="input-group border ">
 
    <textarea name="location" rows="5" placeholder=" Enter Location Description" className='focus:outline-none w-full p-2'></textarea>
  </label>
</div>
</div>
        <div className="card rounded-md mt-4 card-compact border w-full bg-base-100 p-4 shadow ">
        <p className=' font-semibold'>Estimate Cost (BDT Lac)</p>
          <div className='flex  mt-2'>
          <div className="form-control">
  <label className="label">
    <span className="label-text">Estimated Cost (DPP)</span>
  </label>
  <label className="input-group">
    <span>BDT</span>
    <input type="text" placeholder=" Enter Estimated Cost (DPP)" className="input input-bordered focus:outline-none" />
  </label>
</div>
<div className="form-control ml-4">
  <label className="label">
    <span className="label-text">Estimated Cost (SPAR)</span>
  </label>
  <label className="input-group">
    <span>BDT</span>
    <input type="text" placeholder=" Enter Estimated Cost (SPAR)" className="input input-bordered focus:outline-none" />
  </label>
</div>
<div className="form-control ml-4">
  <label className="label">
    <span className="label-text">Estimated Cost (SBD)</span>
  </label>
  <label className="input-group">
    <span>BDT</span>
    <input type="text" placeholder=" Enter Estimated Cost (SBD)" className="input input-bordered focus:outline-none" />
  </label>
</div>
 
    </div>
</div>
  <AddnewRevisedProject/>
  <SubProjectStatus/>
<ReviesedModal/>
<CreateNewStatusModal/> 
<button  className=" bg-btn_def border-none hover:bg-btn_def py-2 px-10 my-3 uppercase text-white rounded text-[15px] flex items-center">save</button>
</div>
    </div>
  )
}

export default AddNewSubProject