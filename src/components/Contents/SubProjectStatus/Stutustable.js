import React from 'react'
import { HiDotsVertical } from 'react-icons/hi';
import {AiFillPlusCircle} from 'react-icons/ai';
import {FaRegEye,FaRegChartBar} from 'react-icons/fa';
import {FiEdit3} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import {Link} from 'react-router-dom'
const Stutustable = () => {
  return (
    <div>
            <div className="overflow-x-auto ">
  <table className="table w-full">
    <thead>
      <tr >
       
        <th></th>
        <th>sun project status</th>
        <th>planned date</th>
        <th>entry date</th>
        <th>marked as milestone</th>
        
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover">
      
        <th>1</th>
        <td className='text-[14px]'>This SP completed officially on 30 Nov 2021. </td>
        <td className='text-[14px]'>Nov 30, 2022</td>
        <td className='text-[14px]'>Nov 30, 2022</td>
        <td className='text-[14px]'><input type="checkbox" checked className="checkbox checkbox-sm" /> </td>
        <td >
        <div className="dropdown dropdown-end ml-5 bg-transparent">
  <label tabIndex={0} className=" btn bg-transparent hover:bg-transparent text-[#959298]  border-none  text-[20px] ">  <HiDotsVertical/>   
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100   rounded-box w-52">
    <li><p className='text-[14px] capitalize'><FaRegEye className="text-dimfont text-[20px] "/>view</p></li>
    <li><p className='text-[14px] capitalize'><FiEdit3 className="text-dimfont text-[20px] "/>Edit Info</p></li>
    <li><p className='text-[14px] capitalize'><MdDelete className="text-dimfont text-[20px] "/>Delete</p></li>
    <li><p className='text-[14px] capitalize'><FaRegChartBar className="text-dimfont text-[20px] "/>Sub-Project Planing</p></li>
 
  </ul>
</div>
        </td>
      
      </tr>
      <tr className="active">
      <th>2</th>
      <td className='text-[14px]'>This SP completed officially on 30 Nov 2021. </td>
        <td className='text-[14px]'>Nov 30, 2022</td>
        <td className='text-[14px]'>Nov 30, 2022</td>
        <td className='text-[14px]'><input type="checkbox" checked className="checkbox checkbox-sm" /> </td>
        <td >
        <div className="dropdown dropdown-end ml-5 bg-transparent">
  <label tabIndex={0} className=" btn bg-transparent hover:bg-transparent text-[#959298]  border-none  text-[20px] ">  <HiDotsVertical/>   
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100   rounded-box w-52">
    <li><p className='text-[14px] capitalize'><FaRegEye className="text-dimfont text-[20px] "/>view</p></li>
    <li><p className='text-[14px] capitalize'><FiEdit3 className="text-dimfont text-[20px] "/>Edit Info</p></li>
    <li><p className='text-[14px] capitalize'><MdDelete className="text-dimfont text-[20px] "/>Delete</p></li>
    <li><p className='text-[14px] capitalize'><FaRegChartBar className="text-dimfont text-[20px] "/>Sub-Project Planing</p></li>
 
  </ul>
</div>
        </td>
      </tr>
     
      <tr className="hover">
      <th>3</th>
      <td className='text-[14px]'>This SP completed officially on 30 Nov 2021. </td>
        <td className='text-[14px]'>Nov 30, 2022</td>
        <td className='text-[14px]'>Nov 30, 2022</td>
        <td className='text-[14px]'><input type="checkbox" checked className="checkbox checkbox-sm" /> </td>
        <td >
        <div className="dropdown dropdown-end ml-5 bg-transparent">
  <label tabIndex={0} className=" btn bg-transparent hover:bg-transparent text-[#959298]  border-none  text-[20px] ">  <HiDotsVertical/>   
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100   rounded-box w-52">
    <li><p className='text-[14px] capitalize'><FaRegEye className="text-dimfont text-[20px] "/>view</p></li>
    <li><p className='text-[14px] capitalize'><FiEdit3 className="text-dimfont text-[20px] "/>Edit Info</p></li>
    <li><p className='text-[14px] capitalize'><MdDelete className="text-dimfont text-[20px] "/>Delete</p></li>
    <li><p className='text-[14px] capitalize'><FaRegChartBar className="text-dimfont text-[20px] "/>Sub-Project Planing</p></li>
 
  </ul>
</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Stutustable