import Image from "next/image";
import React from "react";
import img1 from "@/public/images/bulding.png";
import img2 from "@/public/images/phone.png";
import img3 from "@/public/images/message.png";
import { DraftForm } from "./single-step-form";

function ContactSection() {
  return (
    <section className="bg-[#F5FFE4]">
      <div
        className="flex flex-col lg:flex-row gap-12
        px-6 sm:px-10  lg:px-25
        py-16  "
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[45%]">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] xl:text-[58px] font-medium">
            Contact Us
          </h1>

          <p
            className="text-[16px] sm:text-[18px] xl:text-[22px] mt-2
            max-w-full sm:max-w-[90%] lg:max-w-[80%]"
          >
            For enquiries, support, or project discussions,
            connect with our team and we’ll get back to
            you promptly.
          </p>

          {/* OFFICE */}
          <div className="mt-8">
            <h2 className="text-[22px] sm:text-[27px] xl:text-[34px] font-bold mb-4">
              Office
            </h2>

            {/* Middle East */}
            <div className="bg-[#76B8280F] border p-5 mb-4 sm:w-full  lg:max-w-[520px]">
              <h3 className="text-[18px] sm:text-[22px] xl:text-[23px] font-medium mb-3">
                Middle East
              </h3>

              <div className="flex gap-4 mb-3">
                <Image src={img1} alt="address" className="w-[28px] h-[28px]" />
                <p className="text-[14px] sm:text-[16px] xl:text-[18px]">
                  Al Telal 6 Building, 2nd December Street
                  P.Box 51556, Satwa, Dubai, U.A.E
                </p>
              </div>

              <div className="flex gap-4 mb-3">
                <Image src={img2} alt="phone" className="w-[28px] h-[28px]" />
                <p className="text-[14px] sm:text-[16px] xl:text-[18px]">
                  Tel. (+971) 4 398 7337
                </p>
              </div>

              <div className="flex gap-4">
                <Image src={img3} alt="email" className="w-[28px] h-[28px]" />
                <p className="text-[14px] sm:text-[16px] xl:text-[18px]">
                  info@ltsmartsystems.com
                </p>
              </div>
            </div>

            {/* Europe */}
            <div className="bg-[#76B8280F] border p-5 sm:w-full  lg:max-w-[520px]">
              <h3 className="text-[18px] sm:text-[22px] xl:text-[23px] font-medium mb-3">
                Europe
              </h3>

              <div className="flex gap-4 mb-3">
                <Image src={img1} alt="address" className="w-[28px] h-[28px]" />
                <p className="text-[14px] sm:text-[16px] xl:text-[18px]">
                  Kampinoska 26, 53-133 Wrocław
                </p>
              </div>

              <div className="flex gap-4 mb-3">
                <Image src={img3} alt="email" className="w-[28px] h-[28px]" />
                <p className="text-[14px] sm:text-[16px] xl:text-[18px]">
                  info@ltsmartsystems.eu
                </p>
              </div>

              <div className="flex gap-4">
                <Image src={img2} alt="phone" className="w-[28px] h-[28px]" />
                <p className="text-[14px] sm:text-[16px] xl:text-[18px]">
                  +48 71 750 90 34
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
          <DraftForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
