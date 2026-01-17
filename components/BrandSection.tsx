import React from 'react'
import LogoCloud from './logo-cloud'
import brandsection from "@/public/images/brandsection.jpg"
import Image from 'next/image'
import { IoMdPause } from "react-icons/io";

function BrandSection() {
  return (
    <section className='px-6 sm:px-15 lg:px-25 py-10 sm:py-20 bg-[#F5FFE4]'>
 <div className='flex flex-col lg:flex-row gap-10'>

       
        <div className='relative w-full'>
          <div className='h-100 sm:h-120 xl:h-160 overflow-hidden rounded-md'>
            <Image
              src={brandsection}
              alt='brandsection'
              className='w-full h-full object-cover scale-230'
            />
          </div>

          <button className='absolute left-1/2 -translate-x-1/2 bottom-10 sm:bottom-55 
            w-40 sm:w-45 h-12 sm:h-15 bg-white rounded-xl 
            flex justify-center items-center gap-1 text-base sm:text-lg'>
            <IoMdPause className='w-6 h-6 text-[#76B828]' />
            Pause video
          </button>
        </div>

       
        <div className='relative w-full'>
          <div className='h-100 sm:h-120 xl:h-160 overflow-hidden rounded-md'>
            <Image
              src={brandsection}
              alt='brandsection'
              className='w-full h-full object-cover scale-230'
            />
          </div>

          <button className='absolute left-1/2 -translate-x-1/2 bottom-10 sm:bottom-55 
            w-40 sm:w-45 h-12 sm:h-15 bg-white rounded-xl 
            flex justify-center items-center gap-1 text-base sm:text-lg'>
            <IoMdPause className='w-6 h-6 text-[#76B828]' />
            Pause video
          </button>
        </div>

   
        <div className='w-full h-100 sm:h-120 xl:h-160 
          overflow-hidden rounded-md bg-black text-white 
          flex items-center justify-center text-xl sm:text-2xl'>
          Upcoming...
        </div>

      </div>

    
      <div className='py-20 sm:py-30'>
        <div className='flex items-center gap-6'>
          <h1 className='text-[#171717] 
            w-auto min-w-max
            text-[25px] md:text-[35px] lg:text-[40px] xl:text-[48px] 
            font-medium'>
            Our Brand Partners
          </h1>

          <div className='flex-1 h-0.5 bg-gradient-to-r from-[#76B828] to-[#C7D300] mt-3' />
        </div>

       
        <LogoCloud />
      </div>

    </section>
  )
}

export default BrandSection


