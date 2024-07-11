import React from 'react';
import A2 from './a2.jpeg'
import A3 from './a3.png'
import A4 from './a4.png'
import A5 from './a5.png'


const About2 = () => {
    return (
        <div className='w-full py-[6rem] px-4 bg-white'>
            <div className='max-w-[1400px] mx-auto grid md:grid-cols-4 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                    <img className='w-20 mx-auto text-white' src={A2} alt="/" />
                    <div className='text-center border-t border-black py-4 mt-4 '>
                        <h3 className='mb-3 font-bold'>Quality Assurance</h3>
                        <p>Our commitment to quality assurance is at the heart of everything we do.</p>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto bg-white' src={A3} alt="/" />
                    <div className='text-center border-t border-black py-4 mt-4'>
                        <h3 className='mb-3 font-bold'>Project Conception</h3>
                        <p>A Conception is the stage where ideas are at their most fluid creates construction process..</p>
                    </div>
                   
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto bg-white' src={A4} alt="/" />
                    <div className='text-center border-t border-black py-4 mt-4'>
                        <h3 className='mb-3 font-bold'>The Design Process</h3>
                        <p>Once you have finally completed bending the rules of a reality to bring your client’s dream..</p>
                    </div>
                </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto bg-white' src={A5} alt="/" />
                    <div className='text-center border-t border-black py-4 mt-4'>
                        <h3 className='mb-3 font-bold'>A Plan Procurement</h3>
                        <p>Next is procurement which is the most straight forward step in the manufacturing processes..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About2;
