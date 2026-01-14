import React from 'react'
import aboutImg from "@/public/images/aboutimg.jpg"
import Image from 'next/image'

function AboutSection() {
    return (
        <section className='container  w-[full]  bg-[#111111]'>
            <div className=' max-w-7xl mx-auto px-6 flex flex-col gap-[59px]  w-full'>
                <div >
                    <h2 className='text-base font-normal text-white'>About LT Smart System</h2>
                    <h1 className='text-[46px] font-medium leading-15 max-w-[75%] text-white'>
                        Empowering buildings with seamless control and smart integration
                    </h1>
                </div>
                <div className='relative w-full min-h-[420px] md:min-h-[520px] lg:min-h-[600px] overflow-hidden '>

                    <Image
                        src={aboutImg}
                        alt="aboutImg"
                        fill
                        className='object-cover'
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#060606] to-[#06060633]" />
                    <div className='absolute inset-0 flex items-center w-full'>
                        <div className='flex flex-col gap-3.5  mx-auto px-6 max-w-7xl '>
                            <p className='max-w-[75%] text-white'>
                                We are a smart systems solutions provider with over 25+ years of experience, delivering
                                fully integrated ELV, IT, automation, audiovisual, and sound systems for residential and
                                commercial spaces. Our commitment is to create intelligent environments that offer seamless control,
                                enhanced safety, and reliable performance.
                            </p>
                            {/* <p className='max-w-[74%] text-white'>
                                By combining deep engineering expertise with advanced technologies, we design and implement
                                systems that help facilities operate efficiently, securely, and intelligently - while delivering superior
                                user experiences.
                            </p>
                            <p className='max-w-[74%] text-white'>
                                Our team of skilled engineers ensures every system works together flawlessly. With a strong focus
                                on integration, innovation, and performance, we help our clients unlock the full potential of their spaces.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className=' flex justify-between'>
                    <div className='flex '>
                        <div className='flex flex-col'>
                            <h1 className='text-[32px] text-[#76B828] font-semibold'>
                                25+
                            </h1>
                            <p className='text-white'>
                                Years of <br />Experience
                            </p>
                        </div>

                    </div>
                    <div className='flex gap-[29px]'>
                        <div className="w-[2px] h-[130px] bg-[#4D4D4D]" />
                        <div className='flex flex-col'>
                            <h1 className='text-[32px] text-[#76B828] font-semibold' >
                                500+
                            </h1>
                            <p className='text-white'>
                                Completed <br />Projects
                            </p>
                        </div>

                    </div>
                    <div className='flex gap-7.25 '>
                        <div className="w-[2px] h-[130px] bg-[#4D4D4D]" />
                        <div className='flex flex-col'>
                            <h1 className='text-[32px] text-[#76B828] font-semibold'>
                                100%
                            </h1>
                            <p className='text-white'>
                                Client <br /> Satisfaction
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-[29px] '>
                        <div className="w-[2px] h-[130px] bg-[#4D4D4D]" />
                        <div className='flex flex-col'>

                            <h1 className='text-[32px] text-[#76B828] font-semibold'>
                                200+
                            </h1>
                            <p className='text-white'>
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