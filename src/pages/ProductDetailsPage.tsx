import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RefreshCw, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

// Mock product data - Replace with Firebase
const getProductById = (id: string) => {
  const products = {
    '1': {
      id: '1',
      name: 'AI Runner Pro',
      price: 199.99,
      originalPrice: 249.99,
      images: [
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
        'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg'
      ],
      rating: 4.8,
      reviews: 324,
      description: 'Experience the future of running with our AI Runner Pro. These revolutionary sneakers combine cutting-edge artificial intelligence with premium materials to deliver unmatched performance and comfort.',
      features: [
        'AI-optimized cushioning system',
        'Adaptive fit technology',
        'Premium breathable mesh upper',
        'Energy-return midsole',
        'Anti-slip rubber outsole',
        'Smart pressure distribution'
      ],
      specifications: {
        'Weight': '285g',
        'Drop': '10mm',
        'Upper': 'Engineered mesh',
        'Midsole': 'AI-foam compound',
        'Outsole': 'Carbon rubber',
        'Closure': 'Lace-up'
      },
      sizes: ['7', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
      colors: ['Black/Green', 'White/Red', 'Gray/Blue'],
      inStock: true,
      category: 'sneakers',
      isNew: true
    },
    // Add more products as needed
  };
  
  return products[id as keyof typeof products] || products['1'];
};

const relatedProducts = [
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

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product] = useState(() => getProductById(id || '1'));
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    document.title = `${product.name} - AIECOM`;
    window.scrollTo(0, 0);
  }, [product.name]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize
      });
    }

    alert('Added to cart!');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-gray-300 fill-current" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-black transition-colors">Products</Link>
          <span>/</span>
          <span className="text-black font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product.isNew && (
                  <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    New
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
                    Save ${(product.originalPrice - product.price).toFixed(0)}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-1 aspect-square bg-white rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-green-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-bebas text-4xl md:text-5xl font-bold text-black mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-black">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Color: {selectedColor}</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded-lg text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="w-full bg-gradient-primary text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
              </button>
              
              <div className="flex space-x-4">
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors flex items-center justify-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <p className="text-sm font-medium">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <p className="text-sm font-medium">2 Year Warranty</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <p className="text-sm font-medium">30 Day Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'features', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm uppercase transition-colors ${
                    activeTab === tab
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our AI Runner Pro represents the pinnacle of athletic footwear innovation. Each pair is designed using advanced machine learning algorithms that analyze thousands of foot movements, pressure points, and biomechanical data to create the perfect running experience.
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="font-bold text-xl mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="font-bold text-xl mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <span className="font-medium text-gray-900">{key}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="font-bold text-xl mb-6">Customer Reviews</h3>
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Reviews coming soon!</p>
                  <p className="text-sm text-gray-400">
                    Firebase integration point for customer reviews and ratings
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-bebas text-3xl font-bold text-black mb-8">
            YOU MIGHT ALSO <span className="text-gradient">LIKE</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;