import React, { useState, useEffect } from 'react';
import { Filter, Grid3X3, List, ChevronDown, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Mock data - Replace with Firebase data
const allProducts = [
  {
    id: '1',
    name: 'AI Runner Pro',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    rating: 4.8,
    reviews: 324,
    category: 'sneakers',
    isNew: true,
    sizes: ['7', '8', '9', '10', '11', '12']
  },
  {
    id: '2',
    name: 'Neural Boost X',
    price: 159.99,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg',
    rating: 4.9,
    reviews: 567,
    category: 'sneakers',
    isHot: true,
    sizes: ['6', '7', '8', '9', '10', '11']
  },
  {
    id: '3',
    name: 'Quantum Flex',
    price: 179.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    rating: 4.7,
    reviews: 243,
    category: 'sneakers',
    sizes: ['7', '8', '9', '10', '11', '12', '13']
  },
  {
    id: '4',
    name: 'Cyber Sprint Elite',
    price: 229.99,
    image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg',
    rating: 4.9,
    reviews: 892,
    category: 'sneakers',
    isNew: true,
    sizes: ['8', '9', '10', '11', '12']
  },
  {
    id: '5',
    name: 'AI Performance Tee',
    price: 49.99,
    image: 'https://images.pexels.com/photos/8829343/pexels-photo-8829343.jpeg',
    rating: 4.6,
    reviews: 189,
    category: 'apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '6',
    name: 'Neural Compression Shorts',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.pexels.com/photos/8829344/pexels-photo-8829344.jpeg',
    rating: 4.5,
    reviews: 156,
    category: 'apparel',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '7',
    name: 'Smart Training Gloves',
    price: 79.99,
    image: 'https://images.pexels.com/photos/6454216/pexels-photo-6454216.jpeg',
    rating: 4.7,
    reviews: 234,
    category: 'accessories',
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '8',
    name: 'AI Hydration Pack',
    price: 129.99,
    image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg',
    rating: 4.8,
    reviews: 412,
    category: 'accessories',
    sizes: ['One Size']
  }
];

const categories = [
  { id: 'all', name: 'All Products', count: allProducts.length },
  { id: 'sneakers', name: 'Sneakers', count: allProducts.filter(p => p.category === 'sneakers').length },
  { id: 'apparel', name: 'Apparel', count: allProducts.filter(p => p.category === 'apparel').length },
  { id: 'accessories', name: 'Accessories', count: allProducts.filter(p => p.category === 'accessories').length }
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'rating', label: 'Highest Rated' }
];

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  useEffect(() => {
    document.title = 'Products - AIECOM | AI-Powered Athletic Wear';
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="font-bebas text-4xl md:text-5xl font-bold text-black mb-2">
                ALL <span className="text-gradient">PRODUCTS</span>
              </h1>
              <p className="text-gray-600">
                Discover our complete collection of AI-designed athletic wear
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-500">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Products
                  </label>
                  <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-gradient-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="text-sm">{category.count}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="300"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found matching your criteria</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setPriceRange([0, 300]);
                  }}
                  className="text-green-500 hover:text-green-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
              }>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium">
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;