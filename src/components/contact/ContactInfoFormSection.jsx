import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactInfoFormSection = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        emailjs.sendForm(
            'service_xwcaps4', 
            'template_8qzuy6o', 
            formRef.current,
            'FKSV08DFvEqD4LCni' 
        )
        .then((result) => {
            console.log(result.text);
            setMessage('Message sent successfully!');
            setLoading(false);
            formRef.current.reset();
        })
        .catch((error) => {
            console.log(error.text);
            setMessage('Failed to send message. Please try again.');
            setLoading(false);
        });
    };

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
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="rounded-lg p-8 space-y-6"
                            style={{ backgroundColor: '#fefafa' }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Name"
                                    className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d384b]"
                                    required
                                />
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d384b]"
                                    required
                                />
                            </div>
                            <input
                                type="tel"
                                name="user_phone"
                                placeholder="Your Phone"
                                className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d384b]"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="border rounded-lg px-4 py-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-[#2d384b]"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg font-semibold w-full transition duration-300"
                                style={{ backgroundColor: '#2d384b', color: '#fff' }}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                            {message && <p className="mt-2 text-center text-green-600">{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoFormSection;
