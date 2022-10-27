import React from 'react'

const NewstatusContent = () => {
  return (
    <div className='p-4'>
         <form action="">
<div className="form-control                                                                                   ">
<label className="label">
<span className="label-text">Sub Project Status</span>
</label>
<label className="input-group border ">

<input type="text" placeholder="Sub Project Name" className="input  w-[55vw] focus:outline-none" />
</label>
</div>

<div className='flex '>
<div className="form-control  ">
<label className="label">
<span className="label-text">Planed Date</span>
</label>
<label className="input-group border ">
<input type="text" placeholder="Package Name" className="input  w-[20vw] focus:outline-none" />
</label>
</div>

<div className="form-control ml-4  ">
<label className="label">
<span className="label-text">Entry Date</span>
</label>
<label className="input-group border ">

<input type="text" placeholder="Sub Project Name" className="input  w-[20vw] focus:outline-none" />
</label>
</div>
</div>
<div className='my-5'>

<input type="file" />
</div>
<button type='submit' className='bg-[#56CA00] text-white w-[254px] uppercase py-2 border-none rounded'>save</button>
</form>
    </div>
  )
}

export default NewstatusContent