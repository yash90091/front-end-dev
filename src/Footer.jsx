import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mx-auto py-16 p-4 grid md:grid-cols-3 gap-6 bg-gradient-to-l from-orange-200 to bg-orange-50 mt-auto'>
      <div className='col-span-1'>
        <h1 className='w-full text-3xl font-bold text-black'>Brax Global</h1>
        <p className='py-4'>Biomass is organic matter that can be used to generate energy. 
            It can include wood, plant materials and even animal dung, used to fuel fires for warmth and cooking.
        </p>
        <div className='flex justify-between md:w-[50%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className='col-span-2 flex justify-between mt-6 '>
        <div>
          <h6 className='font-medium text-black'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Biomass Pellets</li>
            <li className='py-2 text-sm'>Biomass Briquettes</li>
            <li className='py-2 text-sm'>Biomass Coal</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;