import React from 'react';
import img1 from "../../../public/images/Interior Design.webp"
import img2 from "../../../public/images/Interior Styling.jpg"
import img3 from "../../../public/images/HomeStaging.jpg"
import img4 from "../../../public/images/ProjectManagement.jpeg"
import img5 from "../../../public/images/Design Consultation.jpg"
import img6 from "../../../public/images/Color Consultation.png"





const Services = () => {
  const services = [
    {
      image: img1,
      title: 'Interior Design',
      secondTitle : "hospitality",
      description: 'Complete interior design solutions for residential and commercial spaces. Our team begins by understanding your lifestyle, preferences, and the functionality you require from each space. We provide meticulous space planning, create harmonious color schemes, select the perfect furniture, and design layouts that maximize comfort and aesthetics. Using advanced 3D visualization, we bring your vision to life before execution. Every project is tailored to your unique taste, ensuring a perfect blend of style, functionality, and elegance.',
      features: ['Space Planning',  'Furniture Selection', 'Color Schemes', '3D Visualization']
    },
    {
      image: img2,
      title: 'Interior Styling',
      description: 'Professional styling services to enhance your existing space. From accessory selection to artwork placement, textile coordination, and final touches, we transform your interiors into a cohesive and stylish environment. Each element is carefully curated to reflect your personality and complement the overall design of your home or office.',
      features: ['Artwork Placement', 'Textile Coordination', 'Accessory Selection', 'Final Touches']
    },
    {
      image: img3,
      title: 'Home Staging',
      description: "Strategic home staging to maximize your property’s market appeal.  choose the right furniture, arrange spaces for optimal flow, and make it photography-ready. Our goal is to highlight your property’s strengths, attract potential buyers, and help you sell faster at the best price.",
      features: ['Market Analysis', 'Furniture Rental', 'Photography Ready', 'Quick Turnaround']
    },
    {
      image: img4,
      title: 'Project Management',
      description: 'End-to-end project coordination and execution. We manage timelines, coordinate vendors, oversee quality control, and monitor budgets. Our proactive approach ensures projects are delivered on time, within budget, and to the highest standards. From concept to completion, we handle every detail so you can enjoy a stress-free experience.',
      features: ['Timeline Management', 'Vendor Coordination', 'Quality Control', 'Budget Oversight']
    },
    {
      image: img5,
      title: 'Design Consultation',
      description: 'Expert advice and guidance for your design projects. We provide personalized design direction, help select the best materials, optimize layouts, and solve practical design challenges. Our consultations empower you to make informed decisions and create spaces that are beautiful, functional, and reflective of your style.',
      features: ['Design Direction', 'Material Selection', 'Layout Optimization', 'Problem Solving']
    },
    {
      image: img6,
      title: 'Color Consultation',
      description: 'Professional color schemes and paint selection services. We study color psychology, coordinate accents, plan lighting integration, and suggest palettes that elevate your interiors. Whether for a single room or an entire property, our color consultation ensures a harmonious and visually appealing result.',
      features: ['Color Psychology', 'Paint Selection', 'Accent Planning', 'Lighting Integration']
    }
  ];

  return (
    <section
      id="services"
      className="py-8 md:py-20 relative"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="container px-6 md:px-10 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#2D384B]"
            data-aos="fade-up" data-aos-duration="1000">
            Our Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            From concept to completion, we offer comprehensive interior design services
            tailored to your unique needs and vision.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 md:h-80 object-cover rounded-md"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
              <div className='flex items-center justify-between'>
                  <h3 className="text-2xl font-semibold mb-4 text-[#2D384B]">
                  {service.title}
                </h3>
                  <h3 className="text-2xl font-semibold mb-4 text-[#2D384B] md:pr-6">
                  {service.secondTitle}
                </h3>
              </div>
                <p className="leading-relaxed text-gray-700 mb-4">
                  {service.description}
                </p>
                {/* Key Points */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="bg-[#2D384B] text-white text-sm px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
