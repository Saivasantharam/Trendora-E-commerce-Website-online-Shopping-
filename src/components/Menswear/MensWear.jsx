import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaHeart, FaTruck, FaShieldAlt, FaUndoAlt, FaBolt, FaTimes, FaChevronRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { HiSparkles } from "react-icons/hi";

/* ── ANIMATION STYLES ── */
const animationStyles = `
  @keyframes marquee-continuous {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes fade-up {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes slide-in-left {
    0% { opacity: 0; transform: translateX(-60px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes slide-in-right {
    0% { opacity: 0; transform: translateX(60px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes scale-in {
    0% { opacity: 0; transform: scale(0.85); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
  @keyframes shimmer-text {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 10px rgba(234, 179, 8, 0.2); }
    50% { box-shadow: 0 0 25px rgba(234, 179, 8, 0.5); }
  }
  @keyframes pop-in {
    0% { opacity: 0; transform: scale(0.5) translateY(20px); }
    70% { transform: scale(1.05) translateY(-5px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes confetti-fall {
    0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(60px) rotate(360deg); opacity: 0; }
  }

  .marquee-track { animation: marquee-continuous 25s linear infinite; display: flex; width: max-content; }
  .marquee-track:hover { animation-play-state: paused; }
  .anim-fade-up { animation: fade-up 0.8s ease forwards; }
  .anim-slide-l { animation: slide-in-left 0.8s ease forwards; }
  .anim-slide-r { animation: slide-in-right 0.8s ease forwards; }
  .anim-scale { animation: scale-in 0.8s ease forwards; }
  .anim-float { animation: float 4s ease-in-out infinite; }
  .anim-float-d { animation: float 4. ease-in-out 2s infinite; }
  
  .shimmer-text {
    background: linear-gradient(90deg, #1e293b 0%, #1e293b 40%, #eab308 50%, #1e293b 60%, #1e293b 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer-text 3s linear infinite;
  }
  .dark .shimmer-text {
    background: linear-gradient(90deg, #f8fafc 0%, #f8fafc 40%, #eab308 50%, #f8fafc 60%, #f8fafc 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .card-hover { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease; }
  .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 50px -12px rgba(0,0,0,0.15); }
  .dark .card-hover:hover { box-shadow: 0 20px 50px -12px rgba(0,0,0,0.5); }
  
  .ad-card { transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer; }
  .ad-card:hover { transform: scale(1.02); box-shadow: 0 15px 40px -10px rgba(234, 179, 8, 0.3); }
  
  .popup-overlay { animation: fade-up 0.3s ease forwards; }
  .popup-content { animation: pop-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .confetti { animation: confetti-fall 1.5s ease-out forwards; }
`;

