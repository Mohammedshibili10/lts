import Image from 'next/image'
import React from 'react'
import heroimg from "@/public/images/heroimg.png"
import line from "@/public/images/line.png"
import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      
      {/* Background image */}
      <Image
        src={heroimg}
        alt="Hero background"
        fill
        priority
        className="absolute inset-0 object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px]  px-4 sm:px-6 md:px-10 lg:px-25">
        
        <div className="max-w-5xl text-center sm:text-left">
          
          <h1 className="   text-white font-medium leading-tight   text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[74px]   mb-5 ">
            Integrated Smart Solutions For Safer Smarter Spaces
          </h1>

          <p className="  text-white  text-sm sm:text-base md:text-lg lg:text-xl  leading-relaxed  max-w-xl  mb-6">
            Seamlessly connect, Protect & Automate your spaces with systems
            designed for efficiency, Comfort & Security
          </p>

          {/* Button */}
          <div className='pl-5'>
          <div className="flex justify-center sm:justify-start items-center gap-3">
            <h2 className="text-white font-medium text-base sm:text-lg md:text-xl">
              Explore Our Solutions
            </h2>

            <button className=" w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#76B828] to-[#C7D300] text-white flex items-center justify-center transition ">
              <FaArrowRight size={18} />
            </button>
          </div>

          {/* Line */}
          <Image
            src={line}
            alt="line"
            className="w-20 sm:w-24  mx-18.5 sm:mx-0"
          />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
