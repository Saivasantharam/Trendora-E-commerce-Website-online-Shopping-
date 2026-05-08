import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const KidsData = [
  // ── BOYS WEAR ──
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?w=400&h=400&fit=crop&crop=top",
    title: "Boys Denim Jacket",
    category: "Boys Wear", age: "4–10 Yrs",
    price: "₹699", originalPrice: "₹1,299",
    rating: 4.6, reviews: 214,
    badge: "Best Seller", color: "Classic Blue",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop&crop=top",
    title: "Boys Graphic T-Shirt",
    category: "Boys Wear", age: "3–12 Yrs",
    price: "₹299", originalPrice: "₹599",
    rating: 4.5, reviews: 432,
    badge: "Trending", color: "Multi Colors",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop&crop=top",
    title: "Boys Jogger Set",
    category: "Boys Wear", age: "5–14 Yrs",
    price: "₹749", originalPrice: "₹1,399",
    rating: 4.7, reviews: 305,
    badge: "Top Pick", color: "Navy Blue",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&h=400&fit=crop&crop=top",
    title: "Boys Formal Shirt",
    category: "Boys Wear", age: "5–14 Yrs",
    price: "₹549", originalPrice: "₹999",
    rating: 4.5, reviews: 142,
    badge: "School Favourite", color: "Crisp White",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1543087903-1ac2364fd7e4?w=400&h=400&fit=crop&crop=top",
    title: "Boys Cargo Shorts",
    category: "Boys Wear", age: "4–12 Yrs",
    price: "₹399", originalPrice: "₹799",
    rating: 4.4, reviews: 267,
    badge: "New Arrival", color: "Khaki",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=400&fit=crop&crop=top",
    title: "Boys Hooded Sweatshirt",
    category: "Boys Wear", age: "4–12 Yrs",
    price: "₹649", originalPrice: "₹1,199",
    rating: 4.6, reviews: 189,
    badge: "Winter Pick", color: "Electric Blue",
  },

  // ── GIRLS WEAR ──
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&h=400&fit=crop&crop=top",
    title: "Girls Party Frock",
    category: "Girls Wear", age: "3–8 Yrs",
    price: "₹849", originalPrice: "₹1,599",
    rating: 4.8, reviews: 178,
    badge: "New Arrival", color: "Rose Pink",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop&crop=top",
    title: "Girls Ethnic Lehenga",
    category: "Girls Wear", age: "4–10 Yrs",
    price: "₹1,199", originalPrice: "₹2,199",
    rating: 4.9, reviews: 267,
    badge: "Festival Special", color: "Golden Yellow",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=400&h=400&fit=crop&crop=top",
    title: "Girls Floral Dress",
    category: "Girls Wear", age: "3–10 Yrs",
    price: "₹699", originalPrice: "₹1,299",
    rating: 4.7, reviews: 312,
    badge: "Trending", color: "Floral Print",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=400&h=400&fit=crop&crop=top",
    title: "Girls Denim Dungaree",
    category: "Girls Wear", age: "3–10 Yrs",
    price: "₹799", originalPrice: "₹1,499",
    rating: 4.8, reviews: 298,
    badge: "Customer Favourite", color: "Light Denim",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1524592095889-19f20c89f3d2?w=400&h=400&fit=crop&crop=top",
    title: "Girls Kurti Set",
    category: "Girls Wear", age: "5–12 Yrs",
    price: "₹649", originalPrice: "₹1,199",
    rating: 4.7, reviews: 234,
    badge: "Festival Special", color: "Pastel Pink",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop&crop=top",
    title: "Girls Tutu Skirt",
    category: "Girls Wear", age: "2–8 Yrs",
    price: "₹499", originalPrice: "₹899",
    rating: 4.6, reviews: 156,
    badge: "New Arrival", color: "Lavender",
  },

  // ── KIDS FOOTWEAR ──
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    title: "Kids Sports Shoes",
    category: "Kids Footwear", age: "3–12 Yrs",
    price: "₹599", originalPrice: "₹1,099",
    rating: 4.7, reviews: 389,
    badge: "Best Seller", color: "White & Blue",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=400&fit=crop",
    title: "Kids Canvas Sneakers",
    category: "Kids Footwear", age: "2–10 Yrs",
    price: "₹499", originalPrice: "₹899",
    rating: 4.5, reviews: 267,
    badge: "Trending", color: "Colourful",
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    title: "Kids School Shoes",
    category: "Kids Footwear", age: "4–14 Yrs",
    price: "₹649", originalPrice: "₹1,199",
    rating: 4.6, reviews: 445,
    badge: "School Favourite", color: "Classic Black",
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop",
    title: "Kids Sandals",
    category: "Kids Footwear", age: "2–10 Yrs",
    price: "₹399", originalPrice: "₹699",
    rating: 4.4, reviews: 189,
    badge: "New Arrival", color: "Brown",
  },

  // ── WINTER WEAR ──
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop&crop=top",
    title: "Kids Winter Hoodie",
    category: "Winter Wear", age: "3–12 Yrs",
    price: "₹899", originalPrice: "₹1,699",
    rating: 4.7, reviews: 389,
    badge: "Winter Must-Have", color: "Grey Melange",
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&h=400&fit=crop&crop=top",
    title: "Kids Woolen Sweater",
    category: "Winter Wear", age: "3–10 Yrs",
    price: "₹699", originalPrice: "₹1,299",
    rating: 4.6, reviews: 178,
    badge: "Winter Must-Have", color: "Caramel Brown",
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1547494791-0db18b5c4d59?w=400&h=400&fit=crop&crop=top",
    title: "Kids Puffer Jacket",
    category: "Winter Wear", age: "4–12 Yrs",
    price: "₹1,099", originalPrice: "₹1,999",
    rating: 4.8, reviews: 234,
    badge: "Winter Must-Have", color: "Bright Red",
  },

  // ── SCHOOL WEAR ──
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop&crop=top",
    title: "School Uniform Set",
    category: "School Wear", age: "5–14 Yrs",
    price: "₹799", originalPrice: "₹1,499",
    rating: 4.5, reviews: 567,
    badge: "School Favourite", color: "White & Navy",
  },
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop",
    title: "Kids School Bag",
    category: "School Wear", age: "4–14 Yrs",
    price: "₹699", originalPrice: "₹1,299",
    rating: 4.7, reviews: 823,
    badge: "Best Seller", color: "Blue & Green",
  },

  // ── ETHNIC WEAR ──
  {
    id: 22,
    img: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=400&h=400&fit=crop&crop=top",
    title: "Boys Kurta Pyjama",
    category: "Ethnic Wear", age: "3–12 Yrs",
    price: "₹799", originalPrice: "₹1,499",
    rating: 4.8, reviews: 312,
    badge: "Festival Special", color: "Royal Blue",
  },
  {
    id: 23,
    img: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400&h=400&fit=crop&crop=top",
    title: "Girls Anarkali Suit",
    category: "Ethnic Wear", age: "4–12 Yrs",
    price: "₹999", originalPrice: "₹1,799",
    rating: 4.9, reviews: 189,
    badge: "Festival Special", color: "Magenta Pink",
  },

  // ── CASUAL WEAR ──
  {
    id: 24,
    img: "https://images.unsplash.com/photo-1543087904-581e0f409d79?w=400&h=400&fit=crop&crop=top",
    title: "Kids Casual T-Shirt",
    category: "Casual Wear", age: "2–12 Yrs",
    price: "₹299", originalPrice: "₹599",
    rating: 4.5, reviews: 678,
    badge: "Trending", color: "Mix Colors",
  },
  {
    id: 25,
    img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&h=400&fit=crop&crop=top",
    title: "Kids Shorts Combo Pack",
    category: "Casual Wear", age: "3–10 Yrs",
    price: "₹449", originalPrice: "₹849",
    rating: 4.6, reviews: 412,
    badge: "Top Pick", color: "Assorted",
  },
  {
    id: 26,
    img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop&crop=top",
    title: "Kids Denim Jeans",
    category: "Casual Wear", age: "4–14 Yrs",
    price: "₹549", originalPrice: "₹999",
    rating: 4.7, reviews: 345,
    badge: "Best Seller", color: "Dark Blue",
  },
];

