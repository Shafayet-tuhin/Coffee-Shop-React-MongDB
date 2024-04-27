import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { TbArrowBack } from "react-icons/tb";

const View = () => {

    const data = useLoaderData();

    console.log(data)

    return (

            <div className='container mx-auto bg-[url("/images/more/11.png")] mt-8 '>
                <div>
                    <Link to='/' > <button className='flex gap-1 font-abc items-center text-[#374151] font-normal text-xl lg:text-3xl mb-6 lg:mb-[3.12rem]'> <TbArrowBack /> Back to home </button></Link>
                </div>
              

              <div className='flex flex-col lg:flex-row text-center lg:text-left items-center justify-center font-abc bg-[#F4F3F0] lg:px-[11.5rem] lg:py-[4.5rem] rounded-3xl'>
                            <div >
                                  <img className='lg:w-[21rem] lg:h-[28rem] w-40 h-40' src={data.photo} alt="" />
                            </div>

                            <div className='flex flex-col gap-4 text-xl font-semibold text-[#5C5B5B]'>
                                   <p className='text-[#331A15] font-medium text-4xl'>{data.name}</p>
                                   <p>Chef : {data.chef}</p>
                                   <p>Taste : {data.taste}</p>
                                   <p>Supplier : {data.supplier}</p>
                                   <p>Details : {data.details}</p>
                            
                            </div>
              </div>

            </div>

       
    )
}

export default View