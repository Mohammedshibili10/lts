import React from 'react'
import img1 from "@/public/images/solutionimg1.png"
import img2 from "@/public/images/solutionimg2.png"
import img3 from "@/public/images/solutionimg3.png"
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

function SolutionSection() {
    return (
        <section className='bg-white container mx-auto px-6 max-w-7xl'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <h1 className='text-[#171717] text-[38px] font-medium'>
                    Our Solutions
                </h1>
                <div className='w-full lg:w-[931px] h-0.5 bg-gradient-to-r from-[#76B828] to-[#C7D300]' />
            </div>
            <div className='flex  flex-col lg:flex-row justify-between'>
                <div className='flex flex-col'>
                    <Image
                        src={img1 }
                        alt="solutionimg1"
                        
                    />
                    <h1 className='text-[20px] font-medium text-[#111111] mb-2.5 mt-2.5'>ELV & IT SOLUTIONS</h1>
                    <div className='flex items-center'>
                        <h1 className='text-[14px] font-normal text-[#111111]'>Learn more</h1>
                        <FaArrowRight className=' text-[#76B828]'/>
                    </div>
                    <div className='w-[85px] h-0.5  bg-gradient-to-r from-[#76B828] to-[#C7D300]'></div>
                </div>
                <div className='flex flex-col'>
                    <Image
                        src={img3}
                        alt="solutionimg3"
                    />
                    <h1 className='text-[20px] font-medium text-[#111111] mb-2.5 mt-2.5'>HOME & BUILDING <br/>
                        AUTOMATION SOLUTIONS</h1>
                    <div className='flex items-center'>
                        <h1 className='text-[14px] font-normal text-[#111111]'>Learn more</h1>
                        <FaArrowRight className=' text-[#76B828]' />
                    </div>
                    <div className='w-[85px] h-0.5  bg-gradient-to-r from-[#76B828] to-[#C7D300]'></div>
                </div>
                <div className='flex flex-col'>
                    <Image
                        src={img2}
                        alt="solutionimg2"
                    />
                    <h1 className='text-[20px] font-medium text-[#111111] mb-2.5 mt-2.5 '>CINEMA & AV SOLUTIONS</h1>
                    <div className='flex items-center'>
                        <h1 className='text-[14px] font-normal text-[#111111]'>Learn more</h1>
                        <FaArrowRight className=' text-[#76B828]' />
                    </div>
                    <div className='w-[85px] h-0.5  bg-gradient-to-r from-[#76B828] to-[#C7D300]'></div>
                </div>

            </div>
        </section>
    )
}

export default SolutionSection