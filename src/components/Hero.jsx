import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Existing overlay (optional) */}
        <div className="absolute inset-0 bg-primary-dark/40"></div>
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 
          className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          Transform Your
          <span className="block text-peach mt-2">Living Space</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-8 text-primary-light max-w-2xl mx-auto font-light"
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="200"
        >
          Creating beautiful, functional interiors that reflect your personality and lifestyle
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="400"
        >
          <a href="#portfolio" className="btn-primary group">
            View Our Work
            <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" size={20} />
          </a>
          <a href="#contact" className="btn-secondary">
            Start Your Project
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
