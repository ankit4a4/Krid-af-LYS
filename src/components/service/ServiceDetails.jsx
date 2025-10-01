import React from "react";
import img1 from "../../../public/images/Interior Design.webp"
import img2 from "../../../public/images/Interior Styling.jpg"
import img3 from "../../../public/images/HomeStaging.jpg"
import img4 from "../../../public/images/ProjectManagement.jpeg"
import img5 from "../../../public/images/Design Consultation.jpg"
import img6 from "../../../public/images/Color Consultation.png"
import { useNavigate } from "react-router-dom";

const services = [
    {
        key: "interior-design",
        title: "Interior Design",
        secondTitle : "Hospitality",
        hero: "Transform Your Space with Premium Interior Design Solutions",
        intro:
            "We create spaces that blend comfort, functionality, and timeless elegance. Our Interior Design service is tailored for homes and commercial spaces, bringing your vision to life through creativity, technical expertise, and meticulous attention to detail.",
        description: `Designing a beautiful space is more than just choosing furniture and colors — it’s about creating experiences. Our team begins by understanding how you live and work, your daily habits, and the mood you want your environment to express. We believe that every space should tell a story — your story.

Once we understand your requirements, we move into strategic space planning to make the most of every square foot. We develop layouts that balance flow and functionality, ensuring that each element serves a purpose while enhancing aesthetics. Whether it’s a cozy home or a large commercial project, our approach focuses on making spaces feel both practical and inspiring.

Next, our designers craft harmonious color schemes and select premium materials, textures, and finishes to set the perfect tone. Using advanced 3D visualization, we provide a realistic preview of your interiors before execution, so you can make confident decisions at every step.`,
        features: [
            "Space Planning",
            "Color Schemes",
            "Furniture Selection",
            "3D Visualization",
        ],
        why: [
            "Tailored to Your Lifestyle and Taste",
            "End-to-End Execution from Concept to Completion",
            "Expert Designers and Technical Team",
            "On-time Delivery with Quality Oversight",
        ],
        image:
            img1,
    },
    {
        key: "interior-styling",
        title: "Interior Styling",
        hero: "Elevate Your Existing Interiors with Thoughtful Styling",
        intro:
            "Professional styling services to refine and refresh your existing spaces. We focus on the details — accessories, textiles, and art — to create a cohesive and personal environment.",
        description: `Styling is the art of making an interior feel finished, curated, and lived-in. Our styling service is ideal when you want to refresh a room or add personality without a full renovation. We audit your current furniture and finishes, identify gaps, and bring in carefully selected pieces and accents that harmonize with the existing design.

From artwork placement and textile coordination to accessory selection and lighting accents, each item is chosen to support the overall concept. We pay close attention to scale, texture, and color balance so that the space reads as intentional and refined.

The final styling stage ensures photographs and visual presentations look their best — perfect for clients, portfolios, or simply to enjoy a renewed home atmosphere.`,
        features: [
            "Artwork Placement",
            "Textile Coordination",
            "Accessory Selection",
            "Final Touches",
        ],
        why: [
            "Curated Details That Reflect Your Personality",
            "Quick Impact Without Major Renovation",
            "Improved Visual Flow and Balance",
            "Photography-Ready Styling for Listings & Portfolios",
        ],
        image:
            img2,
    },
    {
        key: "home-staging",
        title: "Home Staging",
        hero: "Make Properties Irresistible — Sell Faster & For More",
        intro:
            "Strategic home staging to maximize your property’s market appeal. We arrange spaces, select ideal furniture, and prepare properties to attract buyers quickly.",
        description: `Home staging is a targeted service designed to position a property for maximum buyer interest. We begin with a market analysis to understand buyer preferences in your neighbourhood and then tailor the staging concept to highlight the property's best features.

We provide furniture rental, layout optimization, decluttering guidance and accessorizing so the space photographs well and appeals to a wide audience. The staged look helps buyers imagine living there — shortening days on market and often improving final sale price.

Our team coordinates logistics, photography-ready preparations, and a fast turnaround so that listings go live looking their absolute best.`,
        features: [
            "Market Analysis",
            "Furniture Rental",
            "Photography Ready",
            "Quick Turnaround",
        ],
        why: [
            "Optimized to Current Market Trends",
            "Professional Photography Preparation",
            "Flexible Rental Solutions",
            "Designed to Minimize Time on Market",
        ],
        image:
            img3,
    },
    {
        key: "project-management",
        title: "Project Management",
        hero: "Stress-Free Delivery — We Manage Every Detail",
        intro:
            "End-to-end project coordination and execution. We manage timelines, coordinate vendors, oversee quality control, and monitor budgets for seamless completion.",
        description: `Large-scale interiors and renovations require careful coordination. Our Project Management offering acts as your single point of contact to ensure smooth execution — from permit tracking and vendor quotes to site supervision and quality checks.

We prepare clear timelines, maintain budget transparency, and conduct regular progress reviews so that risks are mitigated early. Our vendor relationships and procurement process shorten lead times and ensure quality materials are used.

With structured reporting and on-site supervision, we keep projects moving forward while maintaining standards and minimizing disruption to your daily life or business operations.`,
        features: [
            "Timeline Management",
            "Vendor Coordination",
            "Quality Control",
            "Budget Oversight",
        ],
        why: [
            "Single Point of Contact for Simplicity",
            "Proactive Risk & Schedule Management",
            "Verified Vendor Network",
            "Transparent Budget Tracking",
        ],
        image:
            img4,
    },
    {
        key: "design-consultation",
        title: "Design Consultation",
        hero: "Expert Guidance to Shape Your Project",
        intro:
            "Personalized advice and direction for design decisions — material choices, layouts, and practical solutions to common challenges.",
        description: `A focused design consultation gives you clarity and confidence to move forward. Whether you need help with a single room's layout, material selection, or an entire concept review, our consultants provide actionable recommendations based on years of practice.

We use sketches, reference boards, and prioritized action lists so you leave with a clear roadmap. Consultations can be virtual or on-site and are ideal for homeowners, renovators, and developers who want expert input without a full-service engagement.

Outcomes include prioritized budgets, material recommendations, and revised layouts that improve flow and function while staying true to your aesthetic.`,
        features: [
            "Design Direction",
            "Material Selection",
            "Layout Optimization",
            "Problem Solving",
        ],
        why: [
            "Fast, High-Value Recommendations",
            "Flexible Delivery (Virtual or On-site)",
            "Actionable Roadmap for Execution",
            "Cost-Effective Expert Input",
        ],
        image:
            img5,
    },
    {
        key: "color-consultation",
        title: "Color Consultation",
        hero: "Harmonious Palettes That Elevate Every Room",
        intro:
            "Professional color schemes and paint selection services. We study color psychology and lighting to recommend palettes that work in real spaces.",
        description: `Color sets the emotional tone of a room. Our Color Consultation service combines color psychology, lighting analysis and material coordination to propose palettes that enhance mood and perceived space.

We test selections in-situ when possible, provide paint schedules, accent plans and guidance on finishes. This ensures colors perform well under your lighting conditions and complement your chosen materials.

Whether you want a bold statement or a calm neutral home base, our color guidance helps you make confident choices that last.`,
        features: [
            "Color Psychology",
            "Paint Selection",
            "Accent Planning",
            "Lighting Integration",
        ],
        why: [
            "Palette Choices That Consider Light & Materials",
            "On-Site Testing Recommendations",
            "Cohesive Accent Planning",
            "Improved Visual Harmony Across Rooms",
        ],
        image:
            img6,
    },
];

