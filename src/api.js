const API_BASE = "http://127.0.0.1:8000"; // change if needed

// ✅ SUBSCRIBE FUNCTION (FIXED)
export const subscribeUser = async (email) => {
  try {
    const res = await fetch(`${API_BASE}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Subscribe Error:", error);
    return {
      success: false,
      message: "Subscription failed. Try again!",
    };
  }
};


// ✅ PLACE ORDER FUNCTION (YOUR CODE - IMPROVED)
export const placeOrder = async (userDetails, cartItems) => {
  try {
    const payload = {
      name: userDetails.name,
      email: userDetails.email,
      phone: userDetails.phone,
      address: userDetails.address,
      items: cartItems.map(item => ({
        product_id: Number(item.id),
        title: String(item.title || item.name || ""),
        category: String(item.category || ""),
        price: Number(item.price),
        quantity: Number(item.qty) || 1,
        img: String(item.img || item.image || "")
      }))
    };

    console.log("SENDING DATA:", payload);

    const res = await fetch(`${API_BASE}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Order Error:", error);
    return {
      success: false,
      message: "Order failed. Please try again!",
    };
  }
};