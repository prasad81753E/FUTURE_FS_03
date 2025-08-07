import React, { useEffect } from 'react';
import { Zap, Users, Award, Target, ArrowRight, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - AIECOM | The Future of Athletic Wear';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-gradient-dark text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-bebas text-5xl md:text-7xl font-bold mb-6">
              REDEFINING <span className="text-gradient">ATHLETIC WEAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Where artificial intelligence meets human potential to create the most advanced 
              athletic wear on the planet.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-green-400 rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-red-400 rotate-12"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <h2 className="font-bebas text-4xl md:text-5xl font-bold text-black mb-6">
                OUR <span className="text-gradient">MISSION</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At AIECOM, we believe that the future of athletic performance lies in the 
                perfect fusion of cutting-edge technology and human innovation. Our mission 
                is to revolutionize the athletic wear industry by harnessing the power of 
                artificial intelligence to create products that not only meet but exceed 
                the demands of modern athletes.
              </p>
              <div className="space-y-4">
                {[
                  'AI-driven design optimization for maximum performance',
                  'Sustainable materials and manufacturing processes',
                  'Personalized athletic wear for every body type',
                  'Continuous innovation through machine learning'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.pexels.com/photos/8829343/pexels-photo-8829343.jpeg"
                alt="Athletic technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl font-bold text-black mb-4">
              OUR <span className="text-gradient">VALUES</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that drive our innovation and shape every product we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Innovation First',
                description: 'We push the boundaries of what\'s possible with AI-driven design and cutting-edge materials.',
                color: 'bg-yellow-500'
              },
              {
                icon: Users,
                title: 'Human-Centered',
                description: 'Every product is designed with the athlete in mind, prioritizing comfort and performance.',
                color: 'bg-blue-500'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We maintain the highest standards in quality, from conception to final product delivery.',
                color: 'bg-purple-500'
              },
              {
                icon: Target,
                title: 'Sustainability',
                description: 'Committed to environmental responsibility through sustainable practices and materials.',
                color: 'bg-green-500'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover-scale text-center group"
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/6454216/pexels-photo-6454216.jpeg"
                alt="Our team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-bebas text-4xl md:text-5xl font-bold text-black mb-6">
                OUR <span className="text-gradient">STORY</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2024 by a team of AI researchers, athletic performance specialists, 
                and design visionaries, AIECOM was born from a simple yet revolutionary idea: 
                what if we could use artificial intelligence to create the perfect athletic wear?
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Starting in a small lab with big dreams, our founders combined their expertise 
                in machine learning, biomechanics, and sustainable manufacturing to develop 
                our first AI-designed sneaker. Today, we continue to push the boundaries of 
                what's possible in athletic wear design.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gradient">50K+</div>
                    <div className="text-sm text-gray-600">Happy Athletes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">500+</div>
                    <div className="text-sm text-gray-600">AI Algorithms</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl font-bold mb-4">
              MEET THE <span className="text-gradient">TEAM</span>
            </h2>
            <p className="text-gray-400 text-lg">
              The brilliant minds behind AIECOM's revolutionary products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'CEO & Co-Founder',
                image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
                bio: 'AI researcher with 10+ years in machine learning and athletic performance optimization.'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'CTO & Co-Founder',
                image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
                bio: 'Former Nike designer turned tech innovator, specializing in biomechanics and product design.'
              },
              {
                name: 'Dr. Emily Zhang',
                role: 'Head of Innovation',
                image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
                bio: 'Materials scientist focused on sustainable athletic wear and advanced fabric technologies.'
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{member.name}</h3>
                <p className="text-gradient font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-4xl md:text-6xl font-bold mb-6">
            JOIN THE REVOLUTION
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Be part of the future of athletic wear. Experience the difference that 
            AI-driven design can make in your performance.
          </p>
          <button className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            <span>Explore Products</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;