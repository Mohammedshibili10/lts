import Image from 'next/image'
import React from 'react'
import img from "@/public/images/productImg.jpg"
import line from "@/public/images/line.png"
import { FaArrowRight } from 'react-icons/fa'

function ProductSection() {
    return (
        <section className=' bg-[#111111]'>
            <div className='flex flex-col lg:flex-row+ items-center justify-between mx-auto container px-6 max-w-7xl'>
                <h1 className='text-[#171717] text-[38px] font-medium text-white '>
                    Our Products
                </h1>
                <div className=' w-full lg:w-[931px] h-0.5 bg-gradient-to-r from-[#76B828] to-[#C7D300]' />
            </div>
            <div className='relative pb-[100px] '>
                <Image
                    src={img}
                    alt="product img"
                    className=' w-full h-[657px] object-cover'
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#060606] to-[#06060633]" />
                <div className=' absolute inset-0 flex items-center mx-auto px-6 max-w-7xl '>
                    <div className='flex flex-col'>
                        <h1 className='text-[35px]  lg:text-[42px] leading-11 lg:leading-15 font-semibold text-white'>
                            Elysioom by...<br/>
                            LTsmart Systems–  Bring the Silver<br/> 
                            Screen Home
                        </h1>
                        <p className='text-base  font-medium max-w-[55%] mt-4 mb-4.5 text-white'>
                            Enjoy stunning visuals, immersive sound, and a premium home cinema experience.
                        </p>
                        <div>
                            <div className='flex items-center gap-2'>
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
                  
                </div>
            </div>


        </section>
    )
}

export default ProductSection