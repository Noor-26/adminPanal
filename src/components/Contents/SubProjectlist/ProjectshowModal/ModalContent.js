import React from 'react'
import ContactPriceTable from './ContactPriceTable'
import EstematedCostTable from './EstematedCostTable'
import SubProjectStatus from './SubProjectStatus'

const ModalContent = () => {
  return (
    <div className='px-2 py-4'>
        <div className='mb-4 px-4'>
          <p className='font-bold text-[15px]'>Package Name : <span className='font-medium '>w-14</span></p>
          <p className='font-bold text-[15px]'>SP Name : <span className='font-medium '> Improvement and Construction of Raj Narayan Dhar Road, Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road</span></p>
          <p className='font-bold text-[15px]'>SP Short Name : <span className='font-medium '> RND, KRU, SASN Roads</span></p>
          <p className='font-bold text-[15px]'>Neighborhood Area : <span className='font-medium '> Lalbagh</span></p>
          <p className='font-bold text-[15px]'>Location Description : <span className='font-medium '> Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road</span></p>
          <p className='font-bold text-[15px]'>USD  Rate : <span className='font-medium '> 102 BDT</span></p>
        </div>
        <div className='flex justify-around mt-4'>
          <EstematedCostTable/>
          <ContactPriceTable/>
        </div>
        <p className='text-[#165DC5] font-bold pl-2 mb-2'>Sub Project Status</p>
        <SubProjectStatus/>
    </div>
  )
}

export default ModalContent