import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo - Placeholder for AI-generated logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              aria-label="Homepage"
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                {/* Placeholder for Adobe Firefly AI-generated logo */}
                <span className="text-white font-bebas text-xl font-bold">AI</span>
              </div>
              <span className="font-bebas text-2xl font-bold text-black group-hover:text-gradient transition-colors duration-300">
                AIECOM
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium text-sm uppercase tracking-wide transition-colors duration-300 hover:text-gradient relative ${
                    location.pathname === link.path
                      ? 'text-black after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-primary'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="User account"
              >
                <User className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label={`Shopping cart with ${getTotalItems()} items`}
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2"
                aria-label={`Shopping cart with ${getTotalItems()} items`}
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-medium text-sm uppercase tracking-wide transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-gradient'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
                  <Search className="w-4 h-4" />
                  <span className="text-sm">Search</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;