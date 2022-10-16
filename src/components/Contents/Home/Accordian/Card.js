import React from 'react'

const Card = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
  <div className="card-body">
    <div className='flex justify-between '>
<div>
    <h2 className="card-title"> W-14<span className=' pl-2 text-[#959298]'>Khilgaon-Bashabo</span> </h2>
</div>
    </div>
     
    <div className='relative'>

    <div className="radial-progress text-[#56CA00] relative top-5 left-[20px]" style={{"--value":89 ,"--size": "5.5rem"}}><span className="text-black text-xl"> 89%</span></div>  
    <div className="radial-progress text-[#9155FD] absolute left-0" style={{"--value":70,"--size": "8rem"}}></div>
    </div>
    
  </div>
</div>
  )
}

export default Card