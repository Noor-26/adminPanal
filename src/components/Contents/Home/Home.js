import React from 'react'
import Accordian from './Accordian/Accordian'
import Details from './Details/Details'

const Home = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <Details/>
        <Accordian/>
    </div>
  )
}

export default Home