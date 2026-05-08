import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" });
  const [ordered, setOrdered] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (form.name && form.email && form.address && form.phone) {
      setOrdered(true);
      setTimeout(() => {
        setOrdered(false);
        setForm({ name: "", email: "", address: "", phone: "" });
        setOrderPopup(false);
      }, 2500);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-[340px] p-6 duration-200">

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              onClick={() => setOrderPopup(false)}
            >
              <IoCloseOutline className="text-2xl" />
            </button>

            {/* Success State */}
            {ordered ? (
              <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎉</span>
                </div>
                <h2 className="text-xl font-bold text-green-600">Order Placed!</h2>
                <p className="text-sm text-gray-500">
                  Thank you, <span className="font-semibold text-gray-700">{form.name}</span>!<br />
                  Your order is confirmed. We'll send updates to <span className="font-semibold">{form.email}</span>.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FaShoppingBag className="text-primary text-xl" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-gray-800 dark:text-white">
                      Order Now
                    </h1>
                    <p className="text-xs text-gray-400">
                      Fill in your details to place the order
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. priya@email.com"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Delivery Address</label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Enter your full delivery address"
                      rows={2}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  {/* Order Button */}
                  <button
                    onClick={handleOrder}
                    className="w-full mt-1 bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white font-semibold py-2 px-4 rounded-full"
                  >
                    Place Order 🛒
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    🔒 Your information is 100% secure
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;