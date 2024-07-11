import React from 'react'
import { useNavigate } from "react-router-dom";


const Contact1 = () => {

    const navigate = useNavigate()

  const gotToHomePage=()=>{
    navigate("/home");
  }

  return (
    <div className='bg-gradient-to-l from-orange-200 to bg-orange-50 py-[80px] w-full'>
        <div className='max-w-[1400px] mx-auto text-center'>
            <h1 className='mb-2 font-bold text-3xl'>Contact Us</h1>
            <ul className='flex justify-center text-slate-600'>
                <li onClick={() => gotToHomePage()} className='list-inline-item mr-3 cursor-pointer'>Home</li>
                <li className='list-inline-item mr-3'>|</li>
                <li className='list-inline-item'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Contact1
