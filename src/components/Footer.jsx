import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D384B] text-white py-8 md:py-16 md:pb-4">
      <div className="container px-10 mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">KRID af LYS</h3>
            <p className="text-[#DDCFCA] mb-6 leading-relaxed max-w-md">
              Transforming spaces into beautiful, functional environments that inspire and delight. Your vision, our expertise, exceptional results.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="mr-3 text-[#DDCFCA] flex-shrink-0" size={18} />
                <a href="mailto:kal@kridaflys.com" className="hover:text-[#FBC7B8] transition-colors duration-300">
                  kal@kridaflys.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-[#DDCFCA] flex-shrink-0" size={18} />
                <a href="tel:+917983109747" className="hover:text-[#FBC7B8] transition-colors duration-300">
                  +91 7983109747
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 text-[#DDCFCA] flex-shrink-0 mt-1" size={18} />
                <address className="not-italic">
                  Abhishek Tower, 1 Subhash Road,<br />
                  Dehradun, Uttrakhand
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-[#DDCFCA] hover:text-[#FBC7B8] transition-colors duration-300">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-[#DDCFCA]">
              <li>Interior Design</li>
              <li>Interior Styling</li>
              <li>Home Staging</li>
              <li>Project Management</li>
              <li>Design Consultation</li>
              <li>Color Consultation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 pt-3 flex flex-col md:flex-row justify-center items-center">
          <p className="text-[#DDCFCA] mb-4 md:mb-0">© {currentYear} KRID af LYS. All rights reserved. | Powered by <a href="https://rankmantra.com/" target='_blank'>Rankmantra</a> </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
