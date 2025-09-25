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
              className="rounded-2xl md:absolute md:top-0 md:left-0 shadow-2xl md:h-[350px] md:w-[49%] object-cover"
            />
          </div>
          <div className="w-1/2 hidden md:flex items-end">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Founder"
              className="rounded-2xl md:absolute md:bottom-0 md:right-0 shadow-2xl md:h-[350px] md:w-[49%] object-cover"
            />
          </div>
        </div>

        {/* Content Right Side */}
        <div>
          <p className="uppercase text-sm tracking-widest mb-3 text-[#2D384B]">
            The Company
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#2D384B]">
            About Studio KAL
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#2D384B]/80">
            Studio KAL - Krid AF Lys - was founded in 2022 by Tanvi Porwal as a luxury interior design studio offering bespoke, end-to-end design services. Tanvi brings over a decade of high-end residential, commercial, and hospitality experience throughout Delhi and has taken her expertise to Dehradun to open a boutique practice focused on creativity and detail.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-[#2D384B]/80">
            At Studio KAL, we believe space should tell a story. Our work fuses artistry with functionality to create interior spaces that are not only beautiful but personal. From full-scale design projects to styling consultations, we design spaces that cater to the unique personality and dreams of each of our clients.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-[#2D384B]/80">
            Whether it's a dream home, a boutique hotel, or a special shoot setting, we always design with a tailored approach, with a thoughtful process, while maintaining uncompromising quality. With "KAL" meaning tomorrow in Hindi, we simply believe in creating timeless spaces while thinking of the future—spaces that will feel as beautiful today as they will tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
