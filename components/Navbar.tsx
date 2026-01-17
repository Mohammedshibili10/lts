import Image from 'next/image'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import logo from "@/public/images/LT Smart Logo.png"
// import img1 from "@/public/images/world.png"
// import img2 from "@/public/images/instagram.png"
// import img3 from "@/public/images/linkedin.png"
// import img4 from "@/public/images/facebook.png"
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Sheet, SheetClose, SheetContent,SheetTrigger } from './ui/sheet';

const menuItems = ["Home", "About", "Products", "Solutions", "Works", "Contact"];
export default function Navbar() {
  return (
    <div className="fixed z-50 top-0 inset-x-0 w-full max-w-full flex items-center justify-between px-4 sm:px-5 lg:px-25 py-6 overflow-x-hidden">

      <div className='flex items-center gap-1.5'>
        <Sheet>
          <SheetTrigger>  <FiMenu className='text-[#76B828]  w-10 h-10  '  />
          </SheetTrigger>
            <SheetContent
  side="right"
  className="bg-black text-white w-full max-w-full sm:w-[420px] border-none p-0 overflow-x-hidden">

          <div className="h-screen w-full max-w-full flex flex-col justify-center px-6 sm:px-10 relative overflow-x-hidden">


              {/* Close button */}
              <SheetClose asChild>
                <button className="absolute top-6 right-6 text-sm tracking-widest text-gray-400 hover:text-white">
                  CLOSE
                </button>
              </SheetClose>

              {/* Menu */}
              <nav className="flex flex-col gap-6 text-2xl font-medium">
                {menuItems.map((item, index) => (
                  <div key={item} className="flex flex-col">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:opacity-70 transition"
                    >
                      {item}
                    </a>

                    {/* Divider */}
                    {index !== menuItems.length - 1 && (
                      <div className="h-[1px] w-full bg-white/10 mt-4" />
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className='hidden md:block text-white md:text-xl lg:text-3xl font-medium'>MENU</h1>
      </div>
      <div className='flex'>
       <Image
  src={logo}
  alt="LTS Logo"
  width={160}
  height={60}
  priority
  className="w-[120px] sm:w-[140px] lg:w-[200px] h-auto  lg:pl-20"
/>

      </div>
      <div className='flex justify-between items-center gap-[26px]'>
        {/* <Image
          src={img1}
          alt='world logo'
        /> */}
       <div className='hidden md:flex items-center  gap-2'>
          <TbWorld className='text-white md:w-7 lg:w-10 md:h-7 lg:h-10 '  />
          <h1 className='text-white text-lg font-medium'>
            UAE
          </h1>
       </div>
        {/* <Image
          src={img3}
          alt='linkedin logo'
        /> <Image
          src={img2}
          alt='instagram logo'
        />
        <Image
          src={img4}
          alt='facebook logo'
        /> */}
        <div className='hidden md:flex items-center gap-7'>
          <FaLinkedin className='text-white md:w-6 lg:w-10 md:h-6 lg:h-10'  />
          <RiInstagramFill className='text-white md:w-7 lg:w-10 md:h-7 lg:h-10'  />
          <FaFacebook className='text-white md:w-7 lg:w-10 md:h-7 lg:h-10'  />
        </div>
      </div>
    </div>
  )
}
