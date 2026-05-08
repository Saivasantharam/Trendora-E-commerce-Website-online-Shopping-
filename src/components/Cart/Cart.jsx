import React, { useState, useEffect } from "react";
import { FaTrash, FaMinus, FaPlus, FaShoppingBag, FaTag } from "react-icons/fa";
import { placeOrder } from "../../api";

const Cart = ({ setActivePage }) => {
  // Force initial state to load from localStorage properly
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("trendora_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      return [];
    }
  });

  const [userDetails, setUserDetails] = useState({
    name: "", email: "", phone: "", address: ""
  });
  
  const [orderMessage, setOrderMessage] = useState("");
  const [orderError, setOrderError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [subMessage, setSubMessage] = useState("");

  // Keep localStorage in sync ONLY if cart has items
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("trendora_cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("trendora_cart");
    }
  }, [cartItems]);

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQty = (id, type) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = type === "increase" ? item.qty + 1 : item.qty - 1;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // THE FIX: Proper Checkout Handler
  const handleCheckout = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone || !userDetails.address) {
      setOrderError("Please fill in all shopping details.");
      return;
    }
    if (cartItems.length === 0) {
      setOrderError("Your cart is empty!");
      return;
    }

    setIsLoading(true);
    setOrderError("");
    setOrderMessage("");

    try {
      const result = await placeOrder(userDetails, cartItems);
      
      if (result.success) {
        // 1. Show success message immediately
        setOrderMessage(result.message);
        
        // 2. Clear React State
        setCartItems([]); 
        
        // 3. Force clear LocalStorage immediately
        localStorage.removeItem("trendora_cart");
        
        // 4. Clear form
        setUserDetails({ name: "", email: "", phone: "", address: "" }); 
      } else {
        setOrderError(result.message || "Something went wrong.");
      }
    } catch (err) {
      setOrderError("Network error. Check if backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setSubMessage("Subscribing...");
    try {
      const res = await fetch("http://127.0.0.1:8000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscribedEmail })
      });
      const data = await res.json();
      setSubMessage(data.message);
      if(data.success) setSubscribedEmail("");
    } catch {
      setSubMessage("Failed to subscribe.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 py-10 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-3">
            <FaShoppingBag className="text-primary" /> Your Cart
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Review your items and checkout securely</p>
        </div>

        {/* EMPTY CART STATE (Shows when array is empty AND no success message) */}
        {cartItems.length === 0 && !orderMessage ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-16 text-center border border-gray-100 dark:border-gray-700">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto mb-6">
              Looks like you haven't added anything yet.
            </p>
            <button 
              onClick={() => setActivePage("mens")} 
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition shadow-md"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT: Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Cart Items ({cartItems.length})
              </h2>
              
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    src={item.img || item.image}
                    alt={item.name || item.title}
                    className="w-full sm:w-24 h-40 sm:h-24 object-cover rounded-xl border border-gray-100 dark:border-gray-700"
                  />
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{item.name || item.title}</h3>
                        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><FaTag className="text-primary" /> {item.category}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition p-1">
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                        <button onClick={() => updateQty(item.id, "decrease")} className="px-3 py-1.5 text-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="px-4 py-1.5 font-bold text-sm text-slate-900 dark:text-white">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, "increase")} className="px-3 py-1.5 text-slate-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                      <p className="font-extrabold text-slate-900 dark:text-white text-lg">
                        ₹{item.price * item.qty}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Checkout & Shipping */}
            <div className="lg:col-span-1 space-y-6">
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Shipping Details</h2>
                <div className="space-y-3">
                  <input name="name" type="text" placeholder="Full Name *" value={userDetails.name} onChange={handleInputChange}
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white" />
                  <input name="email" type="email" placeholder="Email Address *" value={userDetails.email} onChange={handleInputChange}
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white" />
                  <input name="phone" type="tel" placeholder="Phone Number *" value={userDetails.phone} onChange={handleInputChange}
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white" />
                  <textarea name="address" placeholder="Full Address *" value={userDetails.address} onChange={handleInputChange} rows="3"
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-primary resize-none text-slate-900 dark:text-white"></textarea>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-700 pb-4 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium text-slate-900 dark:text-white">₹{total}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Discount</span>
                    <span>- ₹{Math.round(total * 0.1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-extrabold text-slate-900 dark:text-white mb-6">
                  <span>Total</span>
                  <span className="text-primary">₹{total - Math.round(total * 0.1)}</span>
                </div>

                {/* SUCCESS MESSAGE (Shows right here above the button) */}
                {orderMessage && (
                  <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold p-4 rounded-xl mb-4 border border-green-100 dark:border-green-800 text-center">
                    ✅ {orderMessage}
                  </div>
                )}

                {orderError && (
                  <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium p-3 rounded-xl mb-4 border border-red-100 dark:border-red-800">
                    {orderError}
                  </div>
                )}

                <button
                  onClick={handleCheckout}
                  disabled={isLoading || cartItems.length === 0}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                >
                  {isLoading ? (
                    <><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...</>
                  ) : "Place Order Securely"}
                </button>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-amber-200 dark:border-gray-600 text-center">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">🎉 Get 10% Off Instantly</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Subscribe for exclusive deals!</p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input type="email" required placeholder="Enter your email" value={subscribedEmail} onChange={(e) => setSubscribedEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 text-sm outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white" />
                  <button type="submit" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 dark:hover:bg-gray-100 transition shadow-md">
                    Subscribe
                  </button>
                </form>
                {subMessage && (
                  <p className={`text-xs mt-3 font-medium ${subMessage.includes("Failed") || subMessage.includes("already") ? "text-red-500" : "text-green-600"}`}>
                    {subMessage}
                  </p>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;