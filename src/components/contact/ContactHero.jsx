import React from 'react';

const ContactHero = () => {
  return (
    <section
      className="relative md:mt-34 mt-14 flex items-center justify-center h-96 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')`
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl">
          We'd love to hear from you! Reach out to us for consultations, queries, or collaborations.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
