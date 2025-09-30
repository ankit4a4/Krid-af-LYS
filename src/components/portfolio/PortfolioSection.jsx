import React from 'react';

const PortfolioSection = () => {
    return (
        <section className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.adsttc.com/media/images/634e/5c9b/eb99/d038/7eb2/b3a7/large_jpg/interior-focus-curves_8.jpg?1666079905")'
                }}
            ></div>

            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                    Portfolio
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
                    Crafting digital experiences with passion and precision.
                    Transforming ideas into innovative solutions through creative design and cutting-edge technology.
                </p>
            </div>
        </section>
    );
};

export default PortfolioSection;
