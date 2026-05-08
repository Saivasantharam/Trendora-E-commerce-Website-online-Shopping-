import React, { useState } from "react";
import { FaStar, FaHeart, FaFire, FaShoppingCart, FaCheck } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";

const ProductsData = [
  // ── WOMEN'S WEAR ──
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=450&fit=crop&crop=top",
    title: "Floral Kurti",
    category: "Women's Wear",
    price: 899, originalPrice: 1499,
    rating: 4.8, reviews: 312,
    badge: "Bestseller", color: "Floral Blue",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=450&fit=crop&crop=top",
    title: "Women Ethnic Dress",
    category: "Women's Wear",
    price: 1099, originalPrice: 1999,
    rating: 4.9, reviews: 934,
    badge: "Most Loved", color: "Maroon",
    aosDelay: "100",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=450&fit=crop&crop=top",
    title: "Women Western Top",
    category: "Women's Wear",
    price: 649, originalPrice: 999,
    rating: 4.5, reviews: 189,
    badge: "New", color: "Coral Red",
    aosDelay: "200",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=450&fit=crop&crop=top",
    title: "Fashion Crop Top",
    category: "Women's Wear",
    price: 549, originalPrice: 949,
    rating: 4.5, reviews: 178,
    badge: "Hot", color: "Pastel Pink",
    aosDelay: "300",
  },

  // ── MEN'S WEAR ──
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=450&fit=crop&crop=top",
    title: "Casual T-Shirt",
    category: "Men's Wear",
    price: 499, originalPrice: 899,
    rating: 4.5, reviews: 789,
    badge: "New", color: "Jet Black",
    aosDelay: "0",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=450&fit=crop&crop=top",
    title: "Linen Casual Shirt",
    category: "Men's Wear",
    price: 749, originalPrice: 1399,
    rating: 4.7, reviews: 521,
    badge: "Trending", color: "Mint Green",
    aosDelay: "100",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=450&fit=crop&crop=top",
    title: "Leather Biker Jacket",
    category: "Men's Wear",
    price: 2999, originalPrice: 5499,
    rating: 4.9, reviews: 302,
    badge: "Premium", color: "Midnight Black",
    aosDelay: "200",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=450&fit=crop&crop=top",
    title: "Polo Collar T-Shirt",
    category: "Men's Wear",
    price: 649, originalPrice: 1199,
    rating: 4.5, reviews: 543,
    badge: "Trending", color: "Navy Blue",
    aosDelay: "300",
  },

  // ── FOOTWEAR ──
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=450&fit=crop",
    title: "Classic White Sneakers",
    category: "Footwear",
    price: 1299, originalPrice: 2499,
    rating: 4.9, reviews: 842,
    badge: "Bestseller", color: "Clean White",
    aosDelay: "0",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=450&fit=crop",
    title: "Running Shoes Pro",
    category: "Footwear",
    price: 1899, originalPrice: 3499,
    rating: 4.8, reviews: 812,
    badge: "Top Rated", color: "White & Red",
    aosDelay: "100",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=450&fit=crop",
    title: "Loafer Shoes",
    category: "Footwear",
    price: 1499, originalPrice: 2799,
    rating: 4.7, reviews: 345,
    badge: "Bestseller", color: "Tan Leather",
    aosDelay: "200",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=450&fit=crop",
    title: "Kids Canvas Sneakers",
    category: "Footwear",
    price: 499, originalPrice: 899,
    rating: 4.5, reviews: 267,
    badge: "Trending", color: "Colourful",
    aosDelay: "300",
  },

  // ── ELECTRONICS ──
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=450&fit=crop",
    title: "Smart Watch Pro X",
    category: "Electronics",
    price: 4999, originalPrice: 8999,
    rating: 4.9, reviews: 1203,
    badge: "Top Rated", color: "Midnight Black",
    aosDelay: "0",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=450&fit=crop",
    title: "Wireless Earbuds Pro",
    category: "Electronics",
    price: 1999, originalPrice: 3999,
    rating: 4.8, reviews: 2134,
    badge: "Bestseller", color: "Pearl White",
    aosDelay: "100",
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=450&fit=crop",
    title: "Bluetooth Speaker 360",
    category: "Electronics",
    price: 1899, originalPrice: 3499,
    rating: 4.7, reviews: 711,
    badge: "Trending", color: "Space Black",
    aosDelay: "200",
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400&h=450&fit=crop",
    title: "Power Bank 20000mAh",
    category: "Electronics",
    price: 1499, originalPrice: 2799,
    rating: 4.8, reviews: 1564,
    badge: "Bestseller", color: "Matte Black",
    aosDelay: "300",
  },

  // ── KIDS WEAR ──
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&h=450&fit=crop&crop=top",
    title: "Girls Party Frock",
    category: "Kids Wear",
    price: 849, originalPrice: 1599,
    rating: 4.8, reviews: 178,
    badge: "New", color: "Rose Pink",
    aosDelay: "0",
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=450&fit=crop&crop=top",
    title: "Girls Ethnic Lehenga",
    category: "Kids Wear",
    price: 1199, originalPrice: 2199,
    rating: 4.9, reviews: 267,
    badge: "Festival Special", color: "Golden Yellow",
    aosDelay: "100",
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=450&fit=crop&crop=top",
    title: "Boys Graphic T-Shirt",
    category: "Kids Wear",
    price: 299, originalPrice: 599,
    rating: 4.5, reviews: 432,
    badge: "Trending", color: "Multi Colors",
    aosDelay: "200",
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=450&fit=crop&crop=top",
    title: "Kids Winter Hoodie",
    category: "Kids Wear",
    price: 899, originalPrice: 1699,
    rating: 4.7, reviews: 389,
    badge: "Winter Pick", color: "Grey Melange",
    aosDelay: "300",
  },

  // ── ACCESSORIES ──
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=450&fit=crop",
    title: "UV Sunglasses",
    category: "Accessories",
    price: 399, originalPrice: 699,
    rating: 4.7, reviews: 234,
    badge: "Trending", color: "Matte Brown",
    aosDelay: "0",
  },
  {
    id: 22,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=450&fit=crop",
    title: "Leather Belt & Wallet",
    category: "Accessories",
    price: 799, originalPrice: 1499,
    rating: 4.6, reviews: 291,
    badge: "Gift Idea", color: "Rich Brown",
    aosDelay: "100",
  },
  {
    id: 23,
    img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=450&fit=crop",
    title: "Canvas Backpack",
    category: "Accessories",
    price: 899, originalPrice: 1699,
    rating: 4.8, reviews: 523,
    badge: "Trending", color: "Desert Tan",
    aosDelay: "200",
  },
  {
    id: 24,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=450&fit=crop",
    title: "Luxury Perfume Set",
    category: "Accessories",
    price: 1499, originalPrice: 2799,
    rating: 4.7, reviews: 389,
    badge: "Premium", color: "Gold",
    aosDelay: "300",
  },
];

