import React from 'react'
import P2 from './P2.jpg'

const Home2 = () => {
  return (
    <div className='max-w-[1400px] mx-auto my-10 p-2 grid md:grid-cols-3 '>
        <div className='col-span-1 md:w-[80%] text-center '>
            <img src={P2} alt='Wood' className='inline'/>
        </div>
        <div className='col-span-2 flex flex-col justify-center'>
            <h2 className='font-bold my-2 text-xl'>
                 Biomass Pellet :
            </h2>
            <p className='my-2 text-justify'>
            Biomass pellet is a small, cylindrical, and condensed form of organic material derived from various renewable sources. 
            These pellets serve as a viable and sustainable alternative to traditional fossil fuels and play a significant role in addressing energy and environmental challenges. 
            This article provides an overview of biomass pellets, their production, applications, advantages, and environmental impact.
            Biomass pellets are a versatile and environmentally friendly energy source with applications in heating, electricity generation, and more. 
            Their production and use can contribute to sustainable energy solutions and reduce greenhouse gas emissions when managed with proper environmental considerations. 
            As the world continues to seek alternatives to fossil fuels, biomass pellets are likely to play an essential role in the transition to a greener and more sustainable energy future.
            </p>
           
        </div>
    </div>
  )
}

export default Home2
