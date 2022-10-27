import React, { useState } from 'react'
import { GrSearch } from 'react-icons/gr';
import { IoIosArrowUp,IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const ResultsOfFrameWI = () => {
    const [isOpened, setOpened] = useState(true)
    const [height, setHeight] = useState("70vh")
    const HandleOpening = () => {
        setOpened(!isOpened)
        setHeight(!isOpened ? "70vh" : `0px`) 
      } 
      const [isOpened2, setOpened2] = useState(false) 
      const [height2, setHeight2] = useState("0px")
      const HandleOpening2 = () => {
          setOpened2(!isOpened2)
          setHeight2(isOpened2 ? "0px" : `40vh`) 
        } 
      const [isOpened3, setOpened3] = useState(false) 
      const [height3, setHeight3] = useState("0px")
      const HandleOpening3 = () => {
          setOpened3(!isOpened3)
          setHeight3(isOpened3 ? "0px" : `70vh`) 
        } 
      const [isOpened4, setOpened4] = useState(false) 
      const [height4, setHeight4] = useState("0px")
      const HandleOpening4 = () => {
          setOpened4(!isOpened4)
          setHeight4(isOpened4 ? "0px" : `45vh`) 
        } 
      const [isOpened5, setOpened5] = useState(false) 
      const [height5, setHeight5] = useState("0px")
      const HandleOpening5 = () => {
          setOpened5(!isOpened5)
          setHeight5(isOpened5 ? "0px" : `45vh`) 
        } 
  return (
    <div className='mt-5'>
          <div  className="border  duration-200">
      <div onClick={HandleOpening} className="bg-[#F4F5FA]  cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold tracking-[0.15px] text-[18px] text-acc_head">PROJECTS DEVELOPMENT INDICATORS</h4>
     

        {isOpened ?  <IoIosArrowDown /> :<IoIosArrowUp />}
    
      </div>
      <div
        style={{ height: height }}
        className=" overflow-y-auto px-2 bg-white transition-all duration-200"
      >

<div  className="border mt-3  duration-200">
      <div onClick={HandleOpening2} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  items-center ">
        <div>

        <h4 className="font-semibold text-def underline">Improve urban services in selected neighborhood in dhaka</h4>
      
        </div>
        {isOpened2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height2 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 pt-4 px-4'>
        
    
<div className="grid grid-cols-2  mt-5">
<div className='border flex justify-center items-center px-4'>
<p className='text-[14px]'>Number of people consulted under participatory sassions for subproject design and implementation</p>
</div>
<div>
   
          <div className="overflow-x-auto border shadow rounded-lg">
<table className="table w-full">
<thead>
  <tr >
    <th></th>
    <th className='border-r border-[#F2F2F2] '>baseline</th> 
    <th>target</th>
    <th>actual</th>
  </tr>
</thead>
<tbody>
  <tr className="">
    <th className='text-[14px]'>total</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
   
  </tr>
  <tr className="">
    <th className='text-[14px]'>woman</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
   
  </tr>

</tbody>
</table>
</div>
</div>
</div>
       
        </div>
        </div>
      </div> 
<div  className="border mt-3  duration-200">
      <div onClick={HandleOpening2} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  items-center ">
        <div>

        <h4 className="font-semibold text-def underline">Enhanced public spaces in selected neighborhood in dhaka</h4>
      
        </div>
        {isOpened2 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height2 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 pt-4 px-4'>
        
    
<div className="grid grid-cols-2  mt-5">
<div className='border flex justify-center items-center px-4'>
<p className='text-[14px]'>People provided with improved urban living condition</p>
</div>
<div>
   
          <div className="overflow-x-auto border shadow rounded-lg">
<table className="table w-full">
<thead>
  <tr >
    <th></th>
    <th className='border-r border-[#F2F2F2] '>baseline</th> 
    <th>target</th>
    <th>actual</th>
  </tr>
</thead>
<tbody>
  <tr className="">
    <th className='text-[14px]'>total</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
   
  </tr>
  <tr className="">
    <th className='text-[14px]'>woman</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
   
  </tr>

</tbody>
</table>
</div>
</div>
</div>
       
        </div>
        </div>
      </div> 
       
        </div>
      </div> 
          <div  className="border mt-4  duration-200">
      <div onClick={HandleOpening3} className="bg-[#F4F5FA]  cursor-pointer p-2 flex  justify-between  ">
        <h4 className="font-semibold tracking-[0.15px] text-[18px] text-acc_head">INTERMEDIATE INDICATORS</h4>
     

        {isOpened3 ?  <IoIosArrowDown /> :<IoIosArrowUp />}
    
      </div>
      <div
        style={{ height: height3 }}
        className=" overflow-y-auto px-2 bg-white transition-all duration-200"
      >

<div  className="border mt-3  duration-200">
      <div onClick={HandleOpening4} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  items-center ">
        <div>

        <h4 className="font-semibold text-def underline">Improve urban services in selected neighborhood in dhaka</h4>
      
        </div>
        {isOpened4 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height4 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 pt-4 px-4'>
        
    
<div className="grid grid-cols-2  mt-5">
<div className='border flex justify-center items-center px-4'>
<p className='text-[14px]'>Number of people consulted under participatory sassions for subproject design and implementation</p>
</div>
<div>
   
          <div className="overflow-x-auto border shadow rounded-lg">
<table className="table w-full">
<thead>
  <tr >
    <th></th>
    <th className='border-r border-[#F2F2F2] '>baseline</th> 
    <th>target</th>
    <th>actual</th>
  </tr>
</thead>
<tbody>
  <tr className="">
    <th className='text-[14px]'>total</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
   
  </tr>
  <tr className="">
    <th className='text-[14px]'>woman</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
   
  </tr>

</tbody>
</table>
</div>
</div>
</div>
       
        </div>
        </div>
      </div> 
<div  className="border mt-3  duration-200">
      <div onClick={HandleOpening5} className="bg-[#F4F5FA] cursor-pointer p-2 flex  justify-between  items-center ">
        <div>

        <h4 className="font-semibold text-def underline">Enhanced public spaces in selected neighborhood in dhaka</h4>
      
        </div>
        {isOpened5 ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>
      <div
        style={{ height: height5 }}
        className=" overflow-hidden  transition-all duration-200"
      >
    <div className='mb-4 pt-4 px-4'>
        
    
<div className="grid grid-cols-2  mt-5">
<div className='border flex justify-center items-center px-4'>
<p className='text-[14px]'>People provided with improved urban living condition</p>
</div>
<div>
   
          <div className="overflow-x-auto border shadow rounded-lg">
<table className="table w-full">
<thead>
  <tr >
    <th></th>
    <th className='border-r border-[#F2F2F2] '>baseline</th> 
    <th>target</th>
    <th>actual</th>
  </tr>
</thead>
<tbody>
  <tr className="">
    <th className='text-[14px]'>total</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
   
  </tr>
  <tr className="">
    <th className='text-[14px]'>woman</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
    <th className='text-[14px]'>12,000</th>
   
  </tr>

</tbody>
</table>
</div>
</div>
</div>
       
        </div>
        </div>
      </div> 
       
        </div>
      </div> 
    </div>
  )
}

export default ResultsOfFrameWI