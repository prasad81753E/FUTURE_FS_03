import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, RefreshCw, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Mock data - Replace with Firebase data
const featuredProducts = [
  {
    id: '1',
    name: 'AI Runner Pro',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    rating: 4.8,
    reviews: 324,
    isNew: true
  },
  {
    id: '2',
    name: 'Neural Boost X',
    price: 159.99,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
    rating: 4.9,
    reviews: 567,
    isHot: true
  },
  {
    id: '3',
    name: 'Quantum Flex',
    price: 179.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    rating: 4.7,
    reviews: 243
  },
  {
    id: '4',
    name: 'Cyber Sprint Elite',
    price: 229.99,
    image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg',
    rating: 4.9,
    reviews: 892,
    isNew: true
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'These AI-designed shoes are incredible! The comfort and performance are unmatched.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    rating: 5,
    text: 'Revolutionary design meets cutting-edge technology. Best purchase I\'ve made this year!',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'The future of athletic wear is here. Absolutely love the innovative features.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg'
  }
];

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section - Placeholder for Adobe Firefly hero image */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-dark text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        role="banner"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 
              id="hero-title"
              className="font-bebas text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              THE FUTURE OF
              <span className="text-gradient block">ATHLETIC WEAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of performance gear, designed by artificial intelligence 
              for athletes who demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="group bg-gradient-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300 flex items-center space-x-2 min-w-[200px] justify-center"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 min-w-[200px]">
                WATCH STORY
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-20 bg-gray-50 animate-on-scroll"
        aria-labelledby="features-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              id="features-title"
              className="font-bebas text-4xl md:text-5xl font-bold text-black mb-4"
            >
              WHY CHOOSE <span className="text-gradient">AIECOM</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cutting-edge technology meets uncompromising quality in every product we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'AI-Powered Design',
                description: 'Every product optimized through machine learning algorithms for maximum performance.'
              },
              {
                icon: Truck,
                title: 'Free Fast Shipping',
                description: 'Complimentary shipping on all orders over $100 with express delivery options.'
              },
              {
                icon: RefreshCw,
                title: '365-Day Returns',
                description: 'Full year to try our products with hassle-free returns and exchanges.'
              },
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Only the finest materials and craftsmanship in every single product we make.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover-scale group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 animate-on-scroll" aria-labelledby="products-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 
                id="products-title"
                className="font-bebas text-4xl md:text-5xl font-bold text-black mb-4"
              >
                FEATURED <span className="text-gradient">PRODUCTS</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Discover our most popular AI-designed athletic wear
              </p>
            </div>
            <Link 
              to="/products"
              className="hidden md:flex items-center space-x-2 text-black hover:text-gradient transition-colors font-medium"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <Link 
              to="/products"
              className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black text-white animate-on-scroll" aria-labelledby="testimonials-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              id="testimonials-title"
              className="font-bebas text-4xl md:text-5xl font-bold mb-4"
            >
              WHAT ATHLETES <span className="text-gradient">SAY</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Real feedback from real athletes who choose AIECOM
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-900 p-8 rounded-2xl hover-scale">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white animate-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-4xl md:text-6xl font-bold mb-6">
            READY TO EXPERIENCE THE FUTURE?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Join thousands of athletes who have already made the switch to AI-powered athletic wear.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <span>START SHOPPING</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;