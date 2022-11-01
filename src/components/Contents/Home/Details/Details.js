import React, { useEffect, useState } from 'react'
import subProject from '../../../../images/subProjectIcon.png'
import DedIcon from '../../../../images/DedIcon.png'
import sparIcon from '../../../../images/SparIcon.png'
import dollarIcon from '../../../../images/DollarIcon.png'
import axios from 'axios'
const Details = () => {
  const [datas, setdatas] = useState([])
  // const {data } = axios.get("https://dcnup.centerpointbd.xyz/Api/DashboardSummary")
//   useEffect(() => {
//     fetch('https://dcnup.centerpointbd.xyz/Api/DashboardSummary')
//     .then(res => res.json())
//     .then(data => console.log("data",data))
//   }, []) 
const [products, setProducts] =useState([])
const token = `E0nR6rqMnAFigHkbE3RhzQNAg4E5IJPtukKydCDFcUFPaKtrIfUelyL4-kxZg50PkzYImWOs6rP34ZXbX1usO1QqorZ-uFcuL_wAkg5kvvWHdXtbsYRZplycv4BRzf9GNZ9c6O53hp6Y_Uy3XIBC0Iu_YxwcCPS2sknQm-zRkrck6Se5SHvpvnSLN6ViUdc6MSAjUYpV-wrFlOMiksPIHnJvADeySANWSgsn00KX87hYwHA0hBoJ-YC8SM8e5cTQYTWqQxy6dv4R0BnjJDo2RfJ4BrZ9-X8lFnrMYgGBXP7GlnXuuac8llUXQQH48fVaVJjUHc9xlKbWfucKv1Wx7yGtYlK4XzQ4aoFjILRKGuKwTzIryyVP4w-88Z3Un76T`
const getDataWithToken = async () => {
    const response = await fetch('https://aide.centerpointbd.xyz/api/subproject/dashboardsummary', { 
     
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`

        },


})
 
    const data = await response.json();
    setProducts(data)
};
useEffect(()=>{
    getDataWithToken() 
},[])

console.log("products",products);
  

  
  return ( 
    <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-5 w-full p-3'>
        
<div className='ml-2  flex items-center '>
    <p className="font-semibold text-[35px] text-[#696CFFDE] ">26</p>
    <p className='text-[14px] capitalize text-dimfont ml-2'>sub <br/> project</p>
        </div>

     
<div className='ml-2  flex items-center '>
    <p className="font-semibold text-[35px] text-[#696CFFDE] ">8</p>
    <p className='text-[14px] capitalize  text-dimfont ml-2'>SPAR <br/> Approved</p>
</div>
        
       
<div className='ml-2  flex items-center'>
    <p className="font-semibold text-[35px] text-[#696CFFDE] ">10</p>
    <p className='text-[14px] capitalize ml-2 text-dimfont'>DED <br/> Submitted</p>
</div>
      
       
<div className='ml-2  flex items-center'>
    <p className="font-semibold text-[35px] text-[#696CFFDE] ">12</p>
    <p className='text-[14px] capitalize ml-2 text-dimfont'>Tender <br/>  Eval Ongoing</p>
</div>
        
        
<div className='ml-2  flex items-center'>
    <p className="font-semibold text-[35px] text-[#696CFFDE] ">5</p>
    <p className='text-[14px] capitalize ml-2 text-dimfont'>Agreement <br/> Completed</p>
</div>
        
        
<div className='ml-2  flex items-center'>
    <p className="font-semibold text-[35px] text-[#696CFFDE] ">16</p>
    <p className='text-[14px] capitalize ml-2 text-dimfont'>Physical  <br/>Progress</p>
</div>
    
    </div>
  )
}

export default Details