import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/LT Smart Logo.png"
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const menuItems = ["Home", "About", "Service", "Brand", "Contact"];
function Footer() {
    
  return (
   <section>
          <div className='bg-[#111111]  padding-x'>
              <div className='flex justify-between'>
                  <div className='flex'>
                      <Image
                          src={logo}
                          alt="LTS Logo"
                          className='w-40 '
                      />
                  </div>
                  <div>

                      {/* Menu */}
                      <nav className="flex  text-[14px] font-normal gap-[24px] text-white">
                          {menuItems.map((item, index) => (
                              <div key={item} className="flex flex-col">
                                  <a
                                      href={`#${item.toLowerCase()}`}
                                      className="hover:opacity-70 transition"
                                  >
                                      {item}
                                  </a>

                                  {/* Divider
                              {index !== menuItems.length - 1 && (
                                  <div className="h-[1px] w-full bg-white/10 mt-4" />
                              )} */}
                              </div>
                          ))}
                      </nav>
                  </div>
                  <div className='flex justify-between items-center gap-[26px]'>

                      <div className='flex items-center gap-7'>
                          <FaLinkedin className='text-[#76B828]' size={21} />
                          <RiInstagramFill className='text-[#76B828]' size={21} />
                          {/* <FaFacebook className='text-white' size={21} /> */}
                          <button className='text-[14px] font-normal gap-[24px] text-black bg-white px-[21px] py-[4px] rounded-[6px]'>UAE Division</button>
                      </div>
                  </div>
              </div>
              <div className='w-full h-0.5 bg-gradient-to-r from-[#76B828] to-[#C7D300] my-[24px]' />
              <div className='flex justify-between'>
                <div className='flex gap-[16px]'>
                      <h1 className='font-normal text-[14px] text-[#828294]'>Terms of service</h1>
                      <h1 className='font-normal text-[14px] text-[#828294]'>Privacy Policy</h1>
                </div>
                  <p className='font-normal text-[14px] text-[#828294]'>© 2025 Company Name. All rights reserved.</p>
              </div>
  </div>
   </section>
  )
}

export default Footer