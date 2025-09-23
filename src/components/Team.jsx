import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'Tanvi Porwal',
      role: 'Founder & Lead Designer',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'With over 3 years of experience in interior design, Tanvi brings creativity, expertise, and a keen eye for detail to every project. Her passion for transforming spaces has made her a sought-after designer in the region.',
      specialties: ['Residential Design', 'Space Planning', 'Color Consultation', 'Project Management'],
      contact: {
        email: 'kal@kridaflys.com',
        phone: '+91 7983109747'
      }
    }
  ];

  return (
    <section id="team" className="py-8 md:py-20" style={{ backgroundColor: '#FFFFFF' }}> {/* bg-white */}
      <div className="container mx-auto px-10 ">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            data-aos="fade-up" 
            data-aos-duration="1000"
            style={{ color: '#2D384B' }} // text-primary
          >
            Meet Our Team
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-delay="200"
            style={{ color: '#4B5563' }} // text-neutral-600
          >
            Get to know the talented professionals behind KRID af LYS who bring 
            passion, creativity, and expertise to every project.
          </p>
        </div>

        <div className="flex justify-center">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="max-w-lg rounded-2xl overflow-hidden card-hover"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              style={{ backgroundColor: '#F9FAFB' }} // bg-neutral-50
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(45,56,75,0.2), transparent)' }} // from-primary/20 to-transparent
                ></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#2D384B' }}> {/* text-primary */}
                  {member.name}
                </h3>
                <p className="font-medium mb-4" style={{ color: '#DDCFCA' }}> {/* text-peach */}
                  {member.role}
                </p>
                <p className="mb-6 leading-relaxed" style={{ color: '#4B5563' }}> {/* text-neutral-600 */}
                  {member.bio}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3" style={{ color: '#2D384B' }}> {/* text-primary */}
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{
                          backgroundColor: 'rgba(221,207,202,0.2)', // bg-peach/20
                          color: '#2D384B' // text-primary
                        }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center" style={{ color: '#4B5563' }}> {/* text-neutral-600 */}
                    <Mail size={16} className="mr-3" style={{ color: '#DDCFCA' }} /> {/* text-peach */}
                    <a 
                      href={`mailto:${member.contact.email}`}
                      style={{ color: '#4B5563', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#DDCFCA'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                    >
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center" style={{ color: '#4B5563' }}> {/* text-neutral-600 */}
                    <Phone size={16} className="mr-3" style={{ color: '#DDCFCA' }} /> {/* text-peach */}
                    <a 
                      href={`tel:${member.contact.phone}`}
                      style={{ color: '#4B5563', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#DDCFCA'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}
                    >
                      {member.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
