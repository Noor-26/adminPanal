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
// const [products, setProducts] =useState([])
// const token = `MzojeEKi1uk_iDCSWcYtWjQterZZMMBU0ecd8ko4biNezzWHjX5UxVf2cKEF1_20uicVE3USvGDKDfrWeOZJE3TzKtchI2jt-k6CsvcvExXMJKjaUYJzDFgVt4QHChuk-4xpnICzBcqBoxNjETBAiaeJMSr4Y7kQB7v-VarXR1nIfYlOqaaBk_fS0UOLXilEhKzQ9p0pY8ndcqQzV2GHgV0pnkzFikqB-CzclMvKujVTUvuD7P-HsNmpHhJb4ge-BTbOvk0iqtyn2E2U8EUAx7pdin6TXRL-WoKVgUnlheMX7D6ZV4NGw6rRI8rDA-yLXlJNS87I1cas2ZkQwcY0WCz1jzwukQFEsSDKIAoy-YX4XGy_HMijoYxLomqP3eMUiBgBss-5WXPySJSWJNoz_iKntVQHX-reR-23KcwnoZdy_XXjyIW0tHCo2fevAU80JxF4qd9AaR6cVBkH46X36fRPYwZx97aN4efFlXvm0emSajib`
// const getDataWithToken = async () => {
//     const response = await fetch('https://srvc.aide.com.bd/api/product/getproductsforhomepage', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization': `Bearer ${token}`

//         },
//         body: JSON.stringify({ UserId: 0 }),
//     });
//     const data = await response.json();
//     setProducts(data)
// };
// useEffect(()=>{
//     getDataWithToken()
// },[])

// console.log("products",products);
  

  
  return ( 
    <div className='grid grid-cols-6 gap-5 p-3'>
        
<div className='ml-2  '>
    <p className='text-[14px] capitalize text-dimfont'>sub project</p>
    <p className="font-semibold text-[20px] text-[#696CFFDE] ">26</p>
        </div>

     
<div className='ml-2'>
    <p className='text-[14px] capitalize  text-dimfont'>SPAR Approved</p>
    <p className="font-semibold text-[20px] text-[#696CFFDE] ">8</p>
</div>
        
       
<div className='ml-2'>
    <p className='text-[14px] capitalize text-dimfont'>DED Submitted</p>
    <p className="font-semibold text-[20px] text-[#696CFFDE] ">10</p>
</div>
      
       
<div className='ml-2'>
    <p className='text-[14px] capitalize text-dimfont'>Tender Eval Ongoing</p>
    <p className="font-semibold text-[20px] text-[#696CFFDE] ">12</p>
</div>
        
        
<div className='ml-2'>
    <p className='text-[14px] capitalize text-dimfont'>Agreement Completed</p>
    <p className="font-semibold text-[20px] text-[#696CFFDE] ">5</p>
</div>
        
        
<div className='ml-2'>
    <p className='text-[14px] capitalize text-dimfont'>Physical Progress</p>
    <p className="font-semibold text-[20px] text-[#696CFFDE] ">16</p>
</div>
    
    </div>
  )
}

export default Details