import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
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
                className={`text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#1F2937]' : 'text-white'
                  }`}
              >
                Studio Kal
              </p>
              <p
                className={`text-sm md:text-base font-medium transition-colors duration-300 ${isScrolled ? 'text-[#4B5563]' : 'text-gray-200'
                  }`}
              >
                Crafting Your Future Space
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-[#DDCFCA] ${isScrolled ? 'text-[#1F2937]' : 'text-[#FFFFFF]'
                  }`}
              >
                {link.label}
              </a>
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
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-[#1F2937] hover:text-[#DDCFCA] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
