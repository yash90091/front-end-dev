import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };
    
  return (
    <div className='bg-gradient-to-l from-orange-200 to bg-orange-50 p-2 w-full'>
      <div className='max-w-[1240px] py-[3px] flex justify-between items-center mx-auto'>
        <div className='text-2xl font-bold'>
            Brax Global
        </div>
        
        <ul className='hidden md:flex gap-10'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/product'>Products</Link>
            </li>
            <li>
                <Link to='/contact'>Contact Us</Link>
            </li>
        </ul>
        <div onClick={handleToggle} className='block md:hidden z-10  pt-3'>
            {toggle ? <IoCloseOutline size={30}/> : <IoIosMenu size={20}/>}
        </div>

        {/* Responsive menu */}
        <ul className={toggle ? 'fixed left-0 top-0 w-full h-1/2 border-r border-r-gray-900 bg-gradient-to-l from-orange-200 to bg-orange-50 ease-in-out duration-75' :'ease-in-out duration-75 fixed left-[-100%]'}>
        <div className='text-2xl font-bold p-5'>
            Brax Global
        </div>
            <li className='p-5 border-b border-slate-300  shadow-inner'>
                <Link to='/'>Home</Link>
            </li>
            <li className='p-5  border-b border-slate-300 shadow-inner'>
                <Link to='/about'>About</Link>
            </li>
            <li className='p-5  border-b border-slate-300 shadow-inner'>
                <Link to='/product'>Products</Link>
            </li>
            <li className='p-5  border-b border-slate-300 shadow-inner'>
                <Link to='/contact'>Contact Us</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
