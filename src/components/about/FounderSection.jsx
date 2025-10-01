import React from "react";

const FounderSection = () => {
    return (
        <section className="py-8 md:py-24 bg-[#f8f5f4] relative overflow-hidden">
            {/* Decorative blurred circles */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#ddcfca]/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ddcfca]/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-10 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold tracking-widest text-[#2d384b] uppercase mb-4 block opacity-80">
                        Meet the Founder
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#2d384b] leading-tight">
                        Tanvi <span className="text-[#2d384b]">Porwal</span>
                    </h2>
                    <div className="flex justify-center items-center">
                        <div className="w-20 h-1 bg-gradient-to-r from-[#ddcfca] to-[#2d384b] rounded-full mr-4"></div>
                        <div className="w-3 h-3 bg-[#ddcfca] rounded-full"></div>
                        <div className="w-20 h-1 bg-gradient-to-l from-[#ddcfca] to-[#2d384b] rounded-full ml-4"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-lg rounded-2xl p-3">
                    {/* Image */}
                    <div className="flex justify-center  relative">
                        <img
                            src="/Founder.webp"
                            alt="Tanvi Porwal"
                            className="relative md:h-[460px] rounded-2xl shadow-xl w-full object-cover z-10"
                        />
                    </div>

                    {/* Bio */}
                    <div>
                        <p className="text-lg md:text-xl text-[#2d384b] leading-relaxed mb-6">
                            Tanvi Porwal is the creative force behind <strong>Studio KAL</strong>.
                            With over a decade of experience in luxury interior design, she has successfully led
                            numerous high-end residential, commercial, and hospitality projects. Her journey began
                            with a vision to craft spaces that seamlessly blend elegance, functionality, and individuality.
                        </p>
                        <p className="text-lg md:text-xl text-[#2d384b] leading-relaxed mb-8">
                            Today, Tanvi brings her signature aesthetic and meticulous detailing to every project,
                            ensuring that each space tells a unique story. Her boutique practice in Dehradun reflects
                            her passion for timeless, soulful design.
                        </p>

                        {/* Quote */}
                        <div className="border-l-4 border-[#ddcfca] pl-4 italic text-[#2d384b] text-lg font-medium">
                            “Design is not just about how a space looks — it’s about how it makes you feel.”
                        </div>

                        {/* Signature */}
                        <div className="mt-6">
                            {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/59/Signature_example.svg"
                alt="Signature"
                className="w-40 opacity-80"
              /> */}
                            <p className="text-[#2d384b] font-semibold mt-1">Tanvi Porwal</p>
                            <p className="text-sm text-[#2d384b]/70">Founder & Principal Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
