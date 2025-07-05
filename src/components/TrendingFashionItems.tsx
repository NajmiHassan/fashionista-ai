
import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const TrendingFashionItems = () => {
  const trendingItems = [
    {
      id: 1,
      name: 'Oversized Blazer',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 324,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
      category: 'Trending',
      isNew: true,
    },
    {
      id: 2,
      name: 'Silk Midi Dress',
      price: 89.99,
      rating: 4.9,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
      category: 'New Arrival',
      isNew: true,
    },
    {
      id: 3,
      name: 'Vintage Denim Jacket',
      price: 79.99,
      rating: 4.7,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
      category: 'Popular',
      isNew: false,
    },
    {
      id: 4,
      name: 'Cashmere Sweater',
      price: 199.99,
      rating: 4.9,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=400&h=500&fit=crop',
      category: 'Luxury',
      isNew: false,
    },
    {
      id: 5,
      name: 'Statement Earrings',
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop',
      category: 'Accessories',
      isNew: false,
    },
    {
      id: 6,
      name: 'Leather Ankle Boots',
      price: 129.99,
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop',
      category: 'Footwear',
      isNew: true,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending Fashion Items
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what's popular right now and stay ahead of the fashion curve
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'Trending' ? 'bg-purple-600 text-white' :
                    item.category === 'New Arrival' ? 'bg-green-600 text-white' :
                    item.category === 'Popular' ? 'bg-blue-600 text-white' :
                    item.category === 'Luxury' ? 'bg-gold-600 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {item.category}
                  </span>
                  {item.isNew && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{item.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {item.rating} ({item.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-800">
                      ${item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center space-x-2 text-sm font-medium">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Trending Items
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingFashionItems;
