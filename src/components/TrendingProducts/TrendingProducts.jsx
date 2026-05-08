import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart, FaFire, FaTrophy, FaChartLine } from "react-icons/fa";

const trendingNow = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
    title: "Oversized Drop Shoulder Tee",
    category: "Men's Wear",
    price: "₹599",
    originalPrice: "₹999",
    rating: 4.7,
    reviews: 1243,
    tag: "🔥 Viral Pick",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
    title: "Co-ord Set — Women",
    category: "Women's Wear",
    price: "₹1,299",
    originalPrice: "₹2,299",
    rating: 4.8,
    reviews: 987,
    tag: "🔥 Social Media Hit",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    title: "Wireless Earbuds Gen 2",
    category: "Electronics",
    price: "₹2,499",
    originalPrice: "₹4,999",
    rating: 4.9,
    reviews: 2341,
    tag: "🔥 Most Searched",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop",
    title: "Kids Denim Jacket",
    category: "Kids Wear",
    price: "₹699",
    originalPrice: "₹1,299",
    rating: 4.6,
    reviews: 543,
    tag: "🔥 Trending",
  },
];

const bestSelling = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Classic White Sneakers",
    category: "Footwear",
    price: "₹1,299",
    originalPrice: "₹2,499",
    rating: 4.9,
    reviews: 4521,
    sold: "12,000+ sold",
    tag: "💰 All-Time Best",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
    title: "Slim Fit Denim Jeans",
    category: "Men's Wear",
    price: "₹1,299",
    originalPrice: "₹2,499",
    rating: 4.8,
    reviews: 3892,
    sold: "9,500+ sold",
    tag: "💰 Top Grossing",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    title: "Bluetooth Speaker 360",
    category: "Electronics",
    price: "₹1,899",
    originalPrice: "₹3,499",
    rating: 4.7,
    reviews: 2765,
    sold: "7,200+ sold",
    tag: "💰 Best Seller",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
    title: "Women Ethnic Kurti",
    category: "Women's Wear",
    price: "₹799",
    originalPrice: "₹1,499",
    rating: 4.8,
    reviews: 3124,
    sold: "8,900+ sold",
    tag: "💰 Hot Pick",
  },
];

const topRatedDropdown = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    title: "Smart Watch Pro X",
    category: "Electronics",
    price: "₹4,999",
    originalPrice: "₹8,999",
    rating: 4.9,
    reviews: 1203,
    tag: "⭐ 4.9/5",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    title: "Leather Biker Jacket",
    category: "Men's Wear",
    price: "₹2,999",
    originalPrice: "₹5,499",
    rating: 4.9,
    reviews: 876,
    tag: "⭐ 4.9/5",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
    title: "Girls Ethnic Lehenga",
    category: "Kids Wear",
    price: "₹1,199",
    originalPrice: "₹2,199",
    rating: 4.9,
    reviews: 654,
    tag: "⭐ 4.9/5",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    title: "Running Shoes Elite",
    category: "Footwear",
    price: "₹2,199",
    originalPrice: "₹3,999",
    rating: 4.9,
    reviews: 1089,
    tag: "⭐ 4.9/5",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <FaStar
        key={star}
        className={`text-xs ${star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
      />
    ))}
  </div>
);

const ProductCard = ({ item, cart, onCart, wishlist, onWishlist, showSold }) => (
  <div
    data-aos="fade-up"
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
  >
    <span className="absolute top-3 left-3 z-10 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full">
      {item.tag}
    </span>
    <button
      onClick={() => onWishlist(item.id)}
      className="absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow hover:scale-110 transition-transform"
    >
      <FaHeart className={`w-3 h-3 ${wishlist.includes(item.id) ? "text-red-500" : "text-gray-300"}`} />
    </button>

    <div className="h-52 overflow-hidden bg-gray-50">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="p-4">
      <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{item.category}</p>
      <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1 truncate">{item.title}</h3>
      {showSold && (
        <p className="text-xs text-green-600 font-semibold mb-1">✅ {item.sold}</p>
      )}
      <div className="flex items-center gap-2 mb-3">
        <StarRating rating={item.rating} />
        <span className="text-xs text-gray-500">{item.rating} ({item.reviews})</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-base font-bold text-gray-900 dark:text-white">{item.price}</span>
          <span className="text-xs text-gray-400 line-through ml-2">{item.originalPrice}</span>
        </div>
        <button
          onClick={() => onCart(item.id)}
          className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
            cart === item.id
              ? "bg-green-500 text-white scale-95"
              : "bg-primary text-white hover:scale-105"
          }`}
        >
          {cart === item.id ? "✓ Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  </div>
);

const TrendingProducts = ({ handleOrderPopup }) => {
  const [activeTab, setActiveTab] = useState("trending");
  const [cart, setCart] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const handleCart = (id) => {
    setCart(id);
    setTimeout(() => setCart(null), 1500);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const tabs = [
    { key: "trending", label: "🔥 Trending Now", icon: <FaFire /> },
    { key: "bestselling", label: "💰 Best Selling", icon: <FaChartLine /> },
    { key: "toprated", label: "⭐ Top Rated", icon: <FaTrophy /> },
  ];

  const activeData =
    activeTab === "trending"
      ? trendingNow
      : activeTab === "bestselling"
      ? bestSelling
      : topRatedDropdown;

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What Everyone's Buying Right Now
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Trending Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Stay ahead of the curve — discover what's hot, what's flying off
            shelves, and what our customers are rating highest this week.
          </p>
        </div>

        {/* Tabs */}
        <div data-aos="fade-up" className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Description */}
        <div className="text-center mb-8">
          {activeTab === "trending" && (
            <p className="text-sm text-gray-500">🔥 These products are going viral right now across social media and our platform!</p>
          )}
          {activeTab === "bestselling" && (
            <p className="text-sm text-gray-500">💰 Our all-time bestsellers — loved and reordered by thousands of happy customers!</p>
          )}
          {activeTab === "toprated" && (
            <p className="text-sm text-gray-500">⭐ Only products with a 4.9/5 rating make this exclusive list!</p>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeData.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              cart={cart}
              onCart={handleCart}
              wishlist={wishlist}
              onWishlist={toggleWishlist}
              showSold={activeTab === "bestselling"}
            />
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-10">
          <button className="bg-primary hover:scale-105 duration-200 text-white py-2 px-8 rounded-full font-semibold">
            View All Trending Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;