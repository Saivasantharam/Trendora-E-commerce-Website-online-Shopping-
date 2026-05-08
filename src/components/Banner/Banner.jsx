import React from "react";
import { GrSecure } from "react-icons/gr";
import { FaTruck, FaTags, FaUndo } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      {/* Main Banner */}
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div data-aos="zoom-in" className="relative">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=500&fit=crop"
                alt="Winter Sale Fashion"
                className="max-w-[420px] h-[380px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.4)] object-cover rounded-2xl"
              />
              {/* Floating badge */}
              <div className="absolute top-4 left-4 bg-primary text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                Winter Sale 🎉
              </div>
              <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-xl px-4 py-2 shadow-lg">
                <p className="text-xs text-gray-500">Starting from</p>
                <p className="text-xl font-extrabold text-primary">₹299</p>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-6">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold dark:text-white">
                Winter Sale — Upto <span className="text-primary">50% Off!</span>
              </h1>
              <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-300 tracking-wide leading-6">
                Shop the biggest winter collection of the season. From cozy jackets to trendy boots — find everything you need to beat the cold in style, all at prices you'll love.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <GrSecure className="text-2xl" />, bg: "bg-violet-100 dark:bg-violet-400", title: "100% Quality Guaranteed", desc: "Certified & authentic products only" },
                  { icon: <FaTruck className="text-2xl" />, bg: "bg-orange-100 dark:bg-orange-400", title: "Fast Delivery in 2–3 Days", desc: "Free delivery on orders above ₹499" },
                  { icon: <FaUndo className="text-2xl" />, bg: "bg-green-100 dark:bg-green-400", title: "Easy 30-Day Returns", desc: "No questions asked return policy" },
                  { icon: <FaTags className="text-2xl" />, bg: "bg-yellow-100 dark:bg-yellow-400", title: "Exclusive Daily Offers", desc: "Use code TRENDORA200 for ₹200 off" },
                ].map((item) => (
                  <div data-aos="fade-up" key={item.title} className="flex items-center gap-4">
                    <div className={`h-12 w-12 shadow-sm p-3 rounded-full flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm dark:text-white">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Promo Banner */}
      <div className="container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Promo Card 1 */}
          <div data-aos="fade-right" className="relative rounded-3xl overflow-hidden h-52 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=300&fit=crop"
              alt="Women's Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-8">
              <div className="text-white">
                <p className="text-xs font-semibold text-primary bg-white/20 px-2 py-0.5 rounded-full w-fit mb-2">New Arrivals</p>
                <h3 className="text-2xl font-extrabold">Women's Collection</h3>
                <p className="text-sm opacity-80 mt-1">Upto 40% Off</p>
                <button className="mt-3 bg-primary text-white text-xs px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition-transform">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>

          {/* Promo Card 2 */}
          <div data-aos="fade-left" className="relative rounded-3xl overflow-hidden h-52 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=300&fit=crop"
              alt="Electronics Sale"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-8">
              <div className="text-white">
                <p className="text-xs font-semibold text-yellow-400 bg-white/20 px-2 py-0.5 rounded-full w-fit mb-2">Flash Sale ⚡</p>
                <h3 className="text-2xl font-extrabold">Electronics Sale</h3>
                <p className="text-sm opacity-80 mt-1">Upto 60% Off on Gadgets</p>
                <button className="mt-3 bg-yellow-400 text-gray-900 text-xs px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition-transform">
                  Grab Deal →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;