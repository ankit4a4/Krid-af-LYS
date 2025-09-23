import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

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
    { icon: <Mail />, title: 'Email Us', info: 'kal@kridaflys.com', action: 'mailto:kal@kridaflys.com' },
    { icon: <Phone />, title: 'Call Us', info: '+91 7983109747', action: 'tel:+917983109747' },
    { icon: <MapPin />, title: 'Visit Us', info: 'Abhishek Tower, 1 Subhash Road, Dehradun, Uttrakhand', action: '#' },
    { icon: <Clock />, title: 'Working Hours', info: 'Mon - Sat: 9AM - 6PM', action: '#' }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary" style={{ color: '#2D384B' }}>
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Ready to transform your space? Let's discuss your project and bring your design dreams to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <h3 className="text-2xl font-semibold mb-8 text-primary" style={{ color: '#2D384B' }}>
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <a key={idx} href={item.action} className="flex items-start gap-4 hover:bg-gray-100 p-4 rounded-xl transition-all shadow-sm">
                  <div className="p-3 rounded-full flex-shrink-0 bg-peach/20 text-primary text-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{item.title}</h4>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="font-semibold mb-4 text-primary" style={{ color: '#2D384B' }}>Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform">T</a>
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform">F</a>
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:scale-110 transition-transform">I</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-semibold mb-6 text-primary" style={{ color: '#2D384B' }}>Send Us a Message</h3>

              {isSubmitted && (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required
                    className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-peach outline-none transition-shadow"
                  />
                  <input
                    type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required
                    className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-peach outline-none transition-shadow"
                  />
                </div>

                <input
                  type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-peach outline-none transition-shadow"
                />

                <textarea
                  name="message" placeholder="Project Details *" value={formData.message} onChange={handleChange} required rows="6"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-peach outline-none transition-shadow resize-none"
                />

                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl hover:scale-105 transition-transform">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
