import React from 'react';
import { Award, Users, Star, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award />, number: '50+', label: 'Projects Completed' },
    { icon: <Users />, number: '100+', label: 'Happy Clients' },
    { icon: <Star />, number: '5', label: 'Star Rating' },
    { icon: <Clock />, number: '3+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="" style={{ backgroundColor: '#F9FAFB' }}> {/* bg-neutral-50 */}
      <div className="py-20 px-10 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              style={{ color: '#2D384B' }} // text-primary
            >
              About KRID af LYS
            </h2>
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: '#4B5563' }} // text-neutral-600
            >
              Founded by Tanvi Porwal, KRID af LYS is a premier interior design studio
              dedicated to creating spaces that inspire and delight. Our philosophy centers
              on the belief that great design should be both beautiful and functional.
            </p>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: '#4B5563' }} // text-neutral-600
            >
              We specialize in residential and commercial interior design, bringing together
              creativity, expertise, and attention to detail to transform ordinary spaces
              into extraordinary environments.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-2 flex justify-center" style={{ color: '#DDCFCA' }}> {/* text-peach */}
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold" style={{ color: '#2D384B' }}> {/* text-primary */}
                    {stat.number}
                  </div>
                  <div className="text-sm" style={{ color: '#4B5563' }}> {/* text-neutral-600 */}
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern interior design"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(45,56,75,0.2), transparent)' }} // from-primary/20 to-transparent
              ></div>
            </div>

            {/* Floating Card */}
            <div
              className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl animate-float"
              style={{ backgroundColor: '#FFFFFF' }} // bg-white
            >
              <div className="text-2xl font-bold" style={{ color: '#2D384B' }}>Design</div> {/* text-primary */}
              <div style={{ color: '#DDCFCA' }}>Excellence</div> {/* text-peach */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
