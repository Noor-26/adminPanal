import React from 'react'
import NewstatusContent from './NewstatusContent'

const CreateNewStatusModal = () => {
  return (
    <div>
    <div>
     <input type="checkbox" id="status_model" className="modal-toggle" />
<div className="modal">
<div className="modal-box p-0 relative w-11/12 max-w-5xl">
 <div className='bg-[#EDF0FDE0] p-3 '>

 <p className=' text-center text-[#165DC5] text-[18px] font-bold'>Create New Sub Project Status</p>
 <label htmlFor="status_model" className="btn btn-sm bg-white text-[#404040] border-none shadow hover:bg-white absolute right-2 top-2">✕</label>
 </div>
<NewstatusContent/>
</div>
</div>
 </div>
 </div>

  )
}

export default CreateNewStatusModal