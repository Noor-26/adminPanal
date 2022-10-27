import React from 'react'
import { HiPlusSm } from 'react-icons/hi'
import ReviesedModal from './Modals/ReviesedModal'
import RevisedProjectTable from './RevisedProjectTable'

const AddnewRevisedProject = () => {
  return (
    <div className=''>
              <div className="card rounded mt-4 card-compact border w-full bg-base-100 shadow ">
    <div className='flex justify-between items-center p-4'>
        <p className=' font-semibold'>Contract Price (BDT Lac)</p>
        <label htmlFor="revise_model" className=" bg-btn_def border-none hover:bg-btn_def py-2 px-8 uppercase cursor-pointer text-white rounded text-[15px] flex items-center"><span className='py-2 px-2 mr-2 rounded relative right-[5px] text-center mx-auto bg-white '><HiPlusSm className="text-[22px] bg-white mx-auto text-center text-btn_def  font-bold "/> </span>  Add new revised contact price
        </label>
    </div>
    <div className="form-control mb-4 ml-4">
  <label className="label">
    <span className="label-text">Contact Price</span>
  </label>
  <label className="input-group">
    <span>BDT</span>
    <input type="text" placeholder=" Enter Package Name" className="input input-bordered focus:outline-none" />
  </label>
</div>
<RevisedProjectTable/>
</div>
    </div>
  )
}

export default AddnewRevisedProject