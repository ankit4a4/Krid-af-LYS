import React from 'react';
import { Home, Palette, Camera, Settings, Lightbulb, PaintBucket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home />,
      title: 'Interior Design',
      description: 'Complete interior design solutions for residential and commercial spaces',
      features: ['Space Planning', 'Color Schemes', 'Furniture Selection', '3D Visualization']
    },
    {
      icon: <Palette />,
      title: 'Interior Styling',
      description: 'Professional styling services to enhance your existing space',
      features: ['Accessory Selection', 'Artwork Placement', 'Textile Coordination', 'Final Touches']
    },
    {
      icon: <Camera />,
      title: 'Home Staging',
      description: 'Strategic staging to maximize your property\'s market appeal',
      features: ['Market Analysis', 'Furniture Rental', 'Photography Ready', 'Quick Turnaround']
    },
    {
      icon: <Settings />,
      title: 'Project Management',
      description: 'End-to-end project coordination and execution',
      features: ['Timeline Management', 'Vendor Coordination', 'Quality Control', 'Budget Oversight']
    },
    {
      icon: <Lightbulb />,
      title: 'Design Consultation',
      description: 'Expert advice and guidance for your design projects',
      features: ['Design Direction', 'Material Selection', 'Layout Optimization', 'Problem Solving']
    },
    {
      icon: <PaintBucket />,
      title: 'Color Consultation',
      description: 'Professional color schemes and paint selection',
      features: ['Color Psychology', 'Paint Selection', 'Accent Planning', 'Lighting Integration']
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 " 
      style={{ backgroundColor: 'rgba(58,74,96,0.1)' }} // bg-primary-light/10
    >
      <div className="container px-10 mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            data-aos="fade-up" 
            data-aos-duration="1000"
            style={{ color: '#2D384B' }} // text-primary
          >
            Our Services
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-delay="200"
            style={{ color: '#1F2937' }} // text-primary-dark
          >
            From concept to completion, we offer comprehensive interior design services 
            tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 card-hover group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              style={{ backgroundColor: 'rgba(58,74,96,0.2)' }} // bg-primary-light/20
            >
              <div style={{ color: '#DDCFCA' }} className="mb-6 group-hover:scale-110 transition-transform duration-300"> {/* text-peach */}
                {React.cloneElement(service.icon, { size: 48 })}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2D384B' }}> {/* text-primary */}
                {service.title}
              </h3>
              
              <p className="mb-6 leading-relaxed" style={{ color: '#1F2937' }}> {/* text-primary-dark */}
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm" style={{ color: '#1F2937' }}> {/* text-primary-dark */}
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#DDCFCA' }}></div> {/* bg-peach */}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
