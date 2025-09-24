import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Team = () => {
  const team = [
    {
      id: 1,
      name: 'Tanvi Porwal',
      role: 'Founder & Lead Designer',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'With over 3 years of experience in interior design, Tanvi brings creativity, expertise, and a keen eye for detail to every project.',
      specialties: ['Residential Design', 'Space Planning', 'Color Consultation', 'Project Management'],
      contact: { email: 'kal@kridaflys.com', phone: '+91 7983109747' }
    },
    {
      id: 2,
      name: 'Rohit Sharma',
      role: 'Senior Interior Designer',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Rohit specializes in creating elegant and functional spaces. With an eye for detail, he ensures every project meets highest standards.',
      specialties: ['Commercial Design', 'Furniture Selection', 'Lighting Design', 'Project Execution'],
      contact: { email: 'rohit@kridaflys.com', phone: '+91 9876543210' }
    },
    {
      id: 3,
      name: 'Anjali Mehta',
      role: 'Interior Stylist',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Anjali focuses on styling and decor, bringing creativity and personality into every project.',
      specialties: ['Styling', 'Artwork Placement', 'Textile Coordination', 'Accessory Selection'],
      contact: { email: 'anjali@kridaflys.com', phone: '+91 9123456789' }
    }
  ];

  return (
    <section id="team" className="py-12 md:py-20 bg-[#ddcfca]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Meet Our Team
          </h2>
          <p
            className="text-gray-800 text-base max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Get to know the talented professionals behind Studio Kal who bring
            passion, creativity, and expertise to every project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#DDCFCA] text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-white text-sm mb-2">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-700">
                  <div className="flex items-center text-gray-300">
                    <Mail size={14} className="mr-2 text-[#DDCFCA]" />
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="text-sm hover:text-[#DDCFCA] transition-colors"
                    >
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone size={14} className="mr-2 text-[#DDCFCA]" />
                    <a
                      href={`tel:${member.contact.phone}`}
                      className="text-sm hover:text-[#DDCFCA] transition-colors"
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