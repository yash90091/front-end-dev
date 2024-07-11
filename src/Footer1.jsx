import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
  import { MdEmail } from "react-icons/md";
  import { FaPhoneAlt } from "react-icons/fa";
  import { FaLocationDot } from "react-icons/fa6";
  

  const section = [
  {
    title:'Products',
    itemes:['Biomass Pellets', 'Biomass Briquettes', 'Biomass Coal']
  },
  {
    title:'Support',
    itemes:['Pricing', 'Documentation', 'Guides', 'API', 'Status']
  },
  {
    title:'Company',
    itemes:['About', 'Blog', 'Jobs', 'Press', 'Careers']
  },
  {
    title:'Legal',
    itemes:['Claim', 'Policy', 'Terms']
  }
]

const itemes = [
    {
        name:'Facebook',
        icon:FaFacebookSquare,
        link:'http://facebook.com/'
    },
    {
        name:'Instagram',
        icon:FaInstagram,
        link:'http://instagram.com/'
    },
    {
        name:'Github',
        icon:FaGithubSquare,
        link:'http://github.com/'
    },
    {
        name:'Twitter',
        icon:FaTwitterSquare,
        link:'http://twitter.com/'
    }
]
const Footer1 = () => {
return (
    <div className='w-full  bg-gradient-to-l from-orange-200 to bg-orange-50 py-y px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-400 py-8'>
        
        
        {
            section.map((section,index)=>(
                <div key={index}>
                    <h6 className='font-bold uppercase pt-2 '>
                        {section.title}
                    </h6>
                    <ul>
                        {section.itemes.map((itemes,i)=>(
                            <li key={i} className='py-2 text-gray-500 hover:text-black cursor-pointer'>
                                {itemes}
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
        <div className='col-span-2 pt-8 md:pt-2'>
          
            <h1 className='font-bold text-black mb-3 text-2xl'>Brax Global</h1>
            <div className='flex flex-row py-3'> 
            <FaLocationDot className='text-[20px] mr-3 mt-2 hover:text-gray-500'/>
            <p className='font-semibold'>257/23 sham park, Near Corporate House, New Naroda, Ahmedabad-382350, Gujarat, India.</p>
            </div>
            
            <div className='flex flex-row py-3'>
            <MdEmail className='text-[20px] mr-3 mt-1 hover:text-gray-500'/>
            <p className='font-semibold'>info@braxglobal.co.in</p>
            </div>
            <div className='flex flex-row py-3'>
            <FaPhoneAlt  className='text-[20px] mr-3 mt-1 hover:text-gray-500'/>
            <p className='font-semibold'>(+91) 7621025957</p>
            </div>
            
            
            <h1 className='font-bold text-2xl py-2'>Follow Us</h1>
            <div className='flex justify-between sm:w-[200px] pt-4 text-2xl'>
                {
                    itemes.map((x,index)=>{
                        return<x.icon key={index} className='hover:text-gray-500 cursor-pointer text-black'/>
                    })
                }
            </div>
           
           
            
        </div>
        
        </div>
            <p className='py-4 text-center'>
              Copyright @ 2024, Brax Global All Rights Reserved.
            </p>
            
      </div>
    
  )
}

export default Footer1
