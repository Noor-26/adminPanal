import React from 'react'

const RevisedModalContent = () => {
  return (
    <div className='p-5'>
        <form action="">

              <div className='flex justify-between'>
          <div className="form-control  ">
          <label className="label">
    <span className="label-text">Revised Contact Price</span>
  </label>
  <label className="input-group border rounded-lg">
    <input type="text" placeholder="Package Name" className="input rounded  w-[25vw] focus:outline-none" />
  </label>
</div>

              <div className="form-control                                                                                   ">
              <label className="label">
    <span className="label-text">Ref ID</span>
  </label>
  <label className="input-group border rounded-lg">
  
    <input type="text" placeholder="Package Name" className="input   w-[45vw] focus:outline-none" />
  </label>
</div>
          </div>
          <div className="form-control                                                                                   ">
              <label className="label">
    <span className="label-text">Reason of revised</span>
  </label>
  <label className="input-group border ">
  
    <input type="text" placeholder="Package Name" className="input  w-[55vw] focus:outline-none" />
  </label>
</div>
<div className='my-4'>

<input type="file" />
</div>
<button type='submit' className='bg-[#56CA00] text-white w-[254px] uppercase py-2 border-none rounded'>save</button>
        </form>
    </div>

  )
}

export default RevisedModalContent