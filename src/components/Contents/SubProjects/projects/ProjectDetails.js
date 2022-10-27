import React from 'react'
import signimg from '../../../../images/ok.png' 
import calenderimg from '../../../../images/calender.png' 
const ProjectDetails = () => {
  return (
    <div className="card rounded-md   bg-base-100 shadow">
    <div className="p-4">
      <h2 className="text-xl font-semibold text-[#544F5A] mb-2">SPAR Planning</h2>
      <div className='flex'>

      <div className="avatar">
  <div className="w-10 rounded">
    <img src={signimg} />
  </div>
</div>
      <div className=' pl-2'>
        <p className='text-[14px]'>SPAR Preparation Start Date</p>
        <div className='flex justify-between'>
        <p className='text-[12px] text-dimfont font-semibold'>Jul 21, 2022</p>
        <p className='text-[12px] text-def font-semibold'>Edit </p>
        
      </div>
            
        </div>
      </div>
      <div className='flex mt-2'>

      <div className="avatar">
  <div className="w-10 rounded">
    <img src={calenderimg} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
      <div className=' pl-2'>
        <p className='text-[14px]'>SPAR Preparation Start Date</p>
        <div className='flex justify-between'>
        <p className='text-[12px] text-dimfont font-semibold'>Jul 21, 2022</p>
        <p className='text-[12px] text-def font-semibold'>Edit </p>
        
      </div>
            
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectDetails