import React from 'react'
import aboutImg from "@/public/images/aboutimg.jpg"
import Image from 'next/image'

function AboutSection() {
    return (
        <section className='  w-[full]  bg-[#111111] '>
            <div className=' max-w-8xl px-5 sm:px-10 lg:px-20 xl:px-30 flex flex-col gap-[59px]  w-full py-30'>
                <div >
                    <h2 className='text-base font-normal text-white pb-5'>About LT Smart System</h2>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium lg:leading-15 xl:leading-20 xl:max-w-[72%] text-white'>
                        Empowering buildings with seamless control and smart integration
                    </h1>
                </div>
                <div className='relative w-full min-h-[420px] md:min-h-[520px] lg:min-h-[600px] overflow-hidden '>

                    <Image
                        src={aboutImg}
                        alt="aboutImg"
                        fill
                        className='object-cover bg-blend-overlay . '
                    />
                

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060606] to-[#06060633]" />
                    <div className='absolute inset-0 flex items-center w-full'>
                        <div className='flex flex-col gap-3.5  px-15   md:px-35  md:space-y-3 '>
                            <p className='xl:max-w-[95%] text-[11px]  md:text-md xl:text-2xl text-justify text-white'>
                                We are a smart systems solutions provider with over 25+ years of experience, delivering
                                fully integrated ELV, IT, automation, audiovisual, and sound systems for residential and
                                commercial spaces. Our commitment is to create intelligent environments that offer seamless control,
                                enhanced safety, and reliable performance.
                            </p>
                            <p className=' xl:max-w-[95%]  text-[11px] md:text-md xl:text-2xl text-justify text-white'>
                                By combining deep engineering expertise with advanced technologies, we design and implement
                                systems that help facilities operate efficiently, securely, and intelligently - while delivering superior
                                user experiences.
                            </p>
                            <p className=' xl:max-w-[95%]  text-[11px] md:text-md xl:text-2xl text-justify text-white'>
                                Our team of skilled engineers ensures every system works together flawlessly. With a strong focus
                                on integration, innovation, and performance, we help our clients unlock the full potential of their spaces.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-between lg:py-10 xl:py-20'>
                    <div className='flex '>
                        <div className='flex flex-col space-y-1 md:space-y-4'>
                            <h1 className=' text-xl md:text-4xl text-[#76B828] font-semibold'>
                                25+
                            </h1>
                            <p className='text-white text-md text-xl lg:text-3xl xl:text-4xl'>
                                Years of <br />Experience
                            </p>
                        </div>

                    </div>
                    <div className='flex gap-1  px-2 md:gap-[29px]'>
                        <div className="w-[2px] h-[82px] md:h-[130px] bg-[#4D4D4D]" />
                        <div className='flex flex-col space-y-1 md:space-y-4'>
                            <h1 className='text-xl md:text-4xl text-[#76B828] font-semibold' >
                                500+
                            </h1>
                            <p className='text-white  text-md text-xl lg:text-3xl xl:text-4x'>
                                Completed <br />Projects
                            </p>
                        </div>

                    </div>
                    <div className='flex gap-1 px-2 md:gap-7.25 '>
                        <div className="w-[2px] h-[82px] md:h-[130px] bg-[#4D4D4D]" />
                        <div className='flex flex-col space-y-1 md:space-y-4'>
                            <h1 className='text-xl md:text-4xl  text-[#76B828] font-semibold'>
                                100%
                            </h1>
                            <p className='text-white text-md md:text-xl lg:text-3xl xl:text-4x'>
                                Client <br /> Satisfaction
                            </p>
                        </div>
                    </div>
                    <div className='flex space-x-3 md:space-y-0 px-3 md:gap-[29px] '>
                        <div className="w-[2px] h-[82px] md:h-[130px] bg-[#4D4D4D]" />
                        <div className='flex flex-col space-y-1 md:space-y-4'>

                            <h1 className='text-xl md:text-4xl  text-[#76B828] font-semibold'>
                                200+
                            </h1>
                            <p className='text-white text-md md:text-xl lg:text-3xl xl:text-4x'>
                                Employees
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    )
}

export default AboutSection