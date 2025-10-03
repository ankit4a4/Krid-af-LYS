import React from 'react';
import { ArrowRight } from 'lucide-react';
import img from "../../../public/images/heroSectionImage.jpg"

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden ">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/20 "></div>
      </div>
    </section>
  );
};

export default Hero;