const MensData = [
  { id:1, img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=top", title:"Slim Fit Formal Shirt", category:"Shirts", price:"₹899", originalPrice:"₹1,699", rating:4.8, reviews:634, badge:"Best Seller", color:"Sky Blue" },
  { id:2, img:"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&h=400&fit=crop&crop=top", title:"Casual Linen Shirt", category:"Shirts", price:"₹749", originalPrice:"₹1,399", rating:4.7, reviews:521, badge:"Trending", color:"Mint Green" },
  { id:3, img:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop&crop=top", title:"Classic Oxford Shirt", category:"Shirts", price:"₹999", originalPrice:"₹1,899", rating:4.7, reviews:456, badge:"Best Seller", color:"White" },
  { id:4, img:"https://images.unsplash.com/photo-1563630423918-b58f07336ac5?w=400&h=400&fit=crop&crop=top", title:"Flannel Check Shirt", category:"Shirts", price:"₹949", originalPrice:"₹1,849", rating:4.8, reviews:678, badge:"Top Pick", color:"Red Plaid" },
  { id:5, img:"https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&h=400&fit=crop&crop=top", title:"Button-Down Casual Shirt", category:"Shirts", price:"₹699", originalPrice:"₹1,299", rating:4.5, reviews:823, badge:"New Arrival", color:"Coral Pink" },
  { id:6, img:"https://images.unsplash.com/photo-1529720317453-c8da503f2051?w=400&h=400&fit=crop&crop=top", title:"Long Sleeve Shirt", category:"Shirts", price:"₹849", originalPrice:"₹1,649", rating:4.6, reviews:567, badge:"Trending", color:"Oxford Grey" },
  { id:7, img:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop&crop=top", title:"Graphic Print T-Shirt", category:"T-Shirts", price:"₹499", originalPrice:"₹899", rating:4.5, reviews:789, badge:"New Arrival", color:"Jet Black" },
  { id:8, img:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=top", title:"Polo Collar T-Shirt", category:"T-Shirts", price:"₹649", originalPrice:"₹1,199", rating:4.5, reviews:543, badge:"Trending", color:"Navy Blue" },
  { id:9, img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=top", title:"Cotton Round Neck Tee", category:"T-Shirts", price:"₹399", originalPrice:"₹799", rating:4.5, reviews:1023, badge:"New Arrival", color:"Heather Grey" },
  { id:10, img:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop&crop=top", title:"V-Neck T-Shirt", category:"T-Shirts", price:"₹449", originalPrice:"₹849", rating:4.5, reviews:789, badge:"New Arrival", color:"Burgundy" },
  { id:11, img:"https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&h=400&fit=crop", title:"Slim Fit Denim Jeans", category:"Jeans", price:"₹1,299", originalPrice:"₹2,499", rating:4.7, reviews:918, badge:"Best Seller", color:"Dark Wash Blue" },
  { id:12, img:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop", title:"Straight Fit Jeans", category:"Jeans", price:"₹1,399", originalPrice:"₹2,699", rating:4.7, reviews:912, badge:"Top Pick", color:"Medium Wash" },
  { id:13, img:"https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&h=400&fit=crop", title:"Relaxed Fit Jeans", category:"Jeans", price:"₹1,199", originalPrice:"₹2,299", rating:4.6, reviews:634, badge:"Trending", color:"Light Wash" },
  { id:14, img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop", title:"Slim Fit Chinos", category:"Trousers", price:"₹1,099", originalPrice:"₹1,999", rating:4.6, reviews:412, badge:"Top Pick", color:"Khaki Beige" },
  { id:15, img:"https://images.unsplash.com/photo-1594938298603-c8148c4b4f5e?w=400&h=400&fit=crop", title:"Cargo Pants", category:"Trousers", price:"₹1,199", originalPrice:"₹2,199", rating:4.6, reviews:389, badge:"Top Pick", color:"Olive Green" },
  { id:16, img:"https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400&h=400&fit=crop", title:"Formal Trousers", category:"Trousers", price:"₹1,399", originalPrice:"₹2,699", rating:4.7, reviews:456, badge:"Premium Pick", color:"Charcoal Grey" },
  { id:17, img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=top", title:"Leather Biker Jacket", category:"Jackets", price:"₹2,999", originalPrice:"₹5,499", rating:4.9, reviews:302, badge:"Premium Pick", color:"Midnight Black" },
  { id:18, img:"https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=400&fit=crop&crop=top", title:"Brown Leather Jacket", category:"Jackets", price:"₹3,499", originalPrice:"₹6,999", rating:4.8, reviews:189, badge:"Top Rated", color:"Walnut Brown" },
  { id:19, img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop&crop=top", title:"Denim Trucker Jacket", category:"Jackets", price:"₹1,799", originalPrice:"₹3,299", rating:4.6, reviews:412, badge:"Trending", color:"Light Wash" },
  { id:20, img:"https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400&h=400&fit=crop&crop=top", title:"Puffer Jacket", category:"Jackets", price:"₹2,799", originalPrice:"₹5,499", rating:4.9, reviews:456, badge:"Winter Must-Have", color:"Storm Grey" },
  { id:21, img:"https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=400&h=400&fit=crop&crop=top", title:"Men's Ethnic Kurta", category:"Ethnic Wear", price:"₹999", originalPrice:"₹1,799", rating:4.8, reviews:456, badge:"Festival Special", color:"Royal Maroon" },
  { id:22, img:"https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=400&fit=crop&crop=top", title:"Pathani Suit", category:"Ethnic Wear", price:"₹1,499", originalPrice:"₹2,799", rating:4.7, reviews:289, badge:"Festival Special", color:"Off White" },
  { id:23, img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=top", title:"Sherwani Set", category:"Ethnic Wear", price:"₹2,999", originalPrice:"₹5,999", rating:4.9, reviews:134, badge:"Festival Special", color:"Cream & Gold" },
  { id:24, img:"https://images.unsplash.com/photo-1556906781-9a414e2a9c86?w=400&h=400&fit=crop&crop=top", title:"Sports Track Suit", category:"Activewear", price:"₹1,499", originalPrice:"₹2,799", rating:4.6, reviews:374, badge:"Gym Favourite", color:"Carbon Grey" },
  { id:25, img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=top", title:"Slim Fit Joggers", category:"Activewear", price:"₹799", originalPrice:"₹1,499", rating:4.7, reviews:678, badge:"Gym Favourite", color:"Black" },
  { id:26, img:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop&crop=top", title:"Training Tank Top", category:"Activewear", price:"₹449", originalPrice:"₹899", rating:4.6, reviews:912, badge:"Gym Favourite", color:"Neon Yellow" },
  { id:27, img:"https://images.unsplash.com/photo-1599744331096-99c55a6f9ad8?w=400&h=400&fit=crop&crop=top", title:"Basketball Shorts", category:"Activewear", price:"₹599", originalPrice:"₹1,199", rating:4.6, reviews:678, badge:"Gym Favourite", color:"Royal Blue" },
  { id:28, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", title:"Running Sneakers", category:"Footwear", price:"₹1,899", originalPrice:"₹3,499", rating:4.8, reviews:812, badge:"Top Rated", color:"White & Red" },
  { id:29, img:"https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&h=400&fit=crop", title:"Chelsea Boots", category:"Footwear", price:"₹2,499", originalPrice:"₹4,499", rating:4.9, reviews:267, badge:"Premium Pick", color:"Black Leather" },
  { id:30, img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", title:"Loafer Shoes", category:"Footwear", price:"₹1,499", originalPrice:"₹2,799", rating:4.7, reviews:345, badge:"Best Seller", color:"Tan Leather" },
  { id:31, img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop", title:"Sports Shoes", category:"Footwear", price:"₹2,199", originalPrice:"₹3,999", rating:4.8, reviews:923, badge:"Best Seller", color:"Black & White" },
  { id:32, img:"https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&h=400&fit=crop&crop=top", title:"Hooded Sweatshirt", category:"Winterwear", price:"₹1,199", originalPrice:"₹2,199", rating:4.7, reviews:687, badge:"Winter Must-Have", color:"Charcoal Grey" },
  { id:33, img:"https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400&h=400&fit=crop&crop=top", title:"Crew Neck Sweatshirt", category:"Winterwear", price:"₹1,099", originalPrice:"₹1,999", rating:4.7, reviews:523, badge:"Winter Must-Have", color:"Forest Green" },
  { id:34, img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", title:"Leather Belt & Wallet Combo", category:"Accessories", price:"₹799", originalPrice:"₹1,499", rating:4.6, reviews:291, badge:"Gift Idea", color:"Rich Brown" },
  { id:35, img:"https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop", title:"Canvas Backpack", category:"Accessories", price:"₹899", originalPrice:"₹1,699", rating:4.8, reviews:523, badge:"Trending", color:"Desert Tan" },
  { id:36, img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", title:"Aviator Sunglasses", category:"Accessories", price:"₹699", originalPrice:"₹1,399", rating:4.7, reviews:567, badge:"Trending", color:"Aviator Black" },
  { id:37, img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", title:"Sports Watch", category:"Accessories", price:"₹2,199", originalPrice:"₹4,499", rating:4.8, reviews:734, badge:"Top Rated", color:"Black & Orange" },
  { id:38, img:"https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=400&fit=crop&crop=top", title:"Tailored Blazer", category:"Formal Wear", price:"₹3,999", originalPrice:"₹7,999", rating:4.9, reviews:289, badge:"Premium Pick", color:"Navy Blue" },
  { id:39, img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop&crop=top", title:"3-Piece Formal Suit", category:"Formal Wear", price:"₹5,999", originalPrice:"₹11,999", rating:4.9, reviews:178, badge:"Premium Pick", color:"Charcoal Black" },
];

const badgeColors = {
  "Best Seller":"bg-orange-500", "Trending":"bg-purple-500", "Top Pick":"bg-blue-500",
  "New Arrival":"bg-green-500", "Premium Pick":"bg-gray-800 dark:bg-gray-600", "Festival Special":"bg-yellow-500 text-gray-900",
  "Gym Favourite":"bg-red-500", "Winter Must-Have":"bg-cyan-600", "Top Rated":"bg-primary",
  "Gift Idea":"bg-pink-500",
};

const categories = ["All","Shirts","T-Shirts","Jeans","Trousers","Jackets","Ethnic Wear","Activewear","Footwear","Winterwear","Accessories","Formal Wear"];

const marqueeItems = ["🔥 FLAT ₹300 OFF — Code: TRENDORA300", "🚚 FREE DELIVERY ABOVE ₹499", "⚡ UPTO 50% OFF ON ALL MEN'S WEAR", "💳 NO-COST EMI AVAILABLE", "🔄 30-DAY HASSLE-FREE RETURNS", "⭐ 50,000+ HAPPY CUSTOMERS", "🎉 NEW ARRIVALS ADDED DAILY"];

/* Interactive Ad Data */
const adData = [
  { id: 1, img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&h=400&fit=crop&crop=top", title: "Premium Suits", discount: "60%", code: "SUIT60", bg: "from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700" },
  { id: 2, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop&crop=top", title: "Designer Jackets", discount: "45%", code: "JACKET45", bg: "from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700" },
  { id: 3, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop", title: "Sports Sneakers", discount: "40%", code: "SHOE40", bg: "from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-700" }
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1,2,3,4,5].map((star) => (
      <FaStar key={star} className={`text-[10px] ${star<=Math.floor(rating)?"text-yellow-400":"text-gray-200 dark:text-gray-600"}`} />
    ))}
  </div>
);

const MensWear = ({ handleOrderPopup }) => {
  const [cart, setCart] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  
  // Ad Popup State
  const [adPopup, setAdPopup] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const toggleWishlist = (id) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);

    const handleCart = (product) => {
    // 1. Get current cart from storage
    const existingCart = JSON.parse(localStorage.getItem("trendora_cart")) || [];
    
    // 2. Check if item already exists
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
        title: product.title, // Added both for compatibility
        category: product.category,
        price: parseInt(product.price.replace(/[₹,]/g, "")), // Converts "₹899" to 899
        qty: 1,
        img: product.img,
        image: product.img // Added both for compatibility
      }];
    }

    // 3. Save back to localStorage
    localStorage.setItem("trendora_cart", JSON.stringify(updatedCart));

    // 4. UI Feedback
    setCart(product.id);
    setTimeout(() => setCart(null), 1500);
  };

  const discount = (orig, price) => {
    const o = parseInt(orig.replace(/[₹,]/g, ""));
    const p = parseInt(price.replace(/[₹,]/g, ""));
    return Math.round((1 - p / o) * 100);
  };

  // Handle Ad Click
  const handleAdClick = (ad) => {
    setAdPopup(ad);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1500);
  };

  const filtered = MensData.filter((item) =>
    (activeCategory === "All" || item.category === activeCategory) &&
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const displayed = showAll ? filtered : filtered.slice(0, 8);

  return (
    <div className="mb-12 relative bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <style>{animationStyles}</style>

      {/* ── CONTINUOUS MARQUEE ── */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-gray-900 py-2.5 overflow-hidden shadow-sm">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-xs font-extrabold mx-6 uppercase tracking-wider whitespace-nowrap flex items-center gap-2">
              {item} <span className="text-amber-600">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/30 dark:bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="anim-slide-l">
              <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-amber-200 dark:border-amber-700/50">
                <HiSparkles className="text-amber-500" /> New Collection 2025
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-slate-900 dark:text-white">
                <span className="shimmer-text">Upgrade</span> Your
                <br />
                <span className="text-primary">Wardrobe</span> Today
              </h1>

              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Discover premium men's fashion crafted for the modern Indian. Sharp formals, relaxed casuals, and everything in between.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button onClick={handleOrderPopup}
                  className="bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 flex items-center gap-2 text-sm">
                  Shop Now <FaChevronRight className="text-xs" />
                </button>
                <button className="border-2 border-gray-300 dark:border-gray-600 text-slate-800 dark:text-gray-200 font-semibold px-8 py-3.5 rounded-full hover:border-primary hover:text-primary transition-all text-sm">
                  Explore Categories
                </button>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap gap-6 text-xs text-gray-500 dark:text-gray-400 font-medium">
                <span className="flex items-center gap-1.5"><FaTruck className="text-primary" /> Free Delivery</span>
                <span className="flex items-center gap-1.5"><FaShieldAlt className="text-primary" /> 100% Authentic</span>
                <span className="flex items-center gap-1.5"><FaUndoAlt className="text-primary" /> Easy Returns</span>
              </div>
            </div>

            {/* Hero Images Collage */}
            <div className="anim-slide-r hidden md:flex justify-center items-center relative h-[450px]">
              {/* Backglow */}
              <div className="absolute w-72 h-72 bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-3xl" />
              
              <div className="relative w-full max-w-sm flex justify-center items-end gap-3">
                <div className="flex flex-col gap-3 -rotate-3 translate-y-4">
                  <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=250&h=300&fit=crop&crop=top" alt="Formal" className="w-32 h-44 object-cover object-top rounded-2xl shadow-xl border-4 border-white dark:border-gray-700 anim-float" />
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=250&h=200&fit=crop" alt="Shoes" className="w-32 h-24 object-cover rounded-xl shadow-lg border-4 border-white dark:border-gray-700" />
                </div>
                <div className="rotate-2 -translate-y-6 z-10">
                  <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&h=400&fit=crop&crop=top" alt="Style" className="w-40 h-56 object-cover object-top rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 anim-float-d" />
                </div>
                <div className="flex flex-col gap-3 rotate-3 translate-y-4">
                  <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=250&h=200&fit=crop&crop=top" alt="Jacket" className="w-32 h-24 object-cover object-top rounded-xl shadow-lg border-4 border-white dark:border-gray-700" />
                  <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=250&h=300&fit=crop&crop=top" alt="Shirt" className="w-32 h-44 object-cover object-top rounded-2xl shadow-xl border-4 border-white dark:border-gray-700 anim-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE AD BANNERS ── */}
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {adData.map((ad) => (
            <div key={ad.id} onClick={() => handleAdClick(ad)}
              className={`ad-card relative rounded-2xl overflow-hidden h-48 shadow-md bg-gradient-to-br ${ad.bg}`}>
              <img src={ad.img} alt={ad.title} className="w-full h-full object-cover object-top mix-blend-overlay opacity-60" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">Tap to Reveal Offer</p>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{ad.title}</h3>
                <div className="mt-2 bg-white/90 dark:bg-gray-900/90 text-slate-800 dark:text-white px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-xs font-bold flex items-center gap-1"><FaBolt className="text-amber-500" /> Click Here</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DISCOUNT POPUP MODAL ── */}
      {adPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm popup-overlay" onClick={() => setAdPopup(null)}>
          <div className="popup-content bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
            
            {/* Confetti Effect */}
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="confetti absolute top-0 text-2xl" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 0.5}s` }}>
                    {['🎉', '✨', '🎊', '⭐', '💛'][Math.floor(Math.random() * 5)]}
                  </div>
                ))}
              </div>
            )}

            <div className="relative h-48 overflow-hidden">
              <img src={adPopup.img} alt={adPopup.title} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button onClick={() => setAdPopup(null)} className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition">
                <FaTimes className="text-sm" />
              </button>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">Congratulations! 🎉</p>
                <h3 className="text-white text-2xl font-extrabold mt-1">You Unlocked {adPopup.discount} OFF</h3>
              </div>
            </div>

            <div className="p-6 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Use this exclusive code on {adPopup.title}</p>
              
              <div className="bg-amber-50 dark:bg-amber-900/30 border-2 border-dashed border-amber-400 rounded-xl p-4 mb-6" style={{animation: 'pulse-glow 2s infinite'}}>
                <p className="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase mb-1">Your Discount Code</p>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-widest">{adPopup.code}</p>
              </div>

              <button onClick={() => { handleOrderPopup(); setAdPopup(null); }}
                className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Apply & Shop Now <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CATEGORY QUICK SCROLL ── */}
      <div className="container pb-6">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide pt-2">
          {[
            {cat:"Shirts", img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=200&fit=crop&crop=top"},
            {cat:"T-Shirts", img:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200&h=200&fit=crop&crop=top"},
            {cat:"Jeans", img:"https://images.unsplash.com/photo-1604176354204-9268737828e4?w=200&h=200&fit=crop"},
            {cat:"Jackets", img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop&crop=top"},
            {cat:"Footwear", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop"},
            {cat:"Ethnic Wear", img:"https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=200&h=200&fit=crop&crop=top"},
            {cat:"Activewear", img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=top"},
            {cat:"Formal Wear", img:"https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=200&h=200&fit=crop&crop=top"},
          ].map((c) => (
            <button key={c.cat}
              onClick={() => { setActiveCategory(c.cat); setShowAll(false); document.getElementById("products-section").scrollIntoView({behavior:"smooth"}); }}
              className={`flex-shrink-0 flex flex-col items-center gap-2 group`}>
              <div className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeCategory===c.cat ? "border-primary shadow-lg shadow-primary/30 scale-110" : "border-transparent opacity-80 group-hover:opacity-100 group-hover:border-gray-300 dark:group-hover:border-gray-600"}`}>
                <img src={c.img} alt={c.cat} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className={`text-[10px] font-semibold whitespace-nowrap ${activeCategory===c.cat ? "text-primary" : "text-gray-500 dark:text-gray-400"}`}>{c.cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS SECTION ── */}
      <div id="products-section" className="container">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-primary/20">
            <HiSparkles /> 39 Premium Products
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Men's Collection</h2>
        </div>

        {/* Search & Filter Row */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <div className="relative w-full max-w-md">
            <input type="text" placeholder="Search shirts, jeans, jackets..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setShowAll(true); }}
              className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-3 pr-12 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm transition" />
            <IoMdSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setShowAll(false); setSearch(""); }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-md"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-xs text-gray-400 mb-6">
          {filtered.length === 0 ? "No products found 😕" : `Showing ${displayed.length} of ${filtered.length} products`}
        </p>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-gray-500 font-medium">No results for "<span className="text-primary font-bold">{search}</span>"</p>
            <button onClick={() => setSearch("")} className="mt-4 text-sm text-primary underline font-medium">Clear search</button>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayed.map((item) => (
            <div key={item.id} data-aos="fade-up"
              className="card-hover bg-white dark:bg-gray-800 rounded-2xl overflow-hidden group border border-gray-100 dark:border-gray-700/50">

              {/* Top Section */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-50 dark:bg-gray-700">
                <img src={item.img} alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                  <span className={`text-white text-[9px] font-bold px-2 py-0.5 rounded-md ${badgeColors[item.badge] || "bg-primary"}`}>
                    {item.badge}
                  </span>
                  <span className="bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                    -{discount(item.originalPrice, item.price)}%
                  </span>
                </div>

                {/* Wishlist */}
                <button onClick={() => toggleWishlist(item.id)}
                  className="absolute top-3 right-3 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-sm hover:scale-110 transition-transform">
                  <FaHeart className={`w-3.5 h-3.5 ${wishlist.includes(item.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                </button>

                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button onClick={() => handleCart(item)}
                    className={`w-full text-xs font-bold py-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                      cart === item.id
                        ? "bg-green-500 text-white"
                        : "bg-white text-slate-900 hover:bg-primary hover:text-white"
                    }`}>
                    {cart === item.id ? "✓ Added to Cart" : "🛒 Quick Add to Cart"}
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 sm:p-4">
                <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">{item.category}</p>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1 truncate">{item.title}</h3>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-2">🎨 {item.color}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={item.rating} />
                  <span className="text-[10px] text-gray-400 dark:text-gray-500">({item.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-base font-extrabold text-slate-900 dark:text-white">{item.price}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 line-through ml-1.5">{item.originalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        {filtered.length > 8 && !search && (
          <div className="flex justify-center mt-10">
            <button onClick={() => setShowAll(!showAll)}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100 px-10 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
              {showAll ? "Show Less ↑" : `View All ${filtered.length} Products →`}
            </button>
          </div>
        )}

        {/* ── BOTTOM PROMO BANNER ── */}
        <div className="mt-16 rounded-2xl overflow-hidden relative bg-gradient-to-r from-slate-900 to-slate-800 dark:from-gray-800 dark:to-gray-700 shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          <div className="container py-10 px-6 sm:px-10 flex flex-col sm:flex-row items-center gap-8 relative z-10">
            <div className="flex-1 text-center sm:text-left">
              <span className="inline-flex items-center gap-1 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-400/30 px-3 py-1 rounded-full mb-4">
                <FaBolt /> Limited Time
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Buy 2 Get 1 <span className="text-amber-400">Free!</span>
              </h3>
              <p className="text-gray-400 text-sm mb-5 max-w-sm">
                Mix & match shirts. Formal, casual or ethnic. Use code: <span className="text-amber-400 font-extrabold">MENS200</span>
              </p>
              <button onClick={handleOrderPopup} className="bg-amber-400 text-slate-900 font-extrabold px-8 py-3 rounded-full hover:bg-amber-300 transition-all shadow-lg hover:shadow-amber-400/30 text-sm">
                Claim Offer 🛒
              </button>
            </div>
            <div className="flex gap-3 items-end">
              <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=120&h=160&fit=crop&crop=top" className="w-20 h-28 object-cover object-top rounded-xl shadow-lg border border-white/10 -rotate-3" alt="Shirt" />
              <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=120&h=180&fit=crop&crop=top" className="w-20 h-32 object-cover object-top rounded-xl shadow-lg border border-white/10 -translate-y-4" alt="Shirt" />
              <img src="https://images.unsplash.com/photo-1563630423918-b58f07336ac5?w=120&h=160&fit=crop&crop=top" className="w-20 h-28 object-cover object-top rounded-xl shadow-lg border border-white/10 rotate-3" alt="Shirt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensWear;