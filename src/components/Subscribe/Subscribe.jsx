import React, { useState } from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import { subscribeUser } from "../../api"; // <-- ADDED: Import backend function

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) return;

    setIsLoading(true); // Show loading state on button

    // ADDED: Call the backend API
    const result = await subscribeUser(email);
    
    // Show the message coming from Python/FastAPI
    setMessage(result.message);
    setIsLoading(false);
    
    // Clear input after success
    if (result.success) {
      setEmail("");
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-12">
        <div className="space-y-5 max-w-xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            🎉 Get Notified About New Products & Offers!
          </h1>
          <p className="text-sm text-white/80">
            Subscribe to our newsletter and be the first to know about flash
            sales, exclusive deals, and new arrivals. No spam — only the good
            stuff!
          </p>

          {/* CHANGED: Show backend message instead of hardcoded text */}
          {message ? (
            <div className="bg-white text-green-600 font-bold py-4 px-6 rounded-xl text-lg">
              {message}
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                data-aos="fade-up"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-3 rounded-lg text-gray-800 outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSubscribe}
                disabled={isLoading} // ADDED: Disable button while loading
                className="bg-primary hover:scale-105 duration-200 text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50"
              >
                {isLoading ? "Subscribing..." : "Subscribe Now"}
              </button>
            </div>
          )}

          <p className="text-xs text-white/60">
            🔒 We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;