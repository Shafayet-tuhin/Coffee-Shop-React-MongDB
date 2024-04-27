import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url("/images/more/3.png")] bg-cover bg-center'>
            <div className='w-1/2 ml-auto text-white py-16 lg:py-56 font-abc'>
                <div className=''>
                    <p className='text-2xl lg:text-[3.43rem] font-normal'>Would you like a Cup of Delicious Coffee?</p>
                    <p className='font-normal text-xs lg:text-lg leading-7 mt-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <a href='https://en.wikipedia.org/wiki/Coffee' target='_blank'>
                        <button className='bg-[#E3B577] lg:text-2xl font-normal px-[1.37rem] py-[0.56rem] text-black rounded-md lg:mt-8'>Learn More</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
