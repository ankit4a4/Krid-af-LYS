import React from "react";
import img from "../../../public/images/ourpilocipy.jpg"

const About = () => {
  return (
    <section id="about" className="bg-[#DDCFCA] py-8 md:py-20 px-6 md:px-10">
      <div className="container mx-auto md:flex  gap-4 md:gap-16 ">

        {/* Images Left Side */}
        <div className="flex gap-6 flex-col  relative md:w-[40%] ">
          <div className="md:flex md:items-end md:justify-end ">
            <img
              src="/Founder.webp"
              alt="Interior"
              className="rounded-2xl mt-3  md:top-0 md:left-0 shadow-2xl md:h-[320px] md:w-[80%] object-cover"
            />
          </div>
          <div className=" hidden md:flex md:items-end md:justify-end">
            <img
              src={img}
              alt="Founder"
              className="rounded-2xl  md:bottom-0 md:right-0 shadow-2xl md:h-[300px] md:w-[80%] object-cover"
            />
          </div>
        </div>

        {/* Content Right Side */}
        <div className="md:w-[60%]">
          <p className="uppercase text-sm tracking-widest mt-3 mb-3 text-[#2D384B]">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#2D384B]">
            About Studio KAL
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#2D384B]/80">
            Studio KAL,  Krid AF Lys, was founded by Tanvi Porwal in 2022 as a luxury interior design studio offering bespoke, end-to-end design services. With over a decade of experience in high-end residential, commercial, and hospitality projects across Delhi and the National Capital Region, Tanvi has now brought her expertise to Dehradun. Her boutique practice is dedicated to creativity, meticulous detailing, and the pursuit of exceptional design.
          </p>

          <img
            src={img}
            alt="Interior"
            className="rounded-2xl mb-3 md:hidden md:absolute md:top-0 md:left-0 shadow-2xl md:h-[390px] md:w-[49%] object-cover"
          />
          <h2 className="text-4xl md:text-5xl font-serif md:mt-[73px] font-bold mb-6 text-[#2D384B]">
            Our Philosophy
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#2D384B]/80">
            At Studio KAL, we believe every space should tell a story. With KAL meaning “tomorrow” in Hindi, we aim to create timeless spaces that feel just as beautiful today as they will tomorrow. Our work blends artistry with functionality, resulting in interiors that are not only elegant but also deeply personal.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-[#2D384B]/80">
            From full-scale design projects to styling consultations, we curate spaces that reflect the individuality and lifestyle of our clients. Whether it’s a dream home, a boutique hotel, or a special shoot setting, our approach is always tailored, thoughtful, and uncompromising in quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
