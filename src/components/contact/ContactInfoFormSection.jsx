import React from 'react';

const ContactInfoFormSection = () => {
    return (
        <section className="py-8 md:py-16" style={{ backgroundColor: '#ddcfca' }}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2d384b' }}>
                            Get in Touch
                        </h2>
                        <p className="mb-6" style={{ color: '#2d384b' }}>
                            Feel free to reach out to us for any queries, consultations, or collaborations. Our team is always ready to assist you.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg" style={{ color: '#2d384b' }}>Phone</h3>
                                <p style={{ color: '#2d384b' }}>+91 7983109747</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg" style={{ color: '#2d384b' }}>Email</h3>
                                <p style={{ color: '#2d384b' }}>kal@kridaflys.com</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg" style={{ color: '#2d384b' }}>Address</h3>
                                <p style={{ color: '#2d384b' }}>Abhishek Tower, 1 Subhash Road,
                                    Dehradun, Uttrakhand</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg" style={{ color: '#2d384b' }}>Working Hours</h3>
                                <p style={{ color: '#2d384b' }}>Mon - Sat: 10:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2d384b' }}>
                            Send Us a Message
                        </h2>
                        <form className="rounded-lg p-8 space-y-6" style={{ backgroundColor: '#fefafa' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d384b]"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d384b]"
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d384b]"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="border rounded-lg px-4 py-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-[#2d384b]"
                            ></textarea>
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg font-semibold w-full transition duration-300"
                                style={{ backgroundColor: '#2d384b', color: '#fff' }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoFormSection;
