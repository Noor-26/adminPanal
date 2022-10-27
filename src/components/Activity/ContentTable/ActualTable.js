import React from 'react'

const ActualTable = () => {
  return (
    <div>
    <p className="mb-2 text-[15px] text-dimfont font-semibold">Actual</p>
          <div className="overflow-x-auto border shadow rounded-lg">
<table className="table w-full">
<thead>
  <tr >
    <th className='border-r border-[#F2F2F2] '>START</th> 
    <th>END</th>
    <th>DAYS</th>
  </tr>
</thead>
<tbody>
  <tr className="">
    <th className='text-[14px]'>July 1, 2022</th>
    <th className='text-[14px]'>July 10, 2022</th>
    <th className='text-[14px]'>10</th>
   
  </tr>

</tbody>
</table>
</div>
</div>
  )
}

export default ActualTable