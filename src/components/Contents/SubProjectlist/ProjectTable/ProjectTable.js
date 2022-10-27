import React from 'react'
import { HiDotsVertical } from 'react-icons/hi';
import {AiFillPlusCircle} from 'react-icons/ai';
import {FaRegEye,FaRegChartBar} from 'react-icons/fa';
import {FiEdit3} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import {Link} from 'react-router-dom'
import ProjectShowModal from '../ProjectshowModal/ProjectShowModal';
const ProjectTable = () => {
  return (
    <div>
        <div className="overflow-x-auto h-full">
  <table className="table  w-full">
    <thead>
      <tr className='py-3' >
        <th></th> 
        <th>SL</th>
        <th>Package  No</th>
        <th>sub project name</th>
        <th>Implemantaton status</th>
        <th>estimated cost 
        (spar)</th>
        <th>estimated cost 
        (SBD)</th>
        <th>contact price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover py-0">
      <th>
      <label htmlFor="my-modal-3" className=" modal-button"><AiFillPlusCircle className="text-[#9E69FD] text-[20px] cursor-pointer"/></label>
        </th>
        <th>1</th>
        <td className='text-[14px] '>W-o7/LAL</td>
        <td className='w-[23rem] text-[14px]'>Improvement and Construction of Raj Narayan Dhar Road, Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road</td>
        <td className='text-[14px] w-[10rem] '>RND, KRU, SASN Roads</td>
        <td className='text-[14px]'>1425.00</td>
        <td className='text-[14px]'>1425.00</td>
        <td className='text-[14px]'>1425.00</td>
        <td >
        <div className="dropdown dropdown-end ml-5 bg-transparent">
  <label tabIndex={0} className=" btn bg-transparent hover:bg-transparent text-[#959298]  border-none  text-[20px] ">  <HiDotsVertical/>   
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 absolute  rounded-box w-52">
    <li><p className='text-[14px] capitalize'><FaRegEye className="text-dimfont text-[20px] "/>view</p></li>
    <li><p className='text-[14px] capitalize'><FiEdit3 className="text-dimfont text-[20px] "/>Edit Info</p></li>
    <li><p className='text-[14px] capitalize'><MdDelete className="text-dimfont text-[20px] "/>Delete</p></li>
    <li><p className='text-[14px] capitalize'><FaRegChartBar className="text-dimfont text-[20px] "/>Sub-Project Planing</p></li>
 
  </ul>
</div>
        </td>
      
      </tr>
      <tr className="active">
      <th><AiFillPlusCircle className="text-[#9E69FD] text-[20px]"/></th>
      <th>2</th>
      <td className='text-[14px] w-[6rem]'>W-o7/LAL</td>
        <td className='text-[14px]'>Improvement and Construction of Raj Narayan Dhar Road, Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road</td>
        <td className='text-[14px]'>RND, KRU, SASN Roads</td>
        <td className='text-[14px]'>1425.00</td>
        <td className='text-[14px]'>1425.00</td>
        <td className='text-[14px]'>1425.00</td>
        <td >
        <div className="dropdown dropdown-end ml-5 bg-transparent">
  <label tabIndex={0} className=" btn bg-transparent hover:bg-transparent text-[#959298]  border-none  text-[20px] ">  <HiDotsVertical/>   
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 absolute   rounded-box w-52">
    <li><p className='text-[14px] capitalize'><FaRegEye className="text-dimfont text-[20px] "/>view</p></li>
    <li><p className='text-[14px] capitalize'><FiEdit3 className="text-dimfont text-[20px] "/>Edit Info</p></li>
    <li><p className='text-[14px] capitalize'><MdDelete className="text-dimfont text-[20px] "/>Delete</p></li>
    <li><p className='text-[14px] capitalize'><FaRegChartBar className="text-dimfont text-[20px] "/>Sub-Project Planing</p></li>
 
  </ul>
</div>
        </td>
      </tr>
     
      <tr className="hover">
      <th><AiFillPlusCircle className="text-[#9E69FD] text-[20px]"/></th>
      <th>3</th>
      <td className='text-[14px]'>W-o7/LAL</td>
        <td className='text-[14px]'>Improvement and Construction of Raj Narayan Dhar Road, Kazi Riazuddin Road and Street Around Shaheed Nagar CC Road</td> 
        <td className='text-[14px]'>RND, KRU, SASN Roads</td>
        <td className='text-[14px]'>1425.00</td>
        <td  className='text-[14px]'>1425.00</td>
        <td className='text-[14px]'>1425.00</td>
        <td >
        <div className="dropdown dropdown-end ml-5 bg-transparent">
  <label tabIndex={0} className=" btn bg-transparent hover:bg-transparent text-[#959298]  border-none  text-[20px] ">  <HiDotsVertical/>   
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 absolute  rounded-box w-52">
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
<ProjectShowModal/>
    </div>
  )
}

export default ProjectTable