import React from 'react'
import ModalContent from './ModalContent'

const ProjectShowModal = () => {
  return (
    <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box rounded p-0 relative w-11/12 max-w-5xl">
    <div className='bg-[#EDF0FDE0] p-3 '>

    <p className=' text-center text-[#165DC5] text-[18px] font-bold'>Sub-Project Information</p>
    <label htmlFor="my-modal-3" className="btn btn-sm bg-white text-[#404040] border-none shadow hover:bg-white absolute right-2 top-2">✕</label>
    </div>
   <ModalContent/>
  </div>
</div>
    </div>
  )
}

export default ProjectShowModal