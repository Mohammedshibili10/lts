import Image from 'next/image'
import React from 'react'
import img from "@/public/images/productImg.jpg"
import line from "@/public/images/line.png"
import { FaArrowRight } from 'react-icons/fa'

function ProductSection() {
    return (
        <section className=' bg-[#111111] '>
            <div className='flex  lg:flex-row items-center justify-between  px-10 lg:px-25  py-12'>
                <h1 className='text-[#171717] w-85 md:w-82 lg:w-100 text-[22px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-medium text-white '>
                    Our Products
                </h1>
                <div className=' w-full mt-2 h-0.5 bg-gradient-to-r from-[#76B828] to-[#C7D300]' />
            </div>
            <div className='relative pb-[100px] '>
                <Image
                    src={img}
                    alt="product img"
                    className=' w-full h-[677] md:h-[877px] object-cover  '
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#060606] to-[#06060633]" />
                <div className=' absolute inset-0 flex items-center px-10 lg:px-25  max-w-7xl text-center sm:text-start'>
                    <div className='flex flex-col mb-25 '>
                        <h1 className='text-[30px] md:text-[35px] lg:text-[46px] xl:text-[56px] leading-11 lg:leading-14 xl:leading-20 font-semibold text-white'>
                            Elysioom by...<br />
                            LTsmart Systems–  Bring the Silver<br />
                            Screen Home
                        </h1>
                        <p className='lg:text-md xl:text-lg   md:max-w-[45%] mt-4 mb-4.5 t text-white'>
                            Enjoy stunning visuals, immersive sound, and a premium home cinema experience.
                        </p>
                        <div className='flex justify-center sm:justify-start'>

                            <div className='flex flex-col items-center sm:items-start '>

                                <div className='flex items-center gap-2'>
                                    <h1 className='text-white lg:text-md xl:text-lg'>
                                        Explore Our Solutions
                                    </h1>

                                    <button className="w-10 h-10 rounded-full 
                                        bg-gradient-to-r from-[#76B828] to-[#C7D300]  
                                        text-white flex items-center justify-center 
                                        hover:bg-black transition">
                                        <FaArrowRight size={18} />
                                    </button>
                                </div>

                                {/* underline line */}
                                <Image
                                    src={line}
                                    alt='line'
                                    className="w-20 sm:w-24 mr-28"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </section>
    )
}

export default ProductSection