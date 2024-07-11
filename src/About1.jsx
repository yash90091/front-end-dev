import React from 'react'
import A1 from './A1.jpeg'

const About1 = () => {
  return (
    <div>
      <div className='bg-gradient-to-l from-orange-200 to bg-orange-50 py-[30px] w-full'>
      <div className='max-w-[1400px] mx-auto text-center'>
        <div className='mb-3 font-bold text-2xl'>
           <ins>About Us</ins>
        </div>
        <div className='max-w-[1400px] mx-auto mt-20 p-2 grid md:grid-cols-3 sm:px-5'>
        <div className='col-span-1 md:w-[85%] text-center'>
            <img src={A1} alt='Wood' className='inline'/>
        </div>
        <div className='col-span-2 flex flex-col justify-center'>
            <h2 className='font-bold my-5 text-xl text-start'>
                 Welcome to Brax Global
            </h2>
            <p className='my-2 text-justify'>
            <b>Brax Global</b> feels immense pleasure while introducing ourselves as a flagship company established in 2012. "BRAX" is a team of Promoters with a <b>55% stake owned by Women Directors.</b><br/><br/>
            <b>Brax Global is an ISO 9001:2018 certified company.</b><br/><br/>
            The company was primarily engaged in the supply of various Biomass pellets as well as other goods. In 2014, the company decided to switch over to supply & manufacturing domestic biomass pellets. then, Brax started OEM supply of all types of biomass pellets.<br/><br/>
            At present, the product mix stands as a complete testimony to all sectors, including private, government, OEM, industrial, etc. In such a short Span of time, we gained expertise in manufacturing biomass pellets for all types of industries and challenging applications. That differentiates us from other manufacturers available in the market because we designed and supply pellets as per the user's / application's requirements.
            </p>
           
        </div>
    </div>
        </div>
    </div>
    </div>
  )
}

export default About1
