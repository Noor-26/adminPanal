import React from 'react'

const ProjectCost = () => {
  return (
    <div className='bg-white'>
        <p className='font-semibold p-2'>Project Cost</p>
        <form  className='px-4 pb-4'>

        <div className="form-control  ">
          <label className="label">
    <span className="label-text">Name of the Project</span>
  </label>
  <label className="input-group border ">
 
    <input name="location"  placeholder=" Enter Name of the Project" className='focus:outline-none w-full p-2'/>
  </label>
</div>
<div className='flex justify-between w-full'>

<div className="form-control w-[40vw] ">
  <label className="label">
<span className="label-text">Name of the Project</span>
</label>
<label className="input-group border ">

<input name="location"  placeholder=" Enter Name of the Project" className='focus:outline-none rounded-md w-full p-2'/>
</label>
</div>

<div className="form-control w-[40vw] ">
  <label className="label">
<span className="label-text">Name of the Project</span>
</label>
<label className="input-group border ">

<input name="location"  placeholder=" Enter Name of the Project" className='focus:outline-none w-full p-2'/>
</label>
</div>
</div>
<div className='flex items-center justify-evenly w-[60vw] mt-2'>
<p className='pt-10 text-[15px]'>Implementation Period</p>
<div className="form-control  ">
          <label className="label">
    <span className="label-text ">Start Date</span>
  </label>
  <label className="input-group border ">
    <input type="date" placeholder="Enter here"  className="input  w-[20vw] focus:outline-none" />
  </label>
</div>
<div className="form-control  ">
          <label className="label">
    <span className="label-text">End Date</span>
  </label>
  <label className="input-group border ">
    <input type="date"  className="input  w-[20vw] focus:outline-none" />
  </label>
</div>

</div>
<div className="form-control  ">
          <label className="label">
    <span className="label-text">Remarks</span>
  </label>
  <label className="input-group border ">
 
    <input name="location"  placeholder="Enter Remarks" className='focus:outline-none w-full p-2'/>
  </label>
</div>
<button type='submit' className='bg-[#56CA00] text-white w-[254px] uppercase py-2 border-none rounded'>save</button>
        </form>
    </div>
  )
}

export default ProjectCost