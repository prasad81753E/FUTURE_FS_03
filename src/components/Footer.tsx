import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white" role="contentinfo">
      {/* Newsletter Section */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-bebas text-3xl mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-8">Get the latest updates on new products and exclusive offers</p>
            {/* Firebase integration point for newsletter subscription */}
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Email address"
              />
              <button 
                className="bg-gradient-primary px-6 py-3 rounded-r-lg hover:opacity-90 transition-opacity font-medium"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bebas text-xl font-bold">AI</span>
                </div>
                <span className="font-bebas text-2xl font-bold">AIECOM</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The future of athletic wear, powered by AI-driven design and cutting-edge technology.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Youtube, label: 'YouTube' }
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Products', 'About Us', 'Contact', 'FAQ', 'Size Guide'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-bold text-lg mb-6">Categories</h4>
              <ul className="space-y-3">
                {['Sneakers', 'Athletic Wear', 'Accessories', 'Limited Edition', 'New Arrivals', 'Sale'].map((category) => (
                  <li key={category}>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 block"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-400">123 Innovation Street</p>
                    <p className="text-gray-400">Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <a href="mailto:info@aiecom.com" className="text-gray-400 hover:text-white transition-colors">
                    info@aiecom.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AIECOM. All rights reserved. Designed with AI-driven innovation.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;