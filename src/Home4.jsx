import React from 'react'
import x1 from './x1.jpg'
import x2 from './x2.jpg'
import x3 from './x3.jpg'
import x4 from './x4.jpg'
import x5 from './x5.jpg'
import x6 from './x6.jpg'



const Home4 = () => {
  return (
    <div className='py-[5rem] px-10 w-full'>
        <ins><h1 className='font-bold text-center text-3xl mb-10'>Industries We Serve</h1></ins>
        <div className='max-w-[1400x] mx-auto grid md:grid-cols-3 grid-rows-2 gap-8'>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={x1} alt='s1' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2  text-slate-700'>Steel Plant</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={x2} alt='s2' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2  text-slate-700'>Power Plant</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={x3} alt='s3' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2  text-slate-700'>Paper & Plup Industries</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={x4} alt='s4' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2  text-slate-700'>Chemical Industries</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={x5} alt='s5' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2  text-slate-700'>Textiles</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={x6} alt='s6' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2  text-slate-700'>Oil & Gas</h1>
            </div>
        </div>
    </div>
  )
}

export default Home4
