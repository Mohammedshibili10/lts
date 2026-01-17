import React from 'react'
import img1 from "@/public/images/solutionimg1.png"
import img2 from "@/public/images/solutionimg2.png"
import img3 from "@/public/images/solutionimg3.png"
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

function SolutionSection() {
    return (
        <section className='  w-full px-6  bg-[#F5FFE4] md:px-10 lg:px-25 py-5 md:py-20 lg:py-30'>
            <div className='flex  lg:flex-row items-center justify-between '>
                <h1 className='text-[#171717] w-80 md:w-82 lg:w-100 text-[25px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-medium'>
                    Our Solutions
                </h1>
                <div className='w-full mt-2  h-0.5 bg-gradient-to-r from-[#76B828] to-[#C7D300]' />
            </div>
            <div className='flex  flex-col lg:flex-row gap-5 md:gap-10 lg:gap-5 xl:gap-0 justify-between py-5 md:py-10'>
                <div className='flex flex-col'>
                    <Image
                        src={img1 }
                        alt="solutionimg1"
                        className='w-full h-90 md:h-120 lg:w-130 lg:h-120'
                        
                    />
                    <h1 className='md:text-2xl lg:text-xl xl:text-3xl font-medium text-[#111111] mb-1 mt-2.5'>ELV & IT SOLUTIONS</h1>
                    <div className='flex items-center gap-1'>
                        <h1 className='md:text-lg lg:text-sm xl:text-lg font-medium text-[#111111]'>Learn more</h1>
                        <FaArrowRight className=' text-[#76B828] mt-1 '/>
                    </div>
                    <div className='w-[85px] h-0.5  bg-gradient-to-r from-[#76B828] to-[#C7D300]'></div>
                </div>
                <div className='flex flex-col'>
                    <Image
                        src={img3}
                        alt="solutionimg3"
                        className='md:w-full h-90 md:h-120 lg:w-130 lg:h-120'
                    />
                    <h1 className='md:text-2xl lg:text-xl xl:text-3xl font-medium text-[#111111] mb-1 mt-2.5'>HOME & BUILDING <br/>
                        AUTOMATION SOLUTIONS</h1>
                    <div className='flex items-center gap-1'>
                        <h1 className='md:text-lg lg:text-sm xl:text-lg font-medium  text-[#111111] '>Learn more</h1>
                        <FaArrowRight className=' text-[#76B828] mt-1 ' />
                    </div>
                    <div className='w-[85px] h-0.5  bg-gradient-to-r from-[#76B828] to-[#C7D300]'></div>
                </div>
                <div className='flex flex-col'>
                    <Image
                        src={img2}
                        alt="solutionimg2"
                        className='md:w-full h-90 md:h-120 lg:w-130 lg:h-120'
                    />
                    <h1 className='md:text-2xl lg:text-xl xl:text-3xl font-medium text-[#111111] mb-1 mt-2.5 '>CINEMA & AV SOLUTIONS</h1>
                    <div className='flex items-center gap-1 '>
                        <h1 className='md:text-lg lg:text-sm xl:text-lg font-medium text-[#111111]'>Learn more</h1>
                        <FaArrowRight className=' text-[#76B828] mt-1 ' />
                    </div>
                    <div className='w-[85px] h-0.5  bg-gradient-to-r from-[#76B828] to-[#C7D300]'></div>
                </div>

            </div>
        </section>
    )
}

export default SolutionSection