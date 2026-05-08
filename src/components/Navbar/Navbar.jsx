import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

// ── Trendora SVG Logo ──
const TrendoraLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="9" fill="#f97316" />
      <rect x="8" y="10" width="20" height="4" rx="2" fill="white" />
      <rect x="14" y="10" width="6" height="16" rx="2" fill="white" />
      <circle cx="26" cy="27" r="4" fill="white" opacity="0.95" />
      <path d="M24 27l1.3 1.5L28 25" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="font-bold text-2xl sm:text-3xl tracking-tight">
      Tren<span className="text-primary">dora</span>
    </span>
  </div>
);

const Navbar = ({ handleOrderPopup, setActivePage, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu if screen resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu and navigate to page
  const handleMobileClick = (page) => {
    setIsMenuOpen(false);
    setActivePage(page);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* ── Upper Navbar ── */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">

          {/* Logo */}
          <div>
            <button
              onClick={() => setActivePage("home")}
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <TrendoraLogo />
            </button>
          </div>

          {/* Right Side: Search + Cart + DarkMode + Hamburger */}
          <div className="flex justify-between items-center gap-3 sm:gap-4">
            
            {/* Search bar (Hidden on mobile to save space) */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order / Cart button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Switch */}
            <div className="hidden sm:block">
              <DarkMode />
            </div>

            {/* 📱 HAMBURGER BUTTON (Only shows on mobile/tablet) */}
            <button
              onClick={toggleMenu}
              className="flex sm:hidden flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-50"
              aria-label="Toggle Menu"
            >
              <span 
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              ></span>
            </button>

          </div>
        </div>
      </div>

      {/* ── Lower Navbar (DESKTOP LINKS - Hidden on mobile) ── */}
      <div data-aos="zoom-in" className="hidden sm:flex justify-center">
        <ul className="flex items-center gap-4">
          <li>
            <button onClick={() => setActivePage("home")} className={`inline-block px-4 py-2 duration-200 font-medium ${activePage === "home" ? "text-primary border-b-2 border-primary" : "hover:text-primary"}`}>Home</button>
          </li>
          <li>
            <button onClick={() => setActivePage("toprated")} className={`inline-block px-4 py-2 duration-200 font-medium ${activePage === "toprated" ? "text-primary border-b-2 border-primary" : "hover:text-primary"}`}>Top Rated</button>
          </li>
          <li>
            <button onClick={() => setActivePage("kids")} className={`inline-block px-4 py-2 duration-200 font-medium ${activePage === "kids" ? "text-primary border-b-2 border-primary" : "hover:text-primary"}`}>Kids Wear</button>
          </li>
          <li>
            <button onClick={() => setActivePage("mens")} className={`inline-block px-4 py-2 duration-200 font-medium ${activePage === "mens" ? "text-primary border-b-2 border-primary" : "hover:text-primary"}`}>Mens Wear</button>
          </li>
          <li>
            <button onClick={() => setActivePage("electronics")} className={`inline-block px-4 py-2 duration-200 font-medium ${activePage === "electronics" ? "text-primary border-b-2 border-primary" : "hover:text-primary"}`}>Electronics</button>
          </li>
          <li>
            <button onClick={() => setActivePage("cart")} className={`px-4 py-2 duration-200 font-medium flex items-center gap-2 ${activePage === "cart" ? "text-primary border-b-2 border-primary" : "hover:text-primary"}`}>
              <FaCartShopping className="text-lg" /> Cart
            </button>
          </li>
          {/* Trending Dropdown */}
          <li className="group relative cursor-pointer">
            <button onClick={() => setActivePage("trending")} className={`flex items-center gap-[2px] px-4 py-2 duration-200 font-medium ${activePage === "trending" ? "text-primary border-b-2 border-primary" : "hover:text-primary"}`}>
              Trending Products <span><FaCaretDown className="transition-all duration-200 group-hover:rotate-180" /></span>
            </button>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md top-full left-0">
              <ul>
                <li><button onClick={() => setActivePage("trending")} className="inline-block w-full rounded-md p-2 text-left hover:bg-primary/20 text-sm">🔥 Trending Products</button></li>
                <li><button onClick={() => setActivePage("trending")} className="inline-block w-full rounded-md p-2 text-left hover:bg-primary/20 text-sm">💰 Best Selling</button></li>
                <li><button onClick={() => setActivePage("toprated")} className="inline-block w-full rounded-md p-2 text-left hover:bg-primary/20 text-sm">⭐ Top Rated</button></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* ── MOBILE DROPDOWN MENU (Only shows on mobile/tablet) ── */}
      <div 
        className={`sm:hidden overflow-hidden transition-all duration-400 ease-in-out bg-white dark:bg-gray-900 border-t dark:border-gray-800 ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-3 space-y-1 px-4">
          {/* Mobile Search (Moved here so mobile users can still search) */}
          <div className="relative pb-3 mb-3 border-b dark:border-gray-700">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 pr-10 text-sm focus:outline-none focus:border-primary"
            />
            <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Mobile Dark Mode Toggle */}
          <div className="pb-3 mb-3 border-b dark:border-gray-700 flex sm:hidden items-center gap-3">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Theme:</span>
            <DarkMode />
          </div>

          {/* Navigation Links */}
          <button onClick={() => handleMobileClick("home")} className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "home" ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>🏠 Home</button>
          <button onClick={() => handleMobileClick("toprated")} className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "toprated" ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>⭐ Top Rated</button>
          <button onClick={() => handleMobileClick("kids")} className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "kids" ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>👦 Kids Wear</button>
          <button onClick={() => handleMobileClick("mens")} className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "mens" ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>👔 Mens Wear</button>
          <button onClick={() => handleMobileClick("electronics")} className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "electronics" ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>📱 Electronics</button>
          <button onClick={() => handleMobileClick("cart")} className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "cart" ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>🛒 Cart</button>
          <button onClick={() => handleMobileClick("trending")} className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "trending" ? "bg-primary/10 text-primary" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>🔥 Trending Products</button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;