import React from 'react'

const HeroAbout = () => {
    return (
        <section
            className="relative h-[40vh] md:h-[70vh] bg-center bg-cover flex items-center justify-center text-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    About Studio KAL
                </h1>
                <p className="text-lg md:text-2xl mb-6">
                    Crafting timeless spaces with elegance & soul.
                </p>

            </div>
        </section>
    )
}

export default HeroAbout
