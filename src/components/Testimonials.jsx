import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'KRID af LYS transformed our home beyond our wildest dreams. Tanvi\'s attention to detail and creative vision made our space both beautiful and functional. We couldn\'t be happier!'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'The team at KRID af LYS redesigned our office space, and the results exceeded our expectations. Our employees love the new environment, and productivity has increased significantly.'
    },
    {
      id: 3,
      name: 'Meera Patel',
      role: 'Real Estate Agent',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      rating: 5,
      text: 'I work with KRID af LYS for all my home staging projects. Their ability to make properties show-ready quickly and effectively has helped me close deals faster. Highly recommended!'
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

  return (
    <section 
      id="testimonials" 
      className="py-8 md:py-20" 
      style={{ backgroundColor: '#2D384B' }} // bg-primary
    >
      <div className="container mx-auto px-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            data-aos="fade-up" 
            data-aos-duration="1000"
            style={{ color: '#FFFFFF' }} // text-white
          >
            What Our Clients Say
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-delay="200"
            style={{ color: '#DDCFCA' }} // text-peach
          >
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with KRID af LYS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="rounded-2xl p-8 card-hover relative"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              style={{ backgroundColor: '#FFFFFF' }} // bg-white
            >
              <div className="absolute top-4 right-4" style={{ color: 'rgba(221,207,202,0.2)' }}> {/* text-peach/20 */}
                <Quote size={48} />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: '#2D384B' }}> {/* text-primary */}
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: '#4B5563' }}> {/* text-neutral-600 */}
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} style={{ color: '#FACC15' }} /> 
                ))}
              </div>

              <p className="leading-relaxed italic" style={{ color: '#374151' }}> {/* text-neutral-700 */}
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
