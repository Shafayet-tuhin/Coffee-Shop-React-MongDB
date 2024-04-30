import React, { useContext, useEffect, useState } from 'react'
import { LuCoffee } from "react-icons/lu";
import { Link } from 'react-router-dom';
import SingleProducts from './SingleProducts';
import { userContext } from '../context/DataContext';


const Products = () => {

 const {users , setUsers} = useContext(userContext)

    

    return (
        <div className='mt-8 lg:mt-[8rem] bg-[url("/images/more/1.png")] bg-cover'>

            <div className='font-abc flex flex-col items-center gap-3 mb-12'>
                <p className='text-[#331A15] font-normal text-4xl lg:text-6xl '>Our Popular Products</p>
                <Link to='/addCoffe' >
                    <button className='animate-bounce flex items-center gap-1 bg-[#E3B577] text-font-normal text-xl lg:text-2xl px-3 lg:px-5 py-[0.56rem] rounded-md border-2  border-[#9c9c9c] text-[#ffffff]'> Add Coffee <LuCoffee />
                    </button>
                </Link>
            </div>

            <div className='lg:grid lg:grid-cols-2 lg:gap-5 lg:max-w-5xl mx-auto flex flex-col gap-5'>
                     {
                         users.map((el ,ind) => {
                            return (
                                <SingleProducts key ={ind} item = {el}/>
                            )
                         })
                     }
            </div>

        </div>
    )
}

export default Products