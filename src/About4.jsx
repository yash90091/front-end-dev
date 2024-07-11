import React from 'react'
import { VscProject } from "react-icons/vsc";
import { MdOutlineColorLens } from "react-icons/md";
import { GrPlan } from "react-icons/gr";

const About4 = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-white'>
            <div className='max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-slate-100'>
                <VscProject className='w-20 mx-auto' size={100}/>
                    
                    <div className='text-center border-t border-black py-4 mt-4 '>
                        <h3 className='mb-3 font-bold'>Quality Assurance</h3>
                        <p>Our commitment to quality assurance is at the heart of everything we do.</p>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-slate-100'>
                <MdOutlineColorLens className='w-20 mx-auto' size={100}/>
                    <div className='text-center border-t border-black py-4 mt-4'>
                        <h3 className='mb-3 font-bold'>Competitive Price</h3>
                        <p>We understand that finding the right balance between quality and cost is essential for our customers.</p>
                    </div>
                   
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-slate-100'>
                <GrPlan className='w-20 mx-auto' size={100}/>
                    <div className='text-center border-t border-black py-4 mt-4'>
                        <h3 className='mb-3 font-bold'>Fast Service</h3>
                        <p>We understand the urgency that often surrounds pellets requirements.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About4
