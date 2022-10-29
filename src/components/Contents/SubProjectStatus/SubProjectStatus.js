import React from 'react'
import { HiPlusSm } from 'react-icons/hi'
import Stutustable from './Stutustable'

const SubProjectStatus = () => {
  return (
    <div>
             <div className="card rounded-md mt-4 card-compact border w-full bg-base-100  shadow ">
    <div className='flex justify-between items-center p-4'>
        <p className=' font-semibold'>Sub Project Status</p>
        <label htmlFor="status_model" className=" bg-btn_def border-none hover:bg-btn_def py-2 px-4 uppercase text-white rounded-md text-[15px] flex items-center">
        <span className='py-2 px-2 mr-2 rounded relative right-[5px] text-center mx-auto bg-white '><HiPlusSm className="text-[22px] bg-white mx-auto text-center text-btn_def  font-bold "/> </span>
 Create new status 
        </label>
       
    </div>
<Stutustable/>
</div>
    </div>
  )
}

export default SubProjectStatus