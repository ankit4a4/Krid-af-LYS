import React from 'react'
import { FaRegCalendarAlt, FaMapMarkerAlt, FaAward, FaBolt } from 'react-icons/fa'

const OurStory = () => {
  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-[#ddcfca] to-[#f5f2f1]">
      <div className="container mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-3 md:mb-16">
          <span className="text-sm font-semibold tracking-wider text-[#2d384b] uppercase mb-2 block">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d384b]">
            Our Story
          </h2>
          <div className="relative w-24 h-1 mx-auto">
            <div className="absolute inset-0 bg-[#2d384b] rounded-full"></div>
            <div className="absolute inset-0 bg-[#2d384b] rounded-full blur-sm opacity-50"></div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute hidden md:flex -left-4 top-0 w-1 h-full bg-[#2d384b] rounded-full"></div>
              <p className="text-lg md:text-xl leading-relaxed text-[#2d384b] pl-6">
                Studio KAL, officially Krid AF Lys, was founded by Tanvi Porwal in
                2022 as a luxury interior design studio offering bespoke,
                end-to-end design services. With over a decade of experience in
                high-end residential, commercial, and hospitality projects across
                Delhi and the National Capital Region, Tanvi has now brought her
                expertise to Dehradun. Her boutique practice is dedicated to
                creativity, meticulous detailing, and the pursuit of exceptional
                design.
              </p>
            </div>

            {/* Decorative row */}
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 rounded-full bg-[#2d384b] border-2 border-white shadow-md"
                  ></div>
                ))}
              </div>
              <span className="ml-4 text-sm text-[#2d384b] font-medium">
                Crafting excellence since 2022
              </span>
            </div>
          </div>

          {/* Founder Image */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative">
              <div className="absolute hidden md:flex -inset-4 bg-[#2d384b] rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="/images/ourpilocipy.jpg"
                alt="Founder Tanvi Porwal"
                className="relative rounded-2xl md:h-[400px] shadow-xl shadow-black w-full max-w-md object-cover z-10"
              />
            </div>
          </div>
        </div>

        {/* Bottom decorative info */}
        <div className="mt-16 pt-8 border-t border-[#2d384b]/30">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#2d384b]">
            <span className="flex items-center">
              <FaRegCalendarAlt className="w-4 h-4 mr-2 text-[#2d384b]" />
              Est. 2022
            </span>
            <span className="flex items-center">
              <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#2d384b]" />
              Dehradun, India
            </span>
            <span className="flex items-center">
              <FaAward className="w-4 h-4 mr-2 text-[#2d384b]" />
              3+ Years of Creativity
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
