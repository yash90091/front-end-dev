import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Contact2 = () => {
  return (
    <div className='w-full pt-[5rem] px-4 bg-white'>
    <div className='max-w-[1400px] mx-auto grid md:grid-cols-4 gap-8'>
        <div className='w-full shadow-xl flex flex-col py-10 px-4 rounded-lg hover:scale-105 duration-300 hover:bg-orange-100'>
        
        <FaLocationDot className='w-20 mx-auto' size={30}/>
            <div className='text-center py-2 mt-1 flex flex-col'>
                <h3 className='mb-4 font-bold text-xl'>Registered Office & Manufacturing Unit</h3>
                <p>257/23 sham park, Near Corporate House, Ahmedabad-382350, Gujarat, India.</p>
            </div>
        </div>
        <div className='w-full shadow-xl flex flex-col py-10 px-4 rounded-lg hover:scale-105 duration-300 hover:bg-orange-100'>
        <MdEmail className='w-20 mx-auto' size={35}/>
            <div className='text-center py-2 mt-1 flex flex-col'>
                <h3 className='mb-3 font-bold text-xl'>Email</h3>
                <p>info@braxglobal.co.in</p>
                <p className='mt-2'>braxglobal88@gmail.com</p>
            </div>
           
        </div>
        <div className='w-full shadow-xl flex flex-col px-4 py-10 rounded-lg hover:scale-105 duration-300 hover:bg-orange-100'>
        <FaPhoneAlt className='w-20 mx-auto' size={30}/>
            <div className='text-center py-2 mt-1 flex flex-col'>
                <h3 className='mb-3 font-bold text-xl'>Phone</h3>
                <p>+91&nbsp;7621025957</p>
            </div>
        </div>
        <div className='w-full shadow-xl flex flex-col px-4 py-10 rounded-lg hover:scale-105 duration-300 hover:bg-orange-100'>
        <FaClock className='w-20 mx-auto' size={30}/>
            <div className='text-center py-2 mt-1 flex flex-col'>
                <h3 className='mb-3 font-bold text-xl'>Work Hours</h3>
                <p>Weekdays : 09:00 am - 06:00pm</p>
                <p className='mt-2'>Weekend : 09:00am - 02:00pm</p>
            </div>
        </div>

    </div>
</div>
  )
}

export default Contact2
