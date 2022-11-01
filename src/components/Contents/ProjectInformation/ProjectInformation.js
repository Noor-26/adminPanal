import React, { useEffect, useRef, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { TbEqual } from 'react-icons/tb'
import infoImg from '../../../images/information.png'

const ProjectInformation = () => {
  const gob = useRef()
  const ida = useRef()
  const [totalValue, settotalValue] = useState()
  // useEffect(() => {
  // }, [gob,ida])
  const sum = () => {
    const gobValue = parseInt( gob.current.value)
    const idaValue = ida.current.value

    console.log(  gobValue  + idaValue)

  }
  return (
    <div className=' mt-5'>
              <div className='flex'>
        <div className="avatar ">
  <div className="w-8 rounded-md ">
    <img src={infoImg} />
  </div>
</div>
<div className='ml-2'>
    <p className="font-semibold capitalize text-[20px] text-[#165DC5]">Project Information</p>
</div>
        </div>
        <div className='card p-5 mt-5 rounded-md bg-white'>
        <div className="form-control  ">
          <label className="label">
    <span className="label-text">Name of the Project</span>
  </label>
  <label className="input-group border ">
 
    <input name="location"  placeholder=" Enter Name of the Project" className='focus:outline-none w-full p-2'/>
  </label>
</div>
        <div className="form-control  mt-2">
          <label className="label">
    <span className="label-text">Implementing Agent</span>
  </label>
  <label className="input-group border ">
 
    <input name="location"  placeholder=" Enter Implementing Agent" className='focus:outline-none w-full p-2'/>
  </label>
</div>
        <div className="form-control  mt-2">
          <label className="label">
    <span className="label-text">Executing Division</span>
  </label>
  <label className="input-group border ">
 
    <input name="location"  placeholder=" Enter Executing Division" className='focus:outline-none w-full p-2'/>
  </label>
</div>
        <div className="form-control  mt-2">
          <label className="label">
    <span className="label-text">Name of the Ministry</span>
  </label>
  <label className="input-group border ">
 
    <input name="location"  placeholder=" Enter Name of the Ministry" className='focus:outline-none w-full p-2'/>
  </label>
</div>
        <div className="form-control  mt-2">
          <label className="label">
    <span className="label-text">Objective of the Project</span>
  </label>
  <label className="input-group border ">
 
    <input name="location"  placeholder=" Enter Objective of the Project" className='focus:outline-none w-full p-2'/>
  </label>
</div>
        <div className="form-control  mt-2">
          <label className="label">
    <span className="label-text">Location of the Project</span>
  </label>
  <label className="input-group border ">
 
    <input name="location"  placeholder=" Enter Location of the Project" className='focus:outline-none w-full p-2'/>
  </label>
</div>

<div className='flex items-center justify-evenly mt-2'>
<p className='pt-10'>Source of Fund</p>
<div className="form-control  ">
          <label className="label">
    <span className="label-text ">GOB</span>
  </label>
  <label className="input-group border ">
    <input type="number" placeholder="Enter here" ref={gob} onChange={sum} className="input  w-[15vw] focus:outline-none" />
  </label>
</div>
<BsPlusLg className='mt-10'/>
<div className="form-control  ">
          <label className="label">
    <span className="label-text">IDA</span>
  </label>
  <label className="input-group border ">
    <input type="number" placeholder="Enter here" ref={ida}  onChange={sum} className="input  w-[15vw] focus:outline-none" />
  </label>
</div>
<TbEqual className='mt-10 text-[30px]'/>
<div className="form-control  ">
          <label className="label">
    <span className="label-text">Total</span>
  </label>
  <label className="input-group border ">
    <input type="number" placeholder="Enter here" className="input  w-[15vw] focus:outline-none" />
  </label>
</div>
</div>
        </div>
    </div>
  )
}

export default ProjectInformation