import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/LT Smart Logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const menuItems = ["Home", "About", "Service", "Brand", "Contact"];

function Footer() {
  return (
    <section>
      <div className="bg-[#111111] px-6 sm:px-10 lg:px-25 py-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start">

          {/* LOGO */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src={logo}
              alt="LTS Logo"
              className="w-32 sm:w-36 lg:w-40"
            />
          </div>

          {/* MENU */}
          <nav className="flex  justify-center gap-4 sm:gap-6 text-[14px] font-normal text-white">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:opacity-70 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* SOCIAL + BUTTON */}
          <div className="flex  items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-6">
              <FaLinkedin className="text-[#76B828]" size={25} />
              <RiInstagramFill className="text-[#76B828]" size={30} />
            </div>

            <button className="md:w-30 text-[14px] font-normal text-black bg-white px-[21px] py-[4px] rounded-[6px]">
              UAE Division
            </button>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-0.5 bg-gradient-to-r from-[#76B828] to-[#C7D300] my-6" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-center sm:text-left">

          <div className="flex gap-4">
            <h1 className="font-normal text-[14px] text-[#828294]">
              Terms of service
            </h1>
            <h1 className="font-normal text-[14px] text-[#828294]">
              Privacy Policy
            </h1>
          </div>

          <p className="font-normal text-[14px] text-[#828294]">
            © 2025 Company Name. All rights reserved.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Footer
