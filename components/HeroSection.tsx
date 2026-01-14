import Image from 'next/image'
import React from 'react'
import heroimg from "@/public/images/heroimg.png"
import line from "@/public/images/line.png"
import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden mx-auto px-6 '>
            <div className='absolute inset-0 z-0"'>
                <Image
                    src={heroimg}
                    alt='here image '
                    className='w-full h-screen'
                />
            </div>
            <div className="relative container mx-auto  text-center z-20  max-w-7xl">
                <div className=' flex flex-col text-left'>
                    <h1 className=' text-[37px] md:text-[64px] font-medium lg:max-w-[65%] leading-11 lg:leading-18 mb-5.5 text-white'>
                        integrated smart solutions for safer smarter spaces
                    </h1>
                    <p className='text-[16px] font-medium leading-6 max-w-[90%] lg:max-w-[26%] mb-5.5 text-white'>
                        Seamlessly connect, Protect & Automate your spaces with systems designed for efficiency, Comfort & Security
                    </p>
                </div>
                <div>
                    <div   className='flex items-center gap-2'>
                        <h1 className='text-white'>Explore Our Solutions</h1>
                        {/* <FaArrowRight/> */}
                        <button className="w-8.5 h-8.5 rounded-full bg-gradient-to-r from-[#76B828] to-[#C7D300]  text-white flex items-center justify-center hover:bg-black transition">
                            <FaArrowRight size={18} />
                        </button>
                    </div>
                    {/* <hr className='w-24 h-0.5 text-[#76B828]'/> */}
                    <Image  
                    src={line}
                    alt='line'
                        className='w-24'
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection