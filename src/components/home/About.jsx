import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#DDCFCA] py-8 md:py-20 px-6 md:px-10">
      <div className="container mx-auto grid lg:grid-cols-2 gap-4 md:gap-16 ">

        {/* Images Left Side */}
        <div className="flex gap-6 relative ">
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Interior"
              className="rounded-2xl md:absolute md:top-0 md:left-0 shadow-2xl md:h-[390px] md:w-[49%] object-cover"
            />
          </div>
          <div className="w-1/2 hidden md:flex items-end">
            <img
              src="/Founder.webp"
              alt="Founder"
              className="rounded-2xl md:absolute md:bottom-0 md:right-0 shadow-2xl md:h-[390px] md:w-[49%] object-cover"
            />
          </div>
        </div>

        {/* Content Right Side */}
        <div>
          <p className="uppercase text-sm tracking-widest mb-3 text-[#2D384B]">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#2D384B]">
            About Studio KAL
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#2D384B]/80">
            Studio KAL, officially Krid AF Lys, was founded by Tanvi Porwal in 2022 as a luxury interior design studio offering bespoke, end-to-end design services. With over a decade of experience in high-end residential, commercial, and hospitality projects across Delhi and the National Capital Region, Tanvi has now brought her expertise to Dehradun. Her boutique practice is dedicated to creativity, meticulous detailing, and the pursuit of exceptional design.
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#2D384B]">
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
