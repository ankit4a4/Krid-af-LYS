import React from "react";

const CTASection = () => {
    return (
        <section className="relative bg-[#2d384b] py-16 md:py-24 overflow-hidden border-b border-white">
            {/* Decorative background circles */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ddcfca]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ddcfca]/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#ddcfca] mb-6 leading-tight">
                    Let’s Design Your Story
                </h2>
                <p className="text-[#ddcfca]/80 text-lg mb-10">
                    Ready to bring your dream space to life? Let’s collaborate to craft interiors
                    that reflect your vision, lifestyle, and personality.
                </p>

                {/* Button */}
                <button
                    href="/contact"
                    className="inline-block bg-[#ddcfca] text-[#2d384b] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-transparent hover:text-[#ddcfca] border-2 border-[#ddcfca]"
                >
                    Get in Touch
                </button>
            </div>
        </section>
    );
};

export default CTASection;
