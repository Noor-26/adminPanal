import React from 'react'
import { HiDotsVertical } from 'react-icons/hi';
import {AiFillPlusCircle} from 'react-icons/ai';
import {FaRegEye,FaRegChartBar} from 'react-icons/fa';
import {FiEdit3} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import {Link} from 'react-router-dom'
const PresentStatusTable = () => {
  return (
    <div>
    <div className="overflow-x-auto">
<table className="table w-full">
<thead>
  <tr >
    
    <th>SL</th>
    <th>Package  No</th>
    <th>Sub Project's Name</th>
    <th>Present Status & Milestone</th>
    
  </tr>
</thead>
<tbody>
  <tr className="hover">
  
    <th>1</th>
    <td className='text-[14px] w-[7rem]'>W-o7/LAL</td>
    <td className='w-[23rem] text-[13px]'>Improvement and Construction of Raj Narayan Dhar Road, Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road</td>
    <td className=' text-[14px]'>
      <ul className='list-disc'>
        <li>This SP completed officially on 30 Nov 2021. (Planned: 30-Nov-21)</li>
        <li>This SP completed Actually on 30 June 2022 & Bill paid to Contractor.. (Planned: 31-May-22)</li>
        <li>IFB on 5-Dec-2019 and Tender opening date on 02-Jan-2020 (Planned: )</li>
      </ul>
    </td>
  
  
  </tr>  
  <tr className="active">
  
  <th>2</th>
  <td className='text-[14px] w-[6rem]'>W-o7/LAL</td>
    <td className='w-[23rem] text-[13px]'>Improvement and Construction of Bashabo Sobuj Boloy (Balur Math)</td>
    <td className=' text-[14px]'>
    <ul className='list-disc'>
        <li>This SP completed officially on 30 Nov 2021. (Planned: 30-Nov-21)</li>
        <li>This SP completed Actually on 30 June 2022 & Bill paid to Contractor.. (Planned: 31-May-22)</li>
        <li>IFB on 5-Dec-2019 and Tender opening date on 02-Jan-2020 (Planned: )</li>
      </ul>
    </td>
  </tr>
 
  <tr className="hover">
 
  <th>3</th>
  <td className='text-[14px] w-[6rem]'>W-o7/LAL</td>
    <td className='w-[23rem] text-[13px]'>Improvement & Construction of Bhuian Math Area & other Works, Bhuian Math Area Road, Shahid Baki Road Footpath, Santipur High School to Mosque, South Mugda Goli and Narrow Street Around Bashabo Thana Area</td>
    <td className=' text-[14px]'>
    <ul className='list-disc'>
        <li>IFB on 01-Mar-2022 (Planned: )</li>
        <li>Contract signed on 08 June 2022. (Planned: 16-Jun-22)</li>
        <li>Start up meeting with Contractor held on 19 June 2022. (Planned: 17-Jun-22)</li>
        <li>Construction is going on ........... (Planned: )</li>
      </ul>
    </td>
  </tr>
</tbody>
</table>
</div>

</div>
  )
}

export default PresentStatusTable