import React from 'react'
import S1 from './S1.jpg'
import S2 from './S2.webp'
import S3 from './S3.webp'
import S4 from './S4.jpg'
import S5 from './S5.jpeg'
import S6 from './S6.webp'
import S7 from './S7.jpeg'
import S8 from './S8.jpg'
import S9 from './S8.webp'
import S10 from './S10.jpg'
import S11 from './S11.jpeg'
import S12 from './S12.jpg'



const Home4 = () => {
  return (
    <div className='py-[5rem] px-2 w-full'>
        <ins><h1 className='font-bold text-4xl text-center mb-10 '>Products</h1></ins>
        <div className='max-w-[1400x] mx-auto grid md:grid-cols-3 grid-rows-4 gap-8'>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S1} alt='s1'className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Spruce Wood</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S2} alt='s2' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Pine Sawdust</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S3} alt='s3' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Bamboo</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S4} alt='s4' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Rice Bran</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S5} alt='s5' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Rice Husk</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S6} alt='s6' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Canola Straw</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S7} alt='s7' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Maize Straw</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S8} alt='s8' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Peanut Husk</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S9} alt='s9' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Paper Dust</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S10} alt='s10' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Grass Powder</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S11} alt='s11' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Chicken Litter</h1>
            </div>
            <div className='my-4 w-full flex flex-col p-4'>
                <img src={S12} alt='s12' className='hover:scale-105 duration-300 cursor-pointer'/>
                <h1 className='text-center text-2xl font-bold py-2'>Feed Pellet for Pigeon</h1>
            </div>
        </div>
    </div>
  )
}

export default Home4
