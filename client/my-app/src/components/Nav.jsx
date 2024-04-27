import React from 'react'
import cup from '/images/nav/l1.png'
import logo from '/images/nav/R1.png'
import R3 from "/images/more/3.png"
const Nav = () => {
    return (
        <div className='bg-[url("/images/nav/R1.png")]'>
               <div className='flex items-center justify-center font-abc'>
                  <img src={cup} alt="" />
                  <p className='text-white text-2xl lg:text-6xl font-normal'>Espresso Emporium</p>
               </div>
        </div>
    )
}

export default Nav