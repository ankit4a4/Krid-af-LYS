import React from "react";
import img from "../../../public/images/ourpilocipy.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#DDCFCA] py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Split Layout */}
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-20">
          {/* Left Content */}
          <div className="xl:w-1/2 space-y-12">

            <div className="aspect-[4/3] md:hidden flex overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/Founder.webp"
                alt="Founder"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div>
              <p className="uppercase text-sm tracking-widest text-[#2D384B] mb-4">
                Our Story
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#2D384B] mb-8">
                About Studio KAL
              </h2>
              <p className="text-lg leading-relaxed text-[#2D384B]/90 mb-8">
                Studio KAL, Krid AF Lys, was founded by Tanvi Porwal in 2022 as a
                luxury interior design studio offering bespoke, end-to-end design
                services. With over a decade of experience in high-end residential,
                commercial, and hospitality projects across Delhi and the National
                Capital Region, Tanvi has now brought her expertise to Dehradun. Her
                boutique practice is dedicated to creativity, meticulous detailing,
                and the pursuit of exceptional design.
              </p>
            </div>

            {/* Founder Image */}
            <div className="md:aspect-[4/3] hidden md:flex overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/Founder.webp"
                alt="Founder"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="xl:w-1/2 space-y-12">
            {/* Philosophy Image */}
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={img}
                alt="Our Philosophy"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#2D384B] mb-8">
                Our Philosophy
              </h3>
              <div className="space-y-6 text-[#2D384B]/90">
                <p className="text-lg leading-relaxed">
                  At Studio KAL, we believe every space should tell a story. With KAL
                  meaning "tomorrow" in Hindi, we aim to create timeless spaces that
                  feel just as beautiful today as they will tomorrow. Our work blends
                  artistry with functionality, resulting in interiors that are not
                  only elegant but also deeply personal.
                </p>

                <p className="text-lg leading-relaxed">
                  From full-scale design projects to styling consultations, we curate
                  spaces that reflect the individuality and lifestyle of our clients.
                  Whether it's a dream home, a boutique hotel, or a special shoot
                  setting, our approach is always tailored, thoughtful, and
                  uncompromising in quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;