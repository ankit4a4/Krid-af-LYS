import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#ddcfca] backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between py-2">
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <img
              src={isScrolled ? "/logo.png" : "/logo2.png"}
              className="h-14 md:h-22"
              alt="Company Logo"
            />
            <div className="leading-tight">
              <p
                className={`text-xl md:text-2xl  tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#1F2937]' : 'text-white'
                  }`}
              >
                STUDIO KAL
              </p>
              <p
                className={`text-sm md:text-base  transition-colors duration-300 ${isScrolled ? 'text-[#4B5563]' : 'text-gray-200'
                  }`}
              >
                Crafting Your Future Space
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <p
                key={link.href}
                onClick={() => navigate(`${link.href}`)}
                className={`font-medium cursor-pointer transition-colors duration-300 hover:text-[#DDCFCA] ${isScrolled ? 'text-[#1F2937]' : 'text-[#FFFFFF]'
                  }`}
              >
                {link.label}
              </p>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-[#2D384B]' : 'text-[#FFFFFF]'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFFFF] border-t border-[#3A4A60]">
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <p
                  key={link.href}
                  onClick={() => navigate(`${link.href}  ` , setIsMobileMenuOpen(false))}
                  className="block px-4 py-2 text-[#1F2937] hover:text-[#DDCFCA] transition-colors duration-300"
                >
                  {link.label}
                </p>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
