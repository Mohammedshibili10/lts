import Image from 'next/image'
import React from 'react'
import Img from "@/public/images/workImg.jpg"
import Img1 from "@/public/images/workimg1.png"
import Img2 from "@/public/images/workimg2.png"
import Img3 from "@/public/images/workimg3.png"
import Img4 from "@/public/images/workimg4.png"
import Img5 from "@/public/images/workimg5.png"
import Img6 from "@/public/images/workimg6.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


function WorkSection() {
    return (
        <section className="relative w-full  overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src={Img}
                    alt="work bg"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111CC] to-[#4c4949]" />
            </div>

            <div className="relative  px-10 lg:px-25  py-20">
                <div className="flex justify-between items-center pb-10">
                    <h1 className="text-[25px] md:text-[35px] lg:text-[40px] xl:text-[48px]  text-white">Our Work</h1>

                    <div className="flex gap-2">
                        <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#76B828] to-[#C7D300] text-white flex items-center justify-center">
                            <FaArrowLeft size={25} />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#76B828] to-[#C7D300] text-white flex items-center justify-center">
                            <FaArrowRight size={25} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  mb-10">
                    {[Img1, Img2, Img3, Img4, Img5, Img6].map((img, i) => (
                        <div key={i} className="relative w-full aspect-[4/3] rounded-sm overflow-hidden">
                            <Image
                                src={img}
                                alt={`work ${i}`}
                                fill
                                className="object-cover "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default WorkSection;