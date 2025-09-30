import React from 'react';

const PortfolioSection = () => {
    const projects = [
        // Interior Design
        { id: 1, service: 'Interior Design', title: 'Modern Living Room', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Contemporary design with clean lines and neutral palette' },
        { id: 2, service: 'Interior Design', title: 'Luxury Bedroom Suite', image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Elegant bedroom with sophisticated color scheme' },
        { id: 3, service: 'Interior Design', title: 'Kitchen Renovation', image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Modern kitchen with functional layout and style' },

        // Interior Styling
        { id: 4, service: 'Interior Styling', title: 'Living Room Decor', image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Stylish decor accents and furnishings' },
        { id: 5, service: 'Interior Styling', title: 'Bedroom Styling', image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Cozy and aesthetic bedroom styling' },
        { id: 6, service: 'Interior Styling', title: 'Office Styling', image: 'https://images.pexels.com/photos/3807683/pexels-photo-3807683.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Professional workspace styling' },

        // Home Staging
        { id: 7, service: 'Home Staging', title: 'Staged Living Room', image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Ready for market sale' },
        { id: 8, service: 'Home Staging', title: 'Bedroom Staging', image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Neutral and inviting bedroom' },
        { id: 9, service: 'Home Staging', title: 'Kitchen Staging', image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Functional and aesthetic kitchen setup' },

        // Project Management
        { id: 10, service: 'Project Management', title: 'Office Project', image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Managed from planning to execution' },
        { id: 11, service: 'Project Management', title: 'Residential Project', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Seamless execution with attention to detail' },
        { id: 12, service: 'Project Management', title: 'Commercial Project', image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Efficient management and delivery' },

        // Design Consultation
        { id: 13, service: 'Design Consultation', title: 'Interior Consultation', image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Expert advice for interiors' },
        { id: 14, service: 'Design Consultation', title: 'Color & Layout', image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Guidance for perfect layout & color' },
        { id: 15, service: 'Design Consultation', title: 'Furniture Placement', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Optimized furniture arrangement' },

        // Color Consultation
        { id: 16, service: 'Color Consultation', title: 'Living Room Colors', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Perfect color palette selection' },
        { id: 17, service: 'Color Consultation', title: 'Bedroom Colors', image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Soothing and aesthetic colors' },
        { id: 18, service: 'Color Consultation', title: 'Office Colors', image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', description: 'Professional color guidance' },
    ];

    const services = [...new Set(projects.map(p => p.service))];

    return (
        <section className="pt-8 py-0 pb-1 md:py-16 bg-[#ddcfca]">
            <div className="max-w-6xl mx-auto px-4">
                {services.map(service => (
                    <div key={service} className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{service}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {projects.filter(p => p.service === service).map(project => (
                                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
                                    <div className="relative group">
                                        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                            <p className="text-white text-center px-4">{project.description}</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                                        <p className="text-gray-500">{project.service}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection;
