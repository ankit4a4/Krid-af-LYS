import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import img from "../../../public/images/HomeStaging.png"
import img2 from "../../../public/images/hotel.jpeg"
import img3 from "../../../public/images/Bedroom.jpg"
import img4 from "../../../public/images/Living Room.jpg"
import img5 from "../../../public/images/Kithcen2.jpeg"
const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'residential',
      image: img4,
      description: 'Contemporary design with clean lines and neutral palette'
    },
    {
      id: 2,
      title: 'Luxury Bedroom Suite',
      category: 'residential',
      image: img3,
      description: 'Elegant bedroom with sophisticated color scheme'
    },
    {
      id: 3,
      title: 'Corporate Office',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Professional workspace designed for productivity'
    },
    {
      id: 4,
      title: 'Kitchen Renovation',
      category: 'residential',
      image: img5,
      description: 'Modern kitchen with functional layout and style'
    },
    {
      id: 5,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      image: img2,
      description: 'Welcoming hotel space with luxury touches'
    },
    {
      id: 6,
      title: 'Home Staging Project',
      category: 'staging',
      image: img,
      description: 'Staged home ready for market success'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'staging', label: 'Home Staging' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className=" py-8 md:py-20" style={{ backgroundColor: '#ddcfca' }}> {/* bg-neutral-50 */}
      <div className="container mx-auto px-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ color: '#2D384B' }} // text-primary
          >
            Our Portfolio
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{ color: '#4B5563' }} // text-neutral-600
          >
            Explore our collection of beautifully designed spaces that showcase
            our commitment to excellence and attention to detail.
          </p>

          {/* Filter Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className="px-6 py-3 rounded-full font-medium transition-all duration-300"
                style={{
                  backgroundColor: filter === category.value ? '#2D384B' : '#FFFFFF', // bg-primary / bg-white
                  color: filter === category.value ? '#FFFFFF' : '#4B5563' // text-white / text-neutral-600
                }}
                onMouseEnter={(e) => {
                  if (filter !== category.value) e.currentTarget.style.backgroundColor = '#DDCFCA'; // hover:bg-peach
                  if (filter !== category.value) e.currentTarget.style.color = '#2D384B'; // hover:text-primary
                }}
                onMouseLeave={(e) => {
                  if (filter !== category.value) e.currentTarget.style.backgroundColor = '#FFFFFF';
                  if (filter !== category.value) e.currentTarget.style.color = '#4B5563';
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 ${index - 2 ? "object-bottom" : "object-center"}`}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(45,56,75,0.8), rgba(45,56,75,0.2), transparent)' // from-primary/80 via-primary/20 to-transparent
                  }}
                ></div>
              </div>

              <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div style={{ color: '#FFFFFF' }}>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm" style={{ color: 'rgba(229,231,235,1)' }}>{project.description}</p> {/* text-neutral-200 */}
                </div>
                <button
                  className="rounded-full p-3 transition-colors duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                >
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
