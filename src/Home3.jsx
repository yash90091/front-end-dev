import React from 'react'

const Home3 = () => {
  return (
    <div className='bg-gradient-to-l from-orange-200 to bg-orange-50 pl-4 pr-4'>
        
    <div className='max-w-[1400px] mx-auto grid md:grid-cols-2 py-[40px]'>
        <div className='col-span-1 text-justify text-base xl:mr-10 md:mr-10'>
            <h1 className='font-bold text-2xl mb-5 '>Application :</h1>
                <p className='mb-5 font-medium'>Biomass pellets find a wide range of applications, primarily as a source of renewable energy. Some of the key applications include:</p>
                <ul className='list-disc list-inside text-slate-800'>
                    <li className='pb-3'>Heat and Electricity Generation: Biomass pellets are commonly used in residential and industrial boilers, as well as power plants, to produce heat and electricity.</li>
                    <li className='pb-3'>Space Heating: Pellet stoves and pellet boilers are popular choices for residential and commercial space heating due to their efficiency and low emissions.</li>
                    <li className='pb-3'>Industrial Processes: Some industries use biomass pellets as a source of heat for drying processes or as a supplementary fuel in manufacturing.</li>
                    <li className='pb-3'>Combined Heat and Power : In combined heat and power systems, biomass pellets are utilized to generate both electricity and useful heat simultaneously.</li>
                    <li>Animal Bedding: In the agricultural sector, biomass pellets are used as bedding material for livestock, providing a comfortable and absorbent surface.</li>
                </ul>
        </div>
        <div className='col-span-1 text-justify text-base xl:ml-10 md:ml-10'>
        <h1 className='font-bold text-2xl mb-5'>Environmental Impact :</h1>
            <p className='mb-5 font-medium'>While biomass pellets have several environmental benefits, their production and use can also raise environmental concerns. These include:</p>
                <ul className='list-disc list-inside text-slate-800'>
                    <li className='pb-3'>Land Use Change: Large-scale biomass production may lead to land use changes that can impact ecosystems and biodiversity.</li>
                    <li className='pb-3'>Air Quality: Improper combustion or low-quality pellets can emit particulate matter and other pollutants, affecting air quality.</li>
                    <li className='pb-3'>Transportation Emissions: The transport of biomass feedstock over long distances can result in carbon emissions.</li>
                    <li className='pb-3'>Sustainable Sourcing: Sustainable forestry and agriculture practices are crucial to ensuring that biomass production remains environmentally friendly.</li>
                    <li>Reduced Greenhouse Gas Emissions: Biomass pellets produce lower greenhouse gas emissions compared to fossil fuels, contributing to climate change mitigation.</li>
                </ul>
        </div>
      </div>
    </div>
  )
}

export default Home3
