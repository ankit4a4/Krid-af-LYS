import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { 
      icon: <Mail className="text-[#2D384B]" />, 
      title: 'Email Us', 
      info: 'kal@kridaflys.com', 
      action: 'mailto:kal@kridaflys.com',
      bgColor: 'bg-[#DDCFCA]/40'
    },
    { 
      icon: <Phone className="text-[#2D384B]" />, 
      title: 'Call Us', 
      info: '+91 7983109747', 
      action: 'tel:+917983109747',
      bgColor: 'bg-[#DDCFCA]/40'
    },
    { 
      icon: <MapPin className="text-[#2D384B]" />, 
      title: 'Visit Us', 
      info: 'Abhishek Tower, 1 Subhash Road, Dehradun, Uttrakhand', 
      action: '#',
      bgColor: 'bg-[#DDCFCA]/40'
    },
    { 
      icon: <Clock className="text-[#2D384B]" />, 
      title: 'Working Hours', 
      info: 'Mon - Sat: 10AM - 6PM', 
      action: '#',
      bgColor: 'bg-[#DDCFCA]/40'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#2D384B] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2D384B] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#DDCFCA] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#2D384B] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm text-[#000] bg-[#fff] px-4 py-2 rounded-full mb-4">
            <span>Contact Us</span>
            <ArrowRight size={14} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-[#fff] to-[#fff] bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#fff] leading-relaxed">
            Ready to transform your space? Let's discuss your project and bring your design dreams to life. 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-8 text-[#2D384B]">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.action}
                    className="flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg shadow-sm hover:scale-105 group"
                  >
                    <div className={`p-4 rounded-2xl ${item.bgColor} group-hover:scale-110 transition-transform`}>
                      <div className="text-2xl">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#2D384B] group-hover:text-[#2D384B] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[#2D384B]/80 text-sm leading-relaxed">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-[#DDCFCA]/40 rounded-2xl">
                <h4 className="font-semibold text-[#2D384B] mb-2">Quick Response</h4>
                <p className="text-sm text-[#2D384B]/80">We typically respond within 2 hours during business hours.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 relative overflow-hidden">
              {/* Form Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DDCFCA] rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2D384B]/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#2D384B] mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-[#2D384B]/80">Fill out the form below and we'll get back to you soon.</p>
                </div>

                {isSubmitted && (
                  <div className="bg-[#DDCFCA]/60 border border-[#2D384B]/30 text-[#2D384B] p-4 rounded-xl mb-6 flex items-center gap-3 animate-fade-in">
                    <div className="w-3 h-3 bg-[#2D384B] rounded-full animate-pulse"></div>
                    Thank you for your message! We'll get back to you within 2 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text" 
                        name="name" 
                        placeholder="Full Name *" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                        className="w-full p-4 rounded-xl border border-[#DDCFCA] bg-white/50 focus:border-[#2D384B] focus:ring-2 focus:ring-[#2D384B]/30 outline-none transition-all duration-300 placeholder-[#2D384B]/60"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email" 
                        name="email" 
                        placeholder="Email Address *" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                        className="w-full p-4 rounded-xl border border-[#DDCFCA] bg-white/50 focus:border-[#2D384B] focus:ring-2 focus:ring-[#2D384B]/30 outline-none transition-all duration-300 placeholder-[#2D384B]/60"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number" 
                      value={formData.phone} 
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border border-[#DDCFCA] bg-white/50 focus:border-[#2D384B] focus:ring-2 focus:ring-[#2D384B]/30 outline-none transition-all duration-300 placeholder-[#2D384B]/60"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      name="message" 
                      placeholder="Tell us about your project... *" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows="6"
                      className="w-full p-4 rounded-xl border border-[#DDCFCA] bg-white/50 focus:border-[#2D384B] focus:ring-2 focus:ring-[#2D384B]/30 outline-none transition-all duration-300 placeholder-[#2D384B]/60 resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-3 bg-[#2D384B] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#DDCFCA] hover:text-[#2D384B] hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Send Message 
                    <Send size={18} className="animate-bounce-horizontal" />
                  </button>
                </form>

                <p className="text-center text-sm text-[#2D384B]/70 mt-4">
                  We respect your privacy. Your information is safe with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
