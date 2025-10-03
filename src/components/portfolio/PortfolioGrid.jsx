import React from 'react';
import img1 from "../../../public/images/Living Room.jpg";
import img2 from "../../../public/images/Bedroom.jpg";
import img3 from "../../../public/images/Kithcen2.jpeg";
import img4 from "../../../public/images/Living Room.jpg";

const PortfolioSection = () => {
    const projects = [
        { id: 1, description: 'Contemporary design with clean lines and neutral palette', image: img1 },
        { id: 2, description: 'Elegant bedroom with sophisticated color scheme', image: img2 },
        { id: 3, description: 'Modern kitchen with functional layout and style', image: img3 },
        { id: 4, description: 'Stylish decor accents and furnishings', image: img4 },
    ];
    return (
        <section className="bg-[#f5e9e1] py-14 md:py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <img
                                src={project.image}
                                alt={`Project ${index + 1}`}
                                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <p className="text-white text-center px-6">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
