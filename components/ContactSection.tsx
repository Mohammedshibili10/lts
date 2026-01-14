import Image from 'next/image'
import React from 'react'
import img1 from "@/public/images/bulding.png"
import img2 from "@/public/images/phone.png"
import img3 from "@/public/images/message.png"
import { DraftForm } from './single-step-form'

function ContactSection() {
    return (
        <section>
            <div className='flex padding-x gap-[26px] container'>
                {/* contact */}
                <div className='w-full'>
                    <h1 className='text-[58px] font-medium'>Contact Us</h1>
                    <p className='text-[20px] font-normal max-w-[66%]'> For enquiries, support, or project discussions,
                        connect with our team and we’ll get back to
                        you promptly.</p>
                    <div>
                        <h1 className='text-[24px] font-bold my-[24px]'>Office</h1>
                        <div className='flex flex-col gap-[16px] mb-[48px]'>
                            <h1 className='text-[24px] font-normal mb-2'>
                                Middle East
                            </h1>
                            <div className='flex gap-[16px]'>
                                <Image
                                    src={img1}
                                    alt='phone img'
                                    className='w-[24px] h-[24px]'
                                />
                                <p className='text-[20px] font-normal max-w-[57%]'>
                                    Al Telal 6 Building , 2nd December
                                    Street P.Box 51556 , Satwa, Dubai,U.A.E
                                </p>
                            </div>
                            <div className='flex gap-[16px]'>
                                <Image
                                    src={img2}
                                    alt='phone img'
                                    className='w-[24px] h-[24px]'
                                />
                                <p className='text-[20px] font-normal'>
                                    Tel. (+971) 4 398 7337
                                </p>
                            </div>
                            <div className='flex gap-[16px]' >
                                <Image
                                    src={img3}
                                    alt='phone img'
                                    className='w-[24px] h-[24px]'
                                />
                                <p className='text-[20px] font-normal'>
                                    info@ltsmartsystems.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px] mb-[48px]'>
                        <h1 className='text-[24px] font-normal mb-2'>Europe</h1>
                        <div className='flex gap-[16px]'>
                            <Image
                                src={img1}
                                alt='phone img'
                                className='w-[24px] h-[24px]'
                            />
                            <p className='text-[20px] font-normal'>
                                Kampinoska 26, 53-133 Wrocław
                            </p>
                        </div>
                        <div className='flex gap-[16px]'>
                            <Image
                                src={img3}
                                alt='phone img'
                                className='w-[24px] h-[24px]'
                            />
                            <p className='text-[20px] font-normal'>
                                info@ltsmartsystems.eu
                            </p>
                        </div>
                        <div className='flex gap-[16px]'>
                            <Image
                                src={img2}
                                alt='phone img'
                                className='w-[24px] h-[24px]'
                            />
                            <p className='text-[20px] font-normal'>
                                +48 71 750 90 34
                            </p>
                        </div>
                    </div>

                </div>
               <div className='w-full'>
                    {/* form */}
                    <DraftForm />
               </div>

            </div>
        </section>
    )
}

export default ContactSection