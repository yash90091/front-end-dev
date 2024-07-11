import React from 'react'
import { useNavigate } from "react-router-dom";

const Home1 = () => {

  const navigate = useNavigate()

  const gotToNewPage=()=>{
    navigate("/product");
  }


  return (
    <div className='bg-gradient-to-l from-orange-200 to bg-orange-50 py-[100px] w-full'>
      <div className='max-w-[1400px] mx-auto text-center'>
        <div className='mb-3 font-bold text-2xl'>
            What is a biomass pellet?
        </div>
        <h3 className='text-slate-500'>
            Biomass is organic matter that can be used to generate energy. <br/>
            It can include wood, plant materials and even animal dung, used to fuel fires for warmth and cooking.
        </h3>
        <button onClick={() => gotToNewPage()} className='bg-gradient-to-r from-gray-600 to bg-gray-900 text-white pb-3 pt-3 pl-4 pr-4 rounded-md mt-3'>Know More</button>
      </div>
    </div>
  )
}

export default Home1
