import React from 'react'
import signimg from '../../../../images/ok.png' 
import calenderimg from '../../../../images/calender.png' 
import lateimg from '../../../../images/late_icon.png' 
const SparProgressDetails = () => {
  return (
    <div className="card rounded-md  bg-base-100 shadow">
    <div className="p-4">
      <h2 className="text-xl font-semibold text-btn_def mb-2">Milestone</h2>
      <div className='flex'>

      <div className="avatar">
  <div className="w-10 rounded">
    <img src={signimg} />
  </div>
</div>
      <div className='w-full pl-2'>
        <p className='text-[14px]'>SPAR Submission to PIU (Milestone)</p>
        <div className='flex justify-between'>
        <p className='text-[12px] text-dimfont '>Jul 21, 2022</p>
        <p className='text-[12px] text-def '>Edit </p>
        
      </div>
            
        </div>
      </div>
      <div className='flex mt-2'>

<div className="avatar">
<div className="w-10 rounded">
<img src={lateimg} alt="Tailwind-CSS-Avatar-component" />
</div>
</div>
<div className=' pl-2 '>
  <p className='text-[14px]'>7 Days Late</p>
  <div className='flex justify-between'>
  <p className='text-[12px] text-dimfont '>Spar Submition to PIU - Jul 14, 2022  </p>
 
  
</div>
</div>
</div>
<p className='text-[14px] font-semibold'>Reason of late: </p>
      <p className='text-[14px]'>Improvement  and Construction of Raj Narayan Dhar Road, Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road (RND, KRU, SASN Roads)</p>
      <div className='flex mt-2'>

      <div className="avatar">
  <div className="w-10 rounded">
    <img src={calenderimg} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
      <div className=' pl-2 w-full'>
        <p className='text-[14px]'>SPAR Feedback from PIU</p>
        <div className='flex justify-between'>
        <p className='text-[12px] text-dimfont '>Jul 21, 2022</p>
        <p className='text-[12px] text-def '>Edit </p>
        
      </div>
            
        </div>
      </div>
      <div className='flex mt-2 w-full'>

      <div className="avatar">
  <div className="w-10 rounded">
    <img src={calenderimg} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
      <div className=' pl-2 w-full'>
        <p className='text-[14px]'>SPAR Re-submitted to PIU</p>
        <div className='flex justify-between'>
        <p className='text-[12px] text-dimfont '>Jul 21, 2022</p>
        <p className='text-[12px] text-def '>Edit </p>
        
      </div>
            
        </div>
      </div>
     
        </div>
  </div>
  )
}

export default SparProgressDetails