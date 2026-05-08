import React, { useState } from "react";
import { FaStar, FaCrown, FaFire, FaTrophy, FaHeart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

/* ── NEON GLOW KEYFRAMES injected once ── */
const neonStyles = `
  @keyframes neon-orange {
    0%,100% { box-shadow: 0 0 6px #f97316, 0 0 20px #f97316, 0 0 40px #f97316aa, 0 0 60px #f9731655; }
    50%      { box-shadow: 0 0 12px #f97316, 0 0 35px #f97316, 0 0 70px #f97316cc, 0 0 90px #f9731688; }
  }
  @keyframes neon-gold {
    0%,100% { box-shadow: 0 0 6px #facc15, 0 0 20px #facc15, 0 0 40px #facc15aa, 0 0 60px #facc1555; }
    50%      { box-shadow: 0 0 12px #facc15, 0 0 35px #facc15, 0 0 70px #facc15cc, 0 0 90px #facc1588; }
  }
  @keyframes neon-cyan {
    0%,100% { box-shadow: 0 0 6px #06b6d4, 0 0 20px #06b6d4, 0 0 40px #06b6d4aa, 0 0 60px #06b6d455; }
    50%      { box-shadow: 0 0 12px #06b6d4, 0 0 35px #06b6d4, 0 0 70px #06b6d4cc, 0 0 90px #06b6d488; }
  }
  @keyframes neon-pink {
    0%,100% { box-shadow: 0 0 6px #ec4899, 0 0 20px #ec4899, 0 0 40px #ec4899aa, 0 0 60px #ec489955; }
    50%      { box-shadow: 0 0 12px #ec4899, 0 0 35px #ec4899, 0 0 70px #ec4899cc, 0 0 90px #ec489988; }
  }
  @keyframes border-spin {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes float-up {
    0%,100% { transform: translateY(-12px) scale(1.05); }
    50%      { transform: translateY(-20px) scale(1.08); }
  }
  @keyframes shimmer-text {
    0%   { background-position: 200% center; }
    100% { background-position: -200% center; }
  }
  @keyframes badge-pulse {
    0%,100% { transform: scale(1); }
    50%      { transform: scale(1.08); }
  }
  .neon-orange { animation: neon-orange 2s ease-in-out infinite; border: 2px solid #f97316; }
  .neon-gold   { animation: neon-gold   2s ease-in-out infinite; border: 2px solid #facc15; }
  .neon-cyan   { animation: neon-cyan   2s ease-in-out infinite; border: 2px solid #06b6d4; }
  .neon-pink   { animation: neon-pink   2s ease-in-out infinite; border: 2px solid #ec4899; }
  .img-float   { animation: float-up 3s ease-in-out infinite; }
  .badge-pulse { animation: badge-pulse 1.8s ease-in-out infinite; }
  .shimmer {
    background: linear-gradient(90deg,#fff 0%,#fff 30%,#fdba74 45%,#fb923c 50%,#f97316 55%,#fff 70%,#fff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer-text 3s linear infinite;
  }
  .neon-border-wrap {
    position: relative;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(270deg,#f97316,#facc15,#ec4899,#06b6d4,#f97316);
    background-size: 300% 300%;
    animation: border-spin 3s ease infinite;
  }
  .card-inner {
    border-radius: 22px;
    background: white;
    overflow: hidden;
    height: 100%;
  }
  .dark .card-inner { background: #1f2937; }
`;

const ProductsData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop&crop=top",
    title: "Classic Casual Shirt",
    price: "₹899", originalPrice: "₹1,699",
    rating: 4, reviews: 634, sold: "6,200+",
    category: "Men's Wear", rank: 1,
    neon: "neon-gold",
    rankLabel: "🥇 #1 Best Seller",
    rankColor: "text-yellow-400",
    tagBg: "bg-yellow-400 text-gray-900",
    description: "A must-have everyday casual shirt made from 100% breathable cotton. Perfect for office, outings, and casual hangouts.",
    tags: ["Cotton", "Slim Fit", "Casual"],
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop&crop=top",
    title: "Graphic Printed Shirt",
    price: "₹749", originalPrice: "₹1,399",
    rating: 4, reviews: 521, sold: "4,800+",
    category: "Men's Wear", rank: 2,
    neon: "neon-orange",
    rankLabel: "🔥 Trending Now",
    rankColor: "text-orange-400",
    tagBg: "bg-orange-500 text-white",
    description: "Stand out with our trendy graphic printed shirt. Slim-fit design with vibrant prints. Great for weekend outings.",
    tags: ["Graphic Print", "Weekend", "Trendy"],
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=400&fit=crop&crop=top",
    title: "Women's Floral Shirt",
    price: "₹699", originalPrice: "₹1,299",
    rating: 5, reviews: 789, sold: "9,100+",
    category: "Women's Wear", rank: 3,
    neon: "neon-pink",
    rankLabel: "💖 Most Loved",
    rankColor: "text-pink-400",
    tagBg: "bg-pink-500 text-white",
    description: "Elegant floral design meets everyday comfort. Crafted from soft fabric with a relaxed fit — ideal for brunches and dates.",
    tags: ["Floral", "Relaxed Fit", "Elegant"],
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <FaStar key={star}
        className={`text-sm ${star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`} />
    ))}
  </div>
);