const badgeConfig = {
  "Bestseller": { bg: "bg-orange-500", icon: "🔥" },
  "Most Loved": { bg: "bg-pink-500", icon: "💖" },
  "New": { bg: "bg-green-500", icon: "✨" },
  "Hot": { bg: "bg-red-500", icon: "🌶️" },
  "Trending": { bg: "bg-purple-500", icon: "📈" },
  "Premium": { bg: "bg-gray-800", icon: "💎" },
  "Top Rated": { bg: "bg-blue-500", icon: "⭐" },
  "Winter Pick": { bg: "bg-cyan-600", icon: "❄️" },
  "Festival Special": { bg: "bg-yellow-500", icon: "🎊" },
  "Gift Idea": { bg: "bg-pink-400", icon: "🎁" },
};

const categories = ["All", "Women's Wear", "Men's Wear", "Footwear", "Electronics", "Kids Wear", "Accessories"];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <FaStar key={star}
        className={`text-xs ${star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`} />
    ))}
  </div>
);

const Products = () => {
  const [cart, setCart] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleWishlist = (id) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) return prev.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...item, qty: 1 }];
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);
  const totalPrice = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  const filtered = ProductsData.filter((item) =>
    (activeCategory === "All" || item.category === activeCategory) &&
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = showAll ? filtered : filtered.slice(0, 8);

  const discount = (orig, price) => Math.round((1 - price / orig) * 100);

  return (
    <div className="mt-14 mb-12 relative">

      {/* ── CART SIDEBAR ── */}
      {cartOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-[320px] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col">
            <div className="flex items-center justify-between p-5 border-b dark:border-gray-700 bg-primary/10">
              <div className="flex items-center gap-2">
                <FaShoppingCart className="text-primary" />
                <h2 className="font-bold text-lg dark:text-white">My Cart
                  <span className="ml-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">{totalItems}</span>
                </h2>
              </div>
              <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-red-500 text-xl font-bold">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
                  <span className="text-5xl">🛒</span>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">Your cart is empty!</p>
                  <button onClick={() => setCartOpen(false)} className="text-sm text-primary underline">Continue Shopping</button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
                    <img src={item.img} alt={item.title} className="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold dark:text-white truncate">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.category}</p>
                      <p className="text-sm font-bold text-primary mt-1">₹{item.price.toLocaleString()} × {item.qty}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 text-xs self-start mt-1">✕</button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-5 border-t dark:border-gray-700">
                <div className="flex justify-between font-bold text-lg dark:text-white mb-3">
                  <span>Total</span>
                  <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-full hover:scale-105 transition-transform text-sm">
                  Proceed to Checkout 🛒
                </button>
                <button onClick={() => setCart([])} className="w-full text-xs text-gray-400 hover:text-red-500 mt-2 py-1 transition-colors">
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </>
      )}

      <div className="container">

        {/* ── HEADING SECTION ── */}
        <div className="text-center mb-10">
          {/* Top label */}
          <div data-aos="fade-up" className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1">
              <FaFire className="text-orange-500" /> Handpicked for You
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main title */}
          <h1 data-aos="fade-up"
            className="text-4xl sm:text-5xl font-extrabold dark:text-white leading-tight mb-3">
            Our{" "}
            <span className="relative inline-block">
              <span className="text-primary">Products</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5 Q150,10 200,5" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
            From fashion to electronics — explore our most loved collection curated for every style, age, and occasion. Premium quality at unbeatable prices.
          </p>

          {/* Mini stats */}
          <div data-aos="fade-up" className="flex justify-center gap-6 mt-5 flex-wrap">
            {[
              { val: "500+", label: "Products" },
              { val: "4.7★", label: "Avg Rating" },
              { val: "50K+", label: "Happy Buyers" },
              { val: "Free", label: "Delivery ₹499+" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-lg font-extrabold text-primary">{s.val}</p>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SEARCH + CART BUTTON ── */}
        <div data-aos="fade-up" className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search products... (e.g. kurti, shoes, watch)"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setShowAll(true); }}
              className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-full px-5 py-2.5 pr-12 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <IoMdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
          {/* Cart button */}
          <button onClick={() => setCartOpen(true)}
            className="relative bg-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform flex-shrink-0">
            <FaShoppingCart />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* ── CATEGORY FILTER ── */}
        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((cat) => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setShowAll(false); setSearch(""); }}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="text-center text-xs text-gray-400 mb-6">
          {filtered.length === 0
            ? "No products found 😕"
            : `Showing ${displayed.length} of ${filtered.length} products`}
        </p>

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-5xl mb-3">🔍</p>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              No results for "<span className="text-primary font-bold">{search}</span>"
            </p>
            <button onClick={() => setSearch("")} className="mt-4 text-sm text-primary underline">Clear search</button>
          </div>
        )}

        {/* ── PRODUCTS GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {displayed.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
            >
              {/* Discount tag */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                <span className={`text-white text-[9px] font-bold px-2 py-0.5 rounded-full ${badgeConfig[item.badge]?.bg || "bg-primary"}`}>
                  {badgeConfig[item.badge]?.icon} {item.badge}
                </span>
                <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  -{discount(item.originalPrice, item.price)}%
                </span>
              </div>

              {/* Wishlist */}
              <button onClick={() => toggleWishlist(item.id)}
                className="absolute top-3 right-3 z-10 bg-white dark:bg-gray-700 rounded-full p-1.5 shadow hover:scale-110 transition-transform">
                <FaHeart className={`w-3 h-3 ${wishlist.includes(item.id) ? "text-red-500" : "text-gray-300"}`} />
              </button>

              {/* Image */}
              <div className="overflow-hidden h-[200px] bg-gray-50">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-0.5">{item.category}</p>
                <h3 className="font-semibold text-gray-800 dark:text-white text-sm truncate mb-0.5">{item.title}</h3>
                <p className="text-[10px] text-gray-400 mb-1.5">🎨 {item.color}</p>

                {/* Stars + reviews */}
                <div className="flex items-center gap-1 mb-2">
                  <StarRating rating={item.rating} />
                  <span className="text-[10px] text-gray-500">({item.reviews})</span>
                </div>

                {/* Price + button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-extrabold text-gray-900 dark:text-white">
                      ₹{item.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-gray-400 line-through ml-1">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 ${
                      addedId === item.id
                        ? "bg-green-500 text-white scale-95"
                        : "bg-primary text-white hover:scale-105"
                    }`}
                  >
                    {addedId === item.id ? <><FaCheck className="text-[8px]" /> Added</> : <>+ Cart</>}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Less button */}
        {filtered.length > 8 && !search && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-primary hover:scale-105 duration-200 text-white py-2.5 px-10 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              {showAll ? "Show Less ↑" : `View All ${filtered.length} Products →`}
            </button>
          </div>
        )}

        {/* ── OFFER STRIP ── */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🚚", title: "Free Delivery", desc: "On orders above ₹499", bg: "from-blue-500 to-indigo-600" },
            { icon: "🔄", title: "Easy Returns", desc: "30-day hassle-free returns", bg: "from-green-500 to-emerald-600" },
            { icon: <MdLocalOffer className="text-2xl" />, title: "Use Code: SHOP200", desc: "Flat ₹200 Off on first order", bg: "from-primary to-orange-500" },
          ].map((strip, i) => (
            <div key={i} data-aos="fade-up"
              className={`bg-gradient-to-r ${strip.bg} rounded-2xl p-5 flex items-center gap-4 text-white shadow-lg`}>
              <span className="text-3xl flex-shrink-0">{strip.icon}</span>
              <div>
                <p className="font-bold text-sm">{strip.title}</p>
                <p className="text-xs text-white/80">{strip.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;