export default function ServiceDetails() {
    const navigate = useNavigate()
    return (
        <div className="bg-[#ddcfca] text-[#2d384b]">
            {/* Services List */}
            <section id="services-list" className="max-w-6xl mx-auto px-6 py-16">
                <div className="space-y-20">
                    {services.map((s, idx) => (
                        <article
                            key={s.key}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-8 relative items-start`}
                        >
                            <div
                                className={`order-1 md:sticky top-28 md:order-${idx % 2 === 0 ? "1" : "2"}`}
                            >
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="w-full md:h-[420px] object-cover rounded-3xl shadow-lg"
                                />
                            </div>

                            <div className="prose lg:prose-lg max-w-none order-2 md:order-1 text-[#2d384b]">
                                <div className="flex items-center justify-between mb-3">
                                <h2 className="text-3xl font-bold">{s.title}</h2>
                                <h2 className="text-3xl font-bold">{s.secondTitle}</h2>

                                </div>
                                <p className="font-semibold">{s.hero}</p>
                                <p className="mt-4">{s.intro}</p>
                                <p className="mt-4 whitespace-pre-line">{s.description}</p>

                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-2">Key Highlights</h4>
                                        <ul className="space-y-2">
                                            {s.features.map((f) => (
                                                <li key={f} className="flex items-start gap-3">
                                                    <span className="mt-1   bg-[#2d384b] text-[#ddcfca] rounded-full w-6 h-6 flex items-center justify-center text-xs">✓</span>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">Why This Works</h4>
                                        <ul className="space-y-2">
                                            {s.why.map((w) => (
                                                <li key={w} className="flex items-start gap-3">
                                                    <span className="mt-1  bg-[#2d384b] text-[#ddcfca] rounded-full w-6 h-6 flex items-center justify-center text-xs">★</span>
                                                    <span>{w}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3 items-center">
                                    <button
                                        onClick={() => navigate("/contact")}
                                        className="inline-block cursor-pointer bg-[#2d384b] text-[#ddcfca] px-5 py-2 rounded-full shadow"
                                    >
                                        Book a Consultation
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            {/* Benefits / Why Choose Us */}
            <section className="py-16 bg-[#2d384b] border-b border-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white">Why Choose Us</h3>
                        <p className="max-w-2xl mx-auto mt-3 text-[#ddcfca] text-lg">
                            A combination of creative vision, operational excellence and client-first service.
                        </p>
                    </div>
                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="p-6 bg-[#ddcfca] rounded-2xl shadow-lg text-center hover:-translate-y-1 transition-transform">
                            <h4 className="font-semibold mb-2 text-[#2d384b] text-lg">Expert Designers</h4>
                            <p className="text-sm text-[#2d384b]">Skilled team with design depth.</p>
                        </div>
                        <div className="p-6 bg-[#ddcfca] rounded-2xl shadow-lg text-center hover:-translate-y-1 transition-transform">
                            <h4 className="font-semibold mb-2 text-[#2d384b] text-lg">End-to-End Service</h4>
                            <p className="text-sm text-[#2d384b]">From concept to flawless delivery.</p>
                        </div>
                        <div className="p-6 bg-[#ddcfca] rounded-2xl shadow-lg text-center hover:-translate-y-1 transition-transform">
                            <h4 className="font-semibold mb-2 text-[#2d384b] text-lg">Transparent Pricing</h4>
                            <p className="text-sm text-[#2d384b]">Clear budgets and no surprises.</p>
                        </div>
                        <div className="p-6 bg-[#ddcfca] rounded-2xl shadow-lg text-center hover:-translate-y-1 transition-transform">
                            <h4 className="font-semibold mb-2 text-[#2d384b] text-lg">On-Time Delivery</h4>
                            <p className="text-sm text-[#2d384b]">Structured timelines and checkpoints.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