const TopProducts = ({ handleOrderPopup }) => {
  const [wishlist, setWishlist] = useState([]);
  const [ordered, setOrdered] = useState(null);
  const [active, setActive] = useState(null);

  const toggleWishlist = (id) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);

  const handleOrder = (id) => {
    setOrdered(id);
    setTimeout(() => setOrdered(null), 1600);
    handleOrderPopup();
  };

  const discount = (orig, price) => {
    const o = parseInt(orig.replace(/[₹,]/g, ""));
    const p = parseInt(price.replace(/[₹,]/g, ""));
    return Math.round((1 - p / o) * 100);
  };

  return (
    <div className="py-16 bg-gray-950 dark:bg-gray-950 relative overflow-hidden">
      {/* inject keyframes */}
      <style>{neonStyles}</style>

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "linear-gradient(#f97316 1px,transparent 1px),linear-gradient(90deg,#f97316 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10">

        {/* ── HEADING ── */}
        <div className="text-center mb-14">
          <div data-aos="fade-up"
            className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
            <HiSparkles /> Top Rated Products <HiSparkles />
          </div>

          <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            <span className="shimmer">Best Products</span>
          </h1>

          <p data-aos="fade-up" className="text-sm text-gray-400 max-w-lg mx-auto leading-relaxed mb-8">
            Our customers can't stop raving about these picks. Highest rated, most loved — discover why they're flying off the shelves every single day.
          </p>

          {/* Stat pills */}
          <div data-aos="fade-up" className="flex justify-center gap-3 flex-wrap">
            {[
              { icon: <FaTrophy className="text-yellow-400" />, text: "All 4.0★ & Above" },
              { icon: <MdVerified className="text-green-400" />, text: "Verified Reviews" },
              { icon: <FaFire className="text-orange-400" />, text: "20K+ Sold This Month" },
            ].map((pill) => (
              <div key={pill.text}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-gray-300">
                {pill.icon} {pill.text}
              </div>
            ))}
          </div>
        </div>

        {/* ── PRODUCT CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {ProductsData.map((data, idx) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              data-aos-delay={`${idx * 150}`}
              onMouseEnter={() => setActive(data.id)}
              onMouseLeave={() => setActive(null)}
              className="w-full max-w-[300px] cursor-pointer"
            >
              {/* Neon spinning border wrapper */}
              <div className={`neon-border-wrap transition-all duration-300 ${active === data.id ? "scale-105" : ""}`}>
                <div className="card-inner">

                  {/* Top color strip */}
                  <div className={`h-1 w-full ${
                    data.rank === 1 ? "bg-gradient-to-r from-yellow-400 to-orange-400" :
                    data.rank === 2 ? "bg-gradient-to-r from-orange-400 to-red-400" :
                    "bg-gradient-to-r from-pink-400 to-purple-400"
                  }`} />

                  {/* Rank + Wishlist row */}
                  <div className="flex items-center justify-between px-4 pt-3">
                    <span className={`badge-pulse text-[10px] font-extrabold px-3 py-1 rounded-full ${data.tagBg}`}>
                      {data.rankLabel}
                    </span>
                    <button onClick={() => toggleWishlist(data.id)}
                      className="bg-gray-100 dark:bg-gray-700 rounded-full p-2 hover:scale-110 transition-transform">
                      <FaHeart className={`text-xs ${wishlist.includes(data.id) ? "text-red-500" : "text-gray-400"}`} />
                    </button>
                  </div>

                  {/* Floating image */}
                  <div className="flex justify-center mt-2 mb-0 h-[140px] items-end">
                    <img
                      src={data.img}
                      alt={data.title}
                      className={`w-[150px] h-[150px] object-cover object-top rounded-2xl drop-shadow-2xl ${active === data.id ? "img-float" : "-translate-y-4 scale-100 transition-transform duration-500"}`}
                    />
                  </div>

                  {/* Discount tag */}
                  <div className="flex justify-center mt-2">
                    <span className="bg-red-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                      -{discount(data.originalPrice, data.price)}% OFF
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-5 text-center">
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${data.rankColor}`}>
                      {data.category}
                    </p>
                    <h2 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">
                      {data.title}
                    </h2>

                    {/* Stars */}
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <StarRating rating={data.rating} />
                      <span className="text-xs text-gray-500 dark:text-gray-400">{data.rating}.0 ({data.reviews.toLocaleString()})</span>
                    </div>

                    {/* Sold */}
                    <div className="flex justify-center mb-3">
                      <span className="text-[10px] font-bold bg-orange-50 dark:bg-orange-900/20 text-orange-500 px-3 py-0.5 rounded-full">
                        🔥 {data.sold} sold
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-2xl font-extrabold text-primary">{data.price}</span>
                      <span className="text-xs text-gray-400 line-through">{data.originalPrice}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-5 line-clamp-2 mb-3">
                      {data.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                      {data.tags.map((tag) => (
                        <span key={tag}
                          className="text-[9px] font-semibold px-2 py-0.5 rounded-full border border-primary/20 text-primary bg-primary/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => handleOrder(data.id)}
                        className={`font-bold py-2 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105 ${
                          ordered === data.id
                            ? "bg-green-500 text-white"
                            : "bg-primary text-white hover:shadow-lg hover:shadow-primary/40"
                        }`}
                      >
                        {ordered === data.id ? "✓ Ordered!" : "Order Now"}
                      </button>
                      <button
                        onClick={() => toggleWishlist(data.id)}
                        className="font-bold py-2 px-4 rounded-full text-sm border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        {wishlist.includes(data.id) ? "♥ Saved" : "♡ Save"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neon glow underneath */}
              <div className={`h-1 mx-8 rounded-full blur-sm mt-0.5 transition-opacity duration-300 ${
                active === data.id ? "opacity-100" : "opacity-0"
              } ${
                data.rank === 1 ? "bg-yellow-400" :
                data.rank === 2 ? "bg-orange-500" : "bg-pink-500"
              }`} />
            </div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div data-aos="fade-up" className="mt-16 relative rounded-3xl overflow-hidden border border-orange-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
          {/* Neon accent lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "linear-gradient(#f97316 1px,transparent 1px),linear-gradient(90deg,#f97316 1px,transparent 1px)", backgroundSize: "30px 30px" }} />

          <div className="relative z-10 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <FaTrophy className="text-yellow-400" />
                <span className="text-xs font-bold border border-orange-500/40 text-orange-400 px-3 py-0.5 rounded-full uppercase tracking-widest">
                  Limited Time Offer
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Get <span className="text-primary">₹300 Off</span> on Best Products!
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                Use code{" "}
                <span className="neon-orange bg-transparent font-extrabold text-orange-400 px-3 py-0.5 rounded-lg tracking-widest text-xs border border-orange-500">
                  BEST300
                </span>
                {" "}at checkout — valid this week only!
              </p>
              <p className="text-xs text-gray-600">⏰ Hurry! Offer expires in 48 hours</p>
            </div>
            <div className="flex gap-3 flex-shrink-0 items-end">
              {ProductsData.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.title}
                  className={`object-cover object-top rounded-2xl border-2 shadow-xl transition-transform ${
                    item.rank === 1
                      ? "w-24 h-28 border-yellow-400 -translate-y-3 shadow-yellow-500/30"
                      : item.rank === 2
                      ? "w-20 h-24 border-orange-400 -rotate-3 shadow-orange-500/20"
                      : "w-20 h-24 border-pink-400 rotate-3 shadow-pink-500/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopProducts;