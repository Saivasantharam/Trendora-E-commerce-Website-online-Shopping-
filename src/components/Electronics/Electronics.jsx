import React, { useState, useEffect } from "react";
import { FaStar, FaSearch, FaHeart } from "react-icons/fa";

const ElectronicsData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    title: "Smart Watch Pro X",
    category: "Wearables",
    price: "₹4,999", originalPrice: "₹8,999",
    rating: 4.9, reviews: 1203, badge: "Top Rated",
    desc: "1.96\" AMOLED display, 7-day battery life, heart rate monitor, SpO2 tracking, GPS navigation. Compatible with Android & iOS. Water resistant up to 50m.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    title: "Wireless Earbuds Pro",
    category: "Audio",
    price: "₹1,999", originalPrice: "₹3,999",
    rating: 4.8, reviews: 2134, badge: "Best Seller",
    desc: "Active noise cancellation (ANC), 30hr total battery, IPX5 waterproof rating. Touch controls, crystal clear calls with 4 mics. Bluetooth 5.3 connectivity.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    title: "Bluetooth Speaker 360",
    category: "Audio",
    price: "₹1,899", originalPrice: "₹3,499",
    rating: 4.7, reviews: 876, badge: "Trending",
    desc: "360° surround sound, 24-hour playtime, IPX7 waterproof. Built-in mic for calls, TWS pairing, RGB lights. Perfect for pool parties & outdoor adventures.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    title: "Wireless Charging Pad",
    category: "Accessories",
    price: "₹799", originalPrice: "₹1,499",
    rating: 4.6, reviews: 543, badge: "New Arrival",
    desc: "15W fast wireless charging for iPhone, Samsung, Google Pixel. Qi certified, overheating protection, LED charging indicator. Ultra-slim 5mm design.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=400&fit=crop",
    title: "Laptop Stand Pro",
    category: "Accessories",
    price: "₹1,299", originalPrice: "₹2,499",
    rating: 4.7, reviews: 412, badge: "Work From Home",
    desc: "Premium aluminium alloy, 7-level height adjustment (2.7-7.2\"). Fits 10-17\" laptops. Heat dissipation design, foldable & portable. Improves posture.",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&h=400&fit=crop",
    title: "Gaming Headset RGB",
    category: "Gaming",
    price: "₹2,499", originalPrice: "₹4,499",
    rating: 4.8, reviews: 987, badge: "Gamer's Choice",
    desc: "7.1 virtual surround sound, 50mm drivers, RGB lighting effects. Noise-cancelling mic with flip-to-mute. Compatible with PC, PS5, Xbox, Switch.",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=400&h=400&fit=crop",
    title: "Mechanical Keyboard",
    category: "Gaming",
    price: "₹3,499", originalPrice: "₹5,999",
    rating: 4.9, reviews: 743, badge: "Premium Pick",
    desc: "Blue mechanical switches (clicky), full RGB backlighting, N-key rollover. Compact 87-key TKL layout, PBT keycaps, aluminum frame. Hot-swappable PCB.",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    title: "4K Webcam HD",
    category: "Accessories",
    price: "₹2,999", originalPrice: "₹5,499",
    rating: 4.6, reviews: 368, badge: "WFH Essential",
    desc: "True 4K Ultra HD (2160p@30fps), AI auto-focus, dual stereo mics. Privacy shutter, tripod mount. Perfect for Zoom meetings, streaming & content creation.",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400&h=400&fit=crop",
    title: "Power Bank 20000mAh",
    category: "Accessories",
    price: "₹1,499", originalPrice: "₹2,799",
    rating: 4.8, reviews: 1564, badge: "Best Seller",
    desc: "20000mAh capacity, 65W PD fast charging (laptop compatible). 3 outputs: USB-C, USB-A x2. LED display shows battery %, airline approved.",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1585426599858-286a6f2a9e68?w=400&h=400&fit=crop",
    title: "Smart LED Desk Lamp",
    category: "Smart Home",
    price: "₹999", originalPrice: "₹1,799",
    rating: 4.6, reviews: 432, badge: "Study Essential",
    desc: "5 brightness levels + stepless dimming, 3000K-6000K color temp. USB Type-C charging port, touch controls, eye-care flicker-free light.",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    title: "Mini Projector HD",
    category: "Smart Home",
    price: "₹6,999", originalPrice: "₹12,999",
    rating: 4.7, reviews: 289, badge: "Hot Deal",
    desc: "Native 1080P FHD, 12000 lumens, 200\" projection. Android OS, WiFi 6, Bluetooth 5.0, auto keystone correction. Built-in 10W Dolby speakers.",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1588872657578-7efd81c6ed82?w=400&h=400&fit=crop",
    title: "USB-C Hub 7-in-1",
    category: "Accessories",
    price: "₹1,799", originalPrice: "₹3,299",
    rating: 4.5, reviews: 621, badge: "Trending",
    desc: "4K@60Hz HDMI, 100W PD pass-through, 3x USB 3.0 (5Gbps), SD/TF 4.0 card readers. Compact aluminum design, plug & play. MacBook/PC compatible.",
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    title: "True Wireless TWS Earbuds",
    category: "Audio",
    price: "₹2,299", originalPrice: "₹4,499",
    rating: 4.8, reviews: 892, badge: "New Arrival",
    desc: "ANC + Transparency mode, 40hr total playtime, wireless charging case. 6-mic ENC for calls, IPX6 water resistance, find-my-earbuds feature.",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=400&fit=crop",
    title: "Gaming Mouse Pro",
    category: "Gaming",
    price: "₹1,799", originalPrice: "₹3,299",
    rating: 4.9, reviews: 1567, badge: "Gamer's Choice",
    desc: "16000 DPI sensor, 8 programmable buttons, RGB lighting. Omron switches (50M clicks), 1000Hz polling rate, ultra-lightweight 65g design.",
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    title: "Smart Fitness Tracker",
    category: "Wearables",
    price: "₹2,499", originalPrice: "₹4,999",
    rating: 4.7, reviews: 2345, badge: "Best Seller",
    desc: "1.4\" AMOLED touchscreen, 24/7 heart rate, sleep tracking, 100+ sports modes. 14-day battery, call/SMS notifications, women's health tracking.",
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
    title: "Neckband Bluetooth",
    category: "Audio",
    price: "₹999", originalPrice: "₹1,999",
    rating: 4.6, reviews: 3456, badge: "Trending",
    desc: "20hr battery life, magnetic controls, IPX5 sweatproof. 10mm drivers for deep bass, fast charging (10min = 5hr playtime), dual device pairing.",
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&h=400&fit=crop",
    title: "SSD External 1TB",
    category: "Accessories",
    price: "₹5,999", originalPrice: "₹9,999",
    rating: 4.8, reviews: 1234, badge: "Hot Deal",
    desc: "1TB NVMe SSD, 1050MB/s read, 1000MB/s write speeds. USB 3.2 Gen2, metal aluminum body, shockproof. Mac/Windows/PS5 compatible.",
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
    title: "Smart Doorbell Camera",
    category: "Smart Home",
    price: "₹3,499", originalPrice: "₹6,499",
    rating: 4.7, reviews: 789, badge: "New Arrival",
    desc: "2K HD video, 180° wide angle, night vision. Motion detection, 2-way audio, local storage. Battery powered, weatherproof IP65 rating.",
  },
];

const badgeColors = {
  "Top Rated": "bg-blue-500",
  "Best Seller": "bg-orange-500",
  Trending: "bg-purple-500",
  "New Arrival": "bg-green-500",
  "Work From Home": "bg-indigo-500",
  "Gamer's Choice": "bg-red-600",
  "Premium Pick": "bg-gray-800",
  "WFH Essential": "bg-teal-500",
  "Study Essential": "bg-yellow-500",
  "Hot Deal": "bg-red-500",
};

const categories = ["All", "Audio", "Wearables", "Gaming", "Accessories", "Smart Home"];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <FaStar key={star}
        className={`text-xs ${star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`} />
    ))}
  </div>
);

const Electronics = ({ handleOrderPopup }) => {
  const [cart, setCart] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ElectronicsData);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let filtered = ElectronicsData;
    if (activeCategory !== "All") {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }
    if (searchQuery.trim()) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
    setShowAll(false);
  }, [activeCategory, searchQuery]);

  const toggleWishlist = (id) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);

    const handleCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("trendora_cart")) || [];
    const isExisting = existingCart.find(item => item.id === product.id);
    
    let updatedCart;
    if (isExisting) {
      updatedCart = existingCart.map(item => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, {
        id: product.id,
        name: product.title,
        title: product.title,
        category: product.category,
        price: parseInt(String(product.price).replace(/[₹,]/g, "")), 
        qty: 1,
        img: product.img,
        image: product.img 
      }];
    }
    localStorage.setItem("trendora_cart", JSON.stringify(updatedCart));

    setCart(product.id);
    setTimeout(() => setCart(null), 1500);
  };

  const displayed = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <div className="mb-12">

      {/* ── AD-STYLE HERO HEADER ── */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-cyan-900 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>

        <div className="container py-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">

            {/* Text */}
            <div className="text-white">
              <span className="inline-block bg-white/15 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest border border-cyan-500/30">
                ⚡ New Tech Collection 2025
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Next-Level Gadgets at{" "}
                <span className="text-cyan-400 underline decoration-wavy">Unbeatable Prices!</span>
              </h1>
              <p className="text-white/85 text-sm leading-7 mb-6 max-w-md">
                From pro-level audio to smart home devices and gaming gear — shop India's most loved electronics. All products include official warranty & easy 7-day returns. Fast delivery pan India!
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleOrderPopup}
                  className="bg-cyan-400 text-gray-900 font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg text-sm"
                >
                  🛒 Shop Now — Upto 60% Off
                </button>
                <button className="border-2 border-white/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all text-sm">
                  Explore All Gadgets →
                </button>
              </div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                {["✅ Official Warranty", "🚚 Free Delivery", "🔄 7-Day Returns", "🔒 Secure Payment"].map((b) => (
                  <span key={b} className="text-xs bg-white/10 text-white px-3 py-1 rounded-full font-medium border border-white/10">{b}</span>
                ))}
              </div>
            </div>

            {/* 3 Product Portrait Images */}
            <div className="flex justify-center gap-3 items-end">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=280&fit=crop"
                alt="Smart Watch"
                className="w-28 h-44 object-cover rounded-2xl shadow-2xl -rotate-3 border-2 border-cyan-400/40"
              />
              <img
                src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=200&h=280&fit=crop"
                alt="Earbuds"
                className="w-28 h-52 object-cover rounded-2xl shadow-2xl border-2 border-purple-400/40 -mb-4"
              />
              <img
                src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=200&h=280&fit=crop"
                alt="Keyboard"
                className="w-28 h-44 object-cover rounded-2xl shadow-2xl rotate-3 border-2 border-cyan-400/40"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── AD PROMO STRIP ── */}
      <div className="bg-cyan-400 text-gray-900 py-3">
        <div className="container flex flex-wrap justify-center gap-6 text-xs font-bold">
          {[
            "⚡ Flat ₹500 Off — Use: TECH500",
            "🚚 Free Delivery on All Electronics",
            "🔄 7-Day Easy Returns",
            "🛡️ 1-Year Warranty on All Products",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1">{item}</span>
          ))}
        </div>
      </div>

      {/* ── AD PROMO BANNERS ── */}
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 — Audio */}
          <div className="relative rounded-2xl overflow-hidden h-44 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=300&fit=crop"
              alt="Audio"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent flex items-end p-4">
              <div className="text-white">
                <p className="text-xs font-bold text-cyan-400 mb-1">🎵 Sound That Hits Different</p>
                <h3 className="font-extrabold text-lg leading-tight">Audio Collection</h3>
                <p className="text-xs opacity-80">Earbuds, Speakers & Headsets</p>
              </div>
            </div>
          </div>
          {/* Card 2 — Gaming */}
          <div className="relative rounded-2xl overflow-hidden h-44 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=500&h=300&fit=crop"
              alt="Gaming"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent flex items-end p-4">
              <div className="text-white">
                <p className="text-xs font-bold text-red-400 mb-1">🎮 Level Up Your Setup</p>
                <h3 className="font-extrabold text-lg leading-tight">Gaming Gear</h3>
                <p className="text-xs opacity-80">Keyboards, Mouse & Headsets</p>
              </div>
            </div>
          </div>
          {/* Card 3 — Smart Home */}
          <div className="relative rounded-2xl overflow-hidden h-44 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=300&fit=crop"
              alt="Smart Home"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent flex items-end p-4">
              <div className="text-white">
                <p className="text-xs font-bold text-yellow-400 mb-1">🏠 Make Your Home Smarter</p>
                <h3 className="font-extrabold text-lg leading-tight">Smart Home</h3>
                <p className="text-xs opacity-80">Projectors, Lamps & Cameras</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRODUCTS SECTION ── */}
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-8 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-medium">Gadgets You'll Love</p>
          <h2 data-aos="fade-up" className="text-3xl font-bold dark:text-white">Electronics Collection</h2>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            From smart gadgets to gaming gear — explore top-rated electronics at the best prices. All products come with official warranty and easy returns.
          </p>
        </div>

        {/* Search Bar */}
        <div data-aos="fade-up" className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search electronics... (e.g. earbuds, keyboard, watch)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="text-center text-xs text-gray-400 mb-6">
          {filteredProducts.length === 0
            ? "No products found 😕"
            : `Showing ${displayed.length} of ${filteredProducts.length} products`}
        </p>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-5xl mb-3">🔍</p>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              No results for "<span className="text-primary font-bold">{searchQuery}</span>"
            </p>
            <button onClick={() => setSearchQuery("")} className="mt-4 text-sm text-primary underline">Clear search</button>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayed.map((item) => (
            <div key={item.id} data-aos="fade-up"
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
              <span className={`absolute top-3 left-3 z-10 text-white text-[10px] font-bold px-2 py-1 rounded-full ${badgeColors[item.badge] || "bg-primary"}`}>
                {item.badge}
              </span>
              <button onClick={() => toggleWishlist(item.id)}
                className="absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow hover:scale-110 transition-transform">
                <FaHeart className={`w-3 h-3 ${wishlist.includes(item.id) ? "text-red-500" : "text-gray-300"}`} />
              </button>
              <div className="h-52 overflow-hidden bg-gray-50">
                <img src={item.img} alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{item.category}</p>
                <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1 truncate">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">{item.desc}</p>
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={item.rating} />
                  <span className="text-xs text-gray-500">{item.rating} ({item.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-gray-900 dark:text-white">{item.price}</span>
                    <span className="text-xs text-gray-400 line-through ml-2">{item.originalPrice}</span>
                  </div>
                  <button onClick={() => handleCart(item)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
                      cart === item.id ? "bg-green-500 text-white scale-95" : "bg-primary text-white hover:scale-105"
                    }`}>
                    {cart === item.id ? "✓ Added!" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Less */}
        {filteredProducts.length > 8 && !searchQuery && (
          <div className="flex justify-center mt-10">
            <button onClick={() => setShowAll(!showAll)}
              className="bg-primary hover:scale-105 duration-200 text-white py-2 px-8 rounded-full font-semibold">
              {showAll ? "Show Less ↑" : `View All ${filteredProducts.length} Products →`}
            </button>
          </div>
        )}

        {/* ── BOTTOM AD BANNER ── */}
        <div className="mt-14 rounded-3xl overflow-hidden relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-8 flex flex-col sm:flex-row items-center gap-6">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="text-white flex-1 relative z-10">
            <span className="text-xs font-bold bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">🎮 Gamer's Special</span>
            <h3 className="text-2xl font-extrabold mt-3 mb-2">Complete Gaming Setup — Save ₹2,000!</h3>
            <p className="text-sm text-white/85 mb-4">
              Buy any Gaming Keyboard + Mouse combo and get a FREE RGB mousepad worth ₹799! Limited stock — grab it before it's gone!
            </p>
            <button className="bg-cyan-400 text-gray-900 font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform text-sm shadow-lg">
              Claim Offer Now ⚡
            </button>
          </div>
          <div className="flex gap-3 relative z-10">
            <img
              src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=120&h=160&fit=crop"
              alt="Keyboard"
              className="w-24 h-32 object-cover rounded-2xl border-2 border-cyan-400/40 shadow-xl -rotate-2"
            />
            <img
              src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=120&h=160&fit=crop"
              alt="Mouse"
              className="w-24 h-32 object-cover rounded-2xl border-2 border-purple-400/40 shadow-xl rotate-2 mt-4"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Electronics;