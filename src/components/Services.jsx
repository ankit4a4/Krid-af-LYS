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
      description: "Strategic staging to maximize your property's market appeal",
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
      className="py-8 md:py-20 relative"
      style={{ backgroundColor: '#2D384B' }} // dark section bg
    >
      <div className="container px-6 md:px-10 mx-auto relative z-10">
        <div className="text-center mb-4 md:mb-16">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-gray-200"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            From concept to completion, we offer comprehensive interior design services
            tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              {/* Icon Circle */}
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#2D384B] to-[#4B5C72] text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(service.icon, { size: 28 })}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-[#2D384B] group-hover:text-[#1E2A3A] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2.5 h-2.5 rounded-full mr-3 bg-[#2D384B]"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative gradient line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2D384B] to-[#4B5C72] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05), transparent)' }}
      ></div>
    </section>
  );
};

export default Services;
