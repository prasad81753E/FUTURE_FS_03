import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us - AIECOM | Get in Touch';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Firebase integration point for form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-gradient-dark text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-bebas text-5xl md:text-7xl font-bold mb-6">
              GET IN <span className="text-gradient">TOUCH</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Have questions about our AI-powered athletic wear? We're here to help you find 
              the perfect gear for your performance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                info: ['123 Innovation Street', 'Tech City, TC 12345', 'United States'],
                color: 'bg-blue-500'
              },
              {
                icon: Phone,
                title: 'Call Us',
                info: ['+1 (234) 567-8900', '+1 (234) 567-8901', 'Mon-Fri 9AM-6PM PST'],
                color: 'bg-green-500'
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: ['info@aiecom.com', 'support@aiecom.com', 'careers@aiecom.com'],
                color: 'bg-purple-500'
              },
              {
                icon: Clock,
                title: 'Business Hours',
                info: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed'],
                color: 'bg-red-500'
              }
            ].map((contact, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover-scale text-center">
                <div className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-black mb-4">{contact.title}</h3>
                <div className="space-y-2">
                  {contact.info.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-600">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-bebas text-4xl font-bold text-black mb-6">
                SEND US A <span className="text-gradient">MESSAGE</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Ready to experience the future of athletic wear? Fill out the form below 
                and our team will get back to you within 24 hours.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-700 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="order">Order Support</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We typically respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h3 className="font-bebas text-3xl font-bold text-black mb-6">
                FIND <span className="text-gradient">US</span>
              </h3>
              
              {/* Placeholder for interactive map */}
              <div className="bg-gray-200 h-64 rounded-2xl mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Interactive Map</p>
                  <p className="text-gray-400 text-sm">
                    Integration point for Google Maps or similar service
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="font-bold text-xl text-black mb-6">Frequently Asked</h4>
                <div className="space-y-6">
                  {[
                    {
                      question: 'How long does shipping take?',
                      answer: 'Standard shipping takes 3-5 business days, while express shipping arrives in 1-2 business days.'
                    },
                    {
                      question: 'What is your return policy?',
                      answer: 'We offer a 30-day return policy for all unworn items in their original packaging.'
                    },
                    {
                      question: 'Do you offer international shipping?',
                      answer: 'Yes, we ship to over 50 countries worldwide with competitive international rates.'
                    },
                    {
                      question: 'How does AI design work?',
                      answer: 'Our AI algorithms analyze biomechanical data and performance metrics to optimize every aspect of our products.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h5 className="font-medium text-black mb-2">{faq.question}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl font-bold mb-6">
            STAY <span className="text-gradient">CONNECTED</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest product launches, exclusive offers, 
            and insights into AI-powered athletic innovation.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-4 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 border-0"
            />
            <button className="bg-gradient-primary px-6 py-4 rounded-r-lg hover:opacity-90 transition-opacity font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Join 50,000+ athletes who trust AIECOM for their performance needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;