const badgeColors = {
  "Best Seller": "bg-orange-500",
  "New Arrival": "bg-green-500",
  Trending: "bg-purple-500",
  "Top Pick": "bg-blue-500",
  "Festival Special": "bg-yellow-500",
  "Winter Must-Have": "bg-cyan-600",
  "School Favourite": "bg-indigo-500",
  "Customer Favourite": "bg-pink-500",
  "Winter Pick": "bg-teal-500",
};

const categories = [
  "All", "Boys Wear", "Girls Wear", "Kids Footwear",
  "Winter Wear", "School Wear", "Ethnic Wear", "Casual Wear",
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <FaStar key={star} className={`text-xs ${star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`} />
    ))}
  </div>
);

const KidsWear = ({ handleOrderPopup }) => {
  const [cart, setCart] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

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

  const filtered = KidsData.filter((item) =>
    (activeCategory === "All" || item.category === activeCategory) &&
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = showAll ? filtered : filtered.slice(0, 8);

  return (
    <div className="mb-12">

      {/* ── AD-STYLE HERO HEADER ── */}
      <div className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container py-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div className="text-white">
              <span className="inline-block bg-white/30 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                👶 New Kids Collection 2025
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Dress Your Little Ones in <span className="text-white underline decoration-wavy">Pure Joy!</span>
              </h1>
              <p className="text-white/90 text-sm leading-7 mb-6 max-w-md">
                Soft fabrics. Safe dyes. Adorable styles. Shop India's most loved kids fashion — from festive ethnic wear to everyday casuals. Sizes for 0 to 14 years. Free delivery above ₹499!
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleOrderPopup}
                  className="bg-white text-orange-500 font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg text-sm"
                >
                  🛒 Shop Now — Upto 50% Off
                </button>
                <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-500 transition-all text-sm">
                  View New Arrivals →
                </button>
              </div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mt-6">
                {["🧴 Skin-Safe Fabrics", "🚚 Free Delivery", "🔄 Easy Returns", "⭐ 10K+ Happy Kids"].map((b) => (
                  <span key={b} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">{b}</span>
                ))}
              </div>
            </div>
            {/* Images */}
            <div className="flex justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1476234251651-f353703a034d?w=250&h=350&fit=crop&crop=top"
                alt="Girls Wear"
                className="w-36 h-52 object-cover rounded-3xl shadow-2xl -rotate-3 border-4 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1555009393-f20bdb245c4d?w=250&h=350&fit=crop&crop=top"
                alt="Boys Wear"
                className="w-36 h-52 object-cover rounded-3xl shadow-2xl rotate-3 border-4 border-white mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── AD PROMO STRIP ── */}
      <div className="bg-gray-900 text-white py-3">
        <div className="container flex flex-wrap justify-center gap-6 text-xs font-semibold">
          {[
            "🎉 Flat ₹200 Off on First Order — Use: KIDS200",
            "🚚 Free Delivery on Orders Above ₹499",
            "🔄 30-Day Easy Returns",
            "🎁 Gift Wrapping Available",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1">{item}</span>
          ))}
        </div>
      </div>

      {/* ── AD PROMO BANNERS ── */}
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden h-44 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&h=300&fit=crop&crop=top"
              alt="Festival Wear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <div className="text-white">
                <p className="text-xs font-bold text-yellow-400 mb-1">🎊 Festival Sale</p>
                <h3 className="font-extrabold text-lg leading-tight">Ethnic Wear</h3>
                <p className="text-xs opacity-80">Upto 45% Off</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden h-44 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&h=300&fit=crop&crop=top"
              alt="Boys Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <div className="text-white">
                <p className="text-xs font-bold text-blue-400 mb-1">🔵 Boys Collection</p>
                <h3 className="font-extrabold text-lg leading-tight">Casual & Formal</h3>
                <p className="text-xs opacity-80">Starting ₹299</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden h-44 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1476234251651-f353703a034d?w=500&h=300&fit=crop&crop=top"
              alt="Girls Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <div className="text-white">
                <p className="text-xs font-bold text-pink-400 mb-1">🌸 Girls Collection</p>
                <h3 className="font-extrabold text-lg leading-tight">Frocks & Dresses</h3>
                <p className="text-xs opacity-80">Starting ₹499</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRODUCTS SECTION ── */}
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-medium">Cute, Comfy & Colorful</p>
          <h2 data-aos="fade-up" className="text-3xl font-bold dark:text-white">Kids Wear Collection</h2>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            All made with soft, skin-friendly fabrics — safe for your little ones. Sizes from 0 to 14 years.
          </p>
        </div>

        {/* Search Bar */}
        <div data-aos="fade-up" className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search kids wear... (e.g. frock, jacket, shoes)"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setShowAll(true); }}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-full px-5 py-2.5 pr-12 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <IoMdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Category Filter */}
        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((cat) => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setShowAll(false); setSearch(""); }}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Result Count */}
        <p className="text-center text-xs text-gray-400 mb-6">
          {filtered.length === 0
            ? "No products found 😕"
            : `Showing ${displayed.length} of ${filtered.length} products`}
        </p>

        {/* No Results */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-5xl mb-3">🔍</p>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              No results for "<span className="text-primary font-bold">{search}</span>"
            </p>
            <button onClick={() => setSearch("")} className="mt-4 text-sm text-primary underline">Clear search</button>
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
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">{item.category}</p>
                  <span className="text-[10px] text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">👶 {item.age}</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1 truncate">{item.title}</h3>
                <p className="text-xs text-gray-400 mb-2">🎨 {item.color}</p>
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={item.rating} />
                  <span className="text-xs text-gray-500">{item.rating} ({item.reviews})</span>
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

        {/* View More */}
        {filtered.length > 8 && !search && (
          <div className="flex justify-center mt-10">
            <button onClick={() => setShowAll(!showAll)}
              className="bg-primary hover:scale-105 duration-200 text-white py-2 px-8 rounded-full font-semibold">
              {showAll ? "Show Less ↑" : `View All ${filtered.length} Kids Products →`}
            </button>
          </div>
        )}

        {/* ── BOTTOM AD BANNER ── */}
        <div className="mt-14 rounded-3xl overflow-hidden relative bg-gradient-to-r from-pink-500 to-orange-400 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="text-white flex-1">
            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">🎁 Special Offer</span>
            <h3 className="text-2xl font-extrabold mt-3 mb-2">Buy 2 Get 1 FREE!</h3>
            <p className="text-sm text-white/90 mb-4">On all kids casual wear. Mix and match any 3 items from our collection. Limited time — grab it before it's gone!</p>
            <button className="bg-white text-pink-500 font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform text-sm shadow-lg">
              Claim Offer Now 🎉
            </button>
          </div>
          <div className="flex gap-3">
            <img src="https://images.unsplash.com/photo-1543087904-581e0f409d79?w=120&h=160&fit=crop&crop=top"
              alt="Kids" className="w-24 h-32 object-cover rounded-2xl border-4 border-white shadow-xl -rotate-2" />
            <img src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=120&h=160&fit=crop&crop=top"
              alt="Kids" className="w-24 h-32 object-cover rounded-2xl border-4 border-white shadow-xl rotate-2 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsWear;