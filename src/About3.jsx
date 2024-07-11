import React from 'react'
import { RiComputerLine } from "react-icons/ri";
import { FaSquarePollVertical } from "react-icons/fa6";
import { HiOutlinePaintBrush } from "react-icons/hi2";

const About3 = () => {
  return (
    <div className='w-full py-[3rem] px-4 bg-gradient-to-l from-orange-200 to bg-orange-50'>
    <div className='max-w-[1400px] mx-auto '>
        <h1 className='text-center font-bold text-3xl'>From Sketch to Reality :</h1>
        <h1 className='text-center font-bold text-3xl mt-3 mb-10'>Exploring Product Design Innovation</h1>
        <div className='w-full flex p-4 my-3 rounded-lg  '>
        <div className='border-r border-slate-500'><RiComputerLine size={100} className='mr-4'/></div>
        <p className='p-4 text-justify'>Brax Global design procedure for the products revolves around a holistic approach that incorporates factors that optimize resource efficiency over the lifecycle of the product. 
        Every product designed from concept to its final form, minimizes the impact on natural resources.</p>
       </div>

        <div className='w-full flex flex-row-reverse p-4 my-10 rounded-lg '>
        <div className='border-l border-slate-500'><FaSquarePollVertical size={100} className='ml-4'/></div>
            <p className='p-4 text-justify'>While designing any product, consideration is given to how best the need for materials or processes can be minimized without compromising its performance parameters for the desired duty. 
                In this way, the supply chain can operate more efficiently in terms of how the materials or services are delivered to Brax Global.</p>
        </div>

        <div className='w-full flex  p-4 my-4 rounded-lg'>
        <div className='border-r border-slate-500'><HiOutlinePaintBrush  size={100} className='mr-4'/></div>
        <p className='p-4 text-justify'>Brax Global cares about resource efficiency, every product is designed to ensure that the product can be reused or its components recycled to the maximum possible extent after the product has performed its desired duty over its life.</p>
        </div>
            
    </div>
</div>
  )
}

export default About3
