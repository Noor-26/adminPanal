import React from 'react'

const ContactPriceTable = () => {
  return (
    <div>
          <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr >
        <th className='text-[#165DC5]'>contract price</th> 
        <th>BDT in Lac</th>
        <th>musd</th>
      </tr>
    </thead>
    <tbody>
      <tr className="">
        <th className='text-[14px]'>Original Contract Price</th>
        <td className='text-[14px]'>1,540.00</td>
        <td className='text-[14px]'>1.18</td>
       
      </tr>
      <tr className="">
      <th className='text-[14px]'>Estimated Cost (DPP)</th>
        <td className='text-[14px]'>1,540.00</td>
        <td className='text-[14px]'>1.18</td>
      </tr>
     
      <tr className="">
      <th className='text-[14px]'>Estimated Cost (DPP)</th>
        <td className='text-[14px]'>1,540.00</td>
        <td className='text-[14px]'>1.18</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ContactPriceTable