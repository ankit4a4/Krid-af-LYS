import React from 'react';
import Slider from 'react-slick';
import { Star, Quote } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'Studio Kal transformed our home beyond our wildest dreams. Tanvi\'s attention to detail and creative vision made our space both beautiful and functional. We couldn\'t be happier!'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'The team at Studio Kal redesigned our office space, and the results exceeded our expectations. Our employees love the new environment, and productivity has increased significantly.'
    },
    {
      id: 3,
      name: 'Meera Patel',
      role: 'Real Estate Agent',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'I work with Studio Kal for all my home staging projects. Their ability to make properties show-ready quickly and effectively has helped me close deals faster. Highly recommended!'
    },
    {
      id: 4,
      name: 'Arjun Singh',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'Working with Tanvi was a pleasure from start to finish. She listened to our needs, respected our budget, and delivered a design that perfectly reflects our family\'s personality.'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section id="testimonials" className="py-8 md:py-20 bg-[#2D384B]">
      <div className="container mx-auto px-4 md:px-10 grid md:grid-cols-10 grid-cols-1 gap-12 items-center">

        {/* Left Side Content */}
        <div className="lg:col-span-4 md:mb-8 lg:mb-0" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-[#DDCFCA]">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Studio Kal.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-[#DDCFCA]">
            We pride ourselves on creating spaces that truly reflect our clients' personalities while ensuring functionality and timeless elegance. Your satisfaction is our biggest achievement.
          </p>
        </div>

        {/* Right Side Slider */}
        <div className="lg:col-span-6" data-aos="fade-left" data-aos-duration="1000">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2 sm:px-4">
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg">

                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-300">
                    <Quote size={36} className="sm:text-[48px]" />
                  </div>

                  <div className="flex items-center mb-4 sm:mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg text-[#2D384B]">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-2 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 sm:text-[20px]" />
                    ))}
                  </div>

                  <p className="leading-relaxed italic text-gray-700 text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
