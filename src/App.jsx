import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

// ── New Section Pages ──
import TopRated from "./components/TopRated/TopRated";
import KidsWear from "./components/KidsWear/KidsWear";
import MensWear from "./components/MensWear/MensWear";
import Electronics from "./components/Electronics/Electronics";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
import Cart from "./components/Cart/Cart"; // <-- ADDED: Import Cart

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  // <-- ADDED "cart" to the list of pages
  const [activePage, setActivePage] = useState("home"); // "home" | "toprated" | "kids" | "mens" | "electronics" | "trending" | "cart"

  React.useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();
  }, []);

  const handleOrderPopup = () => setOrderPopup(!orderPopup);

  const renderPage = () => {
    switch (activePage) {
      case "toprated":
        return <TopRated handleOrderPopup={handleOrderPopup} />;
      case "kids":
        return <KidsWear handleOrderPopup={handleOrderPopup} />;
      case "mens":
        return <MensWear handleOrderPopup={handleOrderPopup} />;
      case "electronics":
        return <Electronics handleOrderPopup={handleOrderPopup} />;
      case "trending":
        return <TrendingProducts handleOrderPopup={handleOrderPopup} />;
      
      // <-- ADDED: Cart Page Case
      case "cart":
        return <Cart />; 
      
      default:
        return (
          <>
            <Hero handleOrderPopup={handleOrderPopup} />
            <Products />
            <TopProducts handleOrderPopup={handleOrderPopup} />
            <Banner />
            <Subscribe />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} setActivePage={setActivePage} activePage={activePage} />
      {renderPage()}
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;