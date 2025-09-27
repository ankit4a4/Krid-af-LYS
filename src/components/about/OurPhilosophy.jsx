import React from "react";
import { FaPaintBrush, FaSearchPlus, FaInfinity, FaUserCheck } from "react-icons/fa";

const OurPhilosophy = () => {
  return (
    <section className="py-8 md:py-24 bg-[#2d384b] relative overflow-hidden ">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ddcfca]/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ddcfca]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10 ">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-16">
          <span className="text-sm font-semibold tracking-widest text-[#ddcfca] uppercase mb-4 block opacity-80">
            What Drives Us
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Our <span className="text-[#ddcfca]">Philosophy</span>
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-20 h-1 bg-gradient-to-r from-[#ddcfca] to-white rounded-full mr-4"></div>
            <div className="w-3 h-3 bg-[#ddcfca] rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-[#ddcfca] to-white rounded-full ml-4"></div>
          </div>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-20">
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/20">
            <p className="text-lg md:text-xl leading-relaxed text-[#f0ebe9] mb-6">
              At <span className="font-bold text-[#ddcfca]">Studio KAL</span>, we believe every space should tell a story. With 
              <strong> KAL </strong>meaning "tomorrow" in Hindi, we aim to create timeless spaces that feel just as beautiful today 
              as they will tomorrow. Our work blends artistry with functionality, resulting in interiors that are not only elegant 
              but also deeply personal.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#f0ebe9]">
              From full-scale design projects to styling consultations, we curate spaces that reflect the individuality and lifestyle 
              of our clients. Whether it's a dream home, a boutique hotel, or a special shoot setting, our approach is always tailored, 
              thoughtful, and uncompromising in quality.
            </p>
          </div>
        </div>

        {/* Value Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Block */}
          {[
            { icon: <FaPaintBrush />, title: "Creativity", text: "Innovative design ideas that bring unique character and charm to every space." },
            { icon: <FaSearchPlus />, title: "Detail", text: "Every element is thoughtfully curated for harmony, quality, and elegance." },
            { icon: <FaInfinity />, title: "Timelessness", text: "Designs crafted to remain beautiful and relevant for years to come." },
            { icon: <FaUserCheck />, title: "Personalization", text: "Every project is tailored to reflect our clients' personality and lifestyle." }
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-[#ddcfca] text-[#2d384b] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[#ddcfca] text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-4 md:mt-16 flex justify-center">
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#ddcfca] to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
