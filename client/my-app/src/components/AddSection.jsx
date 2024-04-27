import React from 'react'
import icon1 from '/images/icons/1.png'
import icon2 from '/images/icons/2.png'
import icon3 from '/images/icons/3.png'
import icon4 from '/images/icons/4.png'
const AddSection = () => {
  return (
    <div className='flex justify-center text-center gap-3 lg:gap-[2.44rem] bg-[#ECEAE3] py-4 lg:py-[3.55rem] px-8 lg:px-60'>
             <div className='font-abc flex flex-col items-center '>
                        <img className='w-12 h-12 lg:w-[4.375rem] lg:h-[4.375rem] mb-4' src={icon1} alt="" />
                        <p className='text-[#331A15] text-lg lg:text-4xl font-normal mb-2'>Awesome Aroma</p>
                        <p className='hidden lg:block text-[#1B1A1A] text-base font-normal text-center'>You will definitely be a fan of the design & aroma of your coffee</p>
             </div>
             <div className='font-abc flex flex-col items-center '>
                        <img className='w-12 h-12 lg:w-[4.375rem] lg:h-[4.375rem] mb-4' src={icon2} alt="" />
                        <p className='text-[#331A15] text-lg lg:text-4xl font-normal mb-2'>High Quality</p>
                        <p className='hidden lg:block text-[#1B1A1A] text-base font-normal text-center'>We served the coffee to you maintaining the best quality</p>
             </div>
             <div className='font-abc flex flex-col items-center '>
                        <img className='w-12 h-12 lg:w-[4.375rem] lg:h-[4.375rem] mb-4' src={icon3} alt="" />
                        <p className='text-[#331A15] text-lg lg:text-4xl font-normal mb-2'>Pure Grades</p>
                        <p className='hidden lg:block text-[#1B1A1A] text-base font-normal text-center'>The coffee is made of the green coffee beans which you will love</p>
             </div>
             <div className='font-abc flex flex-col items-center '>
                        <img className='w-12 h-12 lg:w-[4.375rem] lg:h-[4.375rem] mb-4' src={icon4} alt="" />
                        <p className='text-[#331A15] text-lg lg:text-4xl font-normal mb-2'>Proper Roasting</p>
                        <p className='hidden lg:block text-[#1B1A1A] text-base font-normal text-center'>Your coffee is brewed by first roasting the green coffee beans</p>
             </div>
    </div>
  )
}

export default AddSection