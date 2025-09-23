import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email Us',
      info: 'kal@kridaflys.com',
      action: 'mailto:kal@kridaflys.com'
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      info: '+91 7983109747',
      action: 'tel:+917983109747'
    },
    {
      icon: <MapPin />,
      title: 'Visit Us',
      info: 'Abhishek Tower, 1 Subhash Road, Dehradun, Uttrakhand',
      action: '#'
    },
    {
      icon: <Clock />,
      title: 'Working Hours',
      info: 'Mon - Sat: 9AM - 6PM',
      action: '#'
    }
  ];

  return (
    <section id="contact" className="py-8 md:py-20" style={{ backgroundColor: '#F9FAFB' }}> {/* bg-neutral-50 */}
      <div className="container px-10 mx-auto ">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ color: '#2D384B' }} // text-primary
          >
            Get In Touch
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{ color: '#4B5563' }}
          >
            Ready to transform your space? Let's discuss your project and bring
            your design dreams to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-2xl font-semibold mb-8" style={{ color: '#2D384B' }}> {/* text-primary */}
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(221,207,202,0.2)', color: '#2D384B' }}> {/* bg-peach/20 text-primary */}
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#2D384B' }}>{item.title}</h4>
                    <p style={{ color: '#4B5563' }}>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="font-semibold mb-4" style={{ color: '#2D384B' }}>Follow Us</h4>
              <div className="flex space-x-4">
                {/* Social icons */}
                <a href="#" style={{ backgroundColor: '#2D384B', color: '#FFFFFF', padding: '0.75rem', borderRadius: '50%' }}>
                  {/* Twitter */}
                </a>
                <a href="#" style={{ backgroundColor: '#2D384B', color: '#FFFFFF', padding: '0.75rem', borderRadius: '50%' }}>
                  {/* Facebook */}
                </a>
                <a href="#" style={{ backgroundColor: '#2D384B', color: '#FFFFFF', padding: '0.75rem', borderRadius: '50%' }}>
                  {/* Instagram */}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '1rem', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#2D384B' }}>Send Us a Message</h3>

              {isSubmitted && (
                <div style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#4B5563' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #D1D5DB',
                        transition: 'box-shadow 0.3s',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 3px rgba(221,207,202,0.5)'}
                      onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#4B5563' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #D1D5DB',
                        transition: 'box-shadow 0.3s',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 3px rgba(221,207,202,0.5)'}
                      onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#4B5563' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #D1D5DB',
                      transition: 'box-shadow 0.3s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 3px rgba(221,207,202,0.5)'}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#4B5563' }}>
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #D1D5DB',
                      transition: 'box-shadow 0.3s',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 3px rgba(221,207,202,0.5)'}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#2D384B',
                    color: '#FFFFFF',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  Send Message
                  <Send className="ml-2" size={20} />
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
