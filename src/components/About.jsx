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
              className="rounded-2xl md:absolute md:top-0 md:left-0 shadow-2xl md:h-[300px] md:w-[49%] object-cover"
            />
          </div>
          <div className="w-1/2  hidden md:flex items-end">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Founder"
              className="rounded-2xl  md:absolute md:bottom-0 md:right-0 shadow-2xl md:h-[300px] md:w-[49%] object-cover"
            />
          </div>
        </div>

        {/* Content Right Side */}
        <div>
          <p className="uppercase text-sm tracking-widest mb-3 text-[#2D384B]">
            The Company
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#2D384B]">
            About Studio Kal <span className="italic">&amp; The Team</span>
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#2D384B]/80">
            Studio Kal is a premier interior design studio dedicated to crafting
            timeless, functional, and luxurious interiors. Every project we take on
            is guided by a deep passion for design, attention to detail, and a
            commitment to excellence. From concept to execution, we ensure that
            every space tells a unique story and reflects the personality of those
            who inhabit it.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-[#2D384B]/80">
            With years of experience, our team specializes in residential, commercial,
            and hospitality design. Whether it’s creating warm and inviting homes,
            sophisticated corporate offices, or statement-making retail spaces,
            our approach blends creativity with functionality. Each design is tailored
            to not only look stunning but also enhance the way people live and work.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default About;
