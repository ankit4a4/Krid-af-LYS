import React from 'react';
// import img from "../../../public/images/"

const ServiceHero = () => {
  return (
    <section
      className="relative py-20 md:py-32 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://rumahmebel.id/wp-content/uploads/2023/02/Desain-Interior-Kontemporer.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We offer complete interior solutions to transform your spaces with creativity, functionality, and style.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
