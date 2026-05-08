import React, { useState, useEffect, useRef } from "react";
import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaEye,
  FaFire,
  FaCrown,
  FaGem,
  FaMusic,
  FaTrophy,
  FaMedal,
  FaBolt,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

const TopRatedData = [
  { id: 1, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", title: "Classic White Sneakers", category: "Footwear", price: "₹1,299", originalPrice: "₹2,499", rating: 4.9, reviews: 842, badge: "Best Seller", badgeIcon: FaTrophy, badgeColor: "bg-amber-500", desc: "Iconic white sneakers with premium cushioned sole for everyday comfort.", colors: ["#ffffff", "#000000", "#dc2626", "#2563eb"], sizes: ["7", "8", "9", "10", "11"] },
  { id: 2, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", title: "Smart Watch Pro X", category: "Electronics", price: "₹4,999", originalPrice: "₹8,999", rating: 4.8, reviews: 1203, badge: "Top Rated", badgeIcon: FaStar, badgeColor: "bg-yellow-500", desc: "Track fitness, calls, notifications. 7-day battery with AMOLED display.", colors: ["#1a1a1a", "#c0c0c0", "#ffd700"], sizes: ["40mm", "44mm"] },
  { id: 3, img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop", title: "Men's Linen Shirt", category: "Men's Wear", price: "₹799", originalPrice: "₹1,499", rating: 4.8, reviews: 567, badge: "Trending", badgeIcon: FaFire, badgeColor: "bg-red-500", desc: "100% linen shirt perfect for summers. Slim-fit in 8 colours.", colors: ["#ffffff", "#87ceeb", "#ffdab9", "#90ee90"], sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: 4, img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop", title: "Women Ethnic Dress", category: "Women's Wear", price: "₹1,099", originalPrice: "₹1,999", rating: 4.9, reviews: 934, badge: "Most Loved", badgeIcon: FaHeart, badgeColor: "bg-pink-500", desc: "Hand-embroidered ethnic dress for festivals and special occasions.", colors: ["#ff6b6b", "#4ecdc4", "#ffd93d", "#6c5ce7"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 5, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", title: "Polarized Sunglasses", category: "Accessories", price: "₹599", originalPrice: "₹1,199", rating: 4.7, reviews: 423, badge: "Premium Pick", badgeIcon: FaGem, badgeColor: "bg-violet-500", desc: "UV400 polarized lenses with lightweight frame and protective case.", colors: ["#1a1a1a", "#8B4513", "#c0c0c0"], sizes: [] },
  { id: 6, img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", title: "Bluetooth Speaker 360", category: "Electronics", price: "₹1,899", originalPrice: "₹3,499", rating: 4.8, reviews: 711, badge: "Editor's Choice", badgeIcon: FaMusic, badgeColor: "bg-cyan-500", desc: "360° surround sound, 24-hour playtime, waterproof design.", colors: ["#1a1a1a", "#ef4444", "#3b82f6"], sizes: [] },
  { id: 7, img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop", title: "Luxury Perfume Set", category: "Beauty", price: "₹1,499", originalPrice: "₹2,799", rating: 4.7, reviews: 389, badge: "Premium", badgeIcon: FaCrown, badgeColor: "bg-amber-400", desc: "Set of 3 long-lasting fragrances — floral, woody, and fresh.", colors: [], sizes: ["30ml", "50ml", "100ml"] },
  { id: 8, img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop", title: "Running Shoes Pro", category: "Footwear", price: "₹2,199", originalPrice: "₹3,999", rating: 4.9, reviews: 1089, badge: "Award Winning", badgeIcon: FaMedal, badgeColor: "bg-emerald-500", desc: "Air-cushion technology, lightweight and breathable performance shoe.", colors: ["#ef4444", "#1a1a1a", "#ffffff", "#3b82f6"], sizes: ["7", "8", "9", "10", "11", "12"] },
  { id: 9, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", title: "Leather Jacket Classic", category: "Men's Wear", price: "₹3,499", originalPrice: "₹5,999", rating: 4.8, reviews: 645, badge: "Trending", badgeIcon: FaFire, badgeColor: "bg-red-500", desc: "Genuine leather jacket with quilted lining. Timeless biker style.", colors: ["#1a1a1a", "#8B4513", "#722f37"], sizes: ["S", "M", "L", "XL"] },
  { id: 10, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", title: "Urban Backpack", category: "Accessories", price: "₹999", originalPrice: "₹1,799", rating: 4.7, reviews: 512, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Water-resistant 30L backpack with laptop compartment and USB port.", colors: ["#1a1a1a", "#374151", "#1e3a5f", "#4a1942"], sizes: [] },
  { id: 11, img: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop", title: "Wireless Earbuds Pro", category: "Electronics", price: "₹1,499", originalPrice: "₹2,999", rating: 4.8, reviews: 1876, badge: "Best Seller", badgeIcon: FaTrophy, badgeColor: "bg-amber-500", desc: "Active noise cancellation, 32-hour battery, IPX5 water resistant.", colors: ["#ffffff", "#1a1a1a", "#3b82f6"], sizes: [] },
  { id: 12, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", title: "Premium Cotton T-Shirt", category: "Men's Wear", price: "₹499", originalPrice: "₹999", rating: 4.6, reviews: 2341, badge: "Value Pick", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "240 GSM 100% cotton. Pre-shrunk, bio-washed for extra softness.", colors: ["#ffffff", "#1a1a1a", "#1e40af", "#dc2626", "#16a34a"], sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: 13, img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop", title: "Slim Fit Denim Jeans", category: "Men's Wear", price: "₹1,199", originalPrice: "₹2,199", rating: 4.7, reviews: 923, badge: "Trending", badgeIcon: FaFire, badgeColor: "bg-red-500", desc: "Stretchable denim with classic 5-pocket design. Comfortable all day.", colors: ["#1e3a5f", "#1a1a1a", "#6b7280"], sizes: ["30", "32", "34", "36", "38"] },
  { id: 14, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop", title: "Designer Handbag", category: "Women's Wear", price: "₹2,799", originalPrice: "₹4,999", rating: 4.9, reviews: 456, badge: "Most Loved", badgeIcon: FaHeart, badgeColor: "bg-pink-500", desc: "Premium faux leather tote with gold hardware. Spacious interior.", colors: ["#722f37", "#1a1a1a", "#d4a574", "#f5f5dc"], sizes: [] },
  { id: 15, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop", title: "Sport Digital Watch", category: "Electronics", price: "₹899", originalPrice: "₹1,499", rating: 4.5, reviews: 678, badge: "Value Pick", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Digital display with stopwatch, alarm, backlight. Water resistant 50m.", colors: ["#1a1a1a", "#191970", "#006400"], sizes: [] },
  { id: 16, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", title: "Oversized Hoodie", category: "Men's Wear", price: "₹1,099", originalPrice: "₹1,999", rating: 4.8, reviews: 1345, badge: "Trending", badgeIcon: FaFire, badgeColor: "bg-red-500", desc: "Fleece-lined oversized hoodie. Kangaroo pocket with adjustable drawstring.", colors: ["#1a1a1a", "#374151", "#1e3a5f", "#7c3aed"], sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: 17, img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=400&fit=crop", title: "Formal Oxford Shoes", category: "Footwear", price: "₹2,499", originalPrice: "₹4,499", rating: 4.8, reviews: 367, badge: "Premium", badgeIcon: FaCrown, badgeColor: "bg-amber-400", desc: "Handcrafted leather oxfords with Goodyear welt. Perfect for formal events.", colors: ["#1a1a1a", "#8B4513", "#722f37"], sizes: ["7", "8", "9", "10", "11"] },
  { id: 18, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop", title: "Floral Crop Top", category: "Women's Wear", price: "₹599", originalPrice: "₹999", rating: 4.6, reviews: 789, badge: "Trending", badgeIcon: FaFire, badgeColor: "bg-red-500", desc: "Lightweight floral crop top with puff sleeves. Perfect for summer.", colors: ["#fecdd3", "#e0f2fe", "#dcfce7", "#f3e8ff"], sizes: ["XS", "S", "M", "L"] },
  { id: 19, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", title: "Studio Headphones", category: "Electronics", price: "₹2,999", originalPrice: "₹5,499", rating: 4.9, reviews: 567, badge: "Top Rated", badgeIcon: FaStar, badgeColor: "bg-yellow-500", desc: "Hi-res audio with 40mm drivers. Foldable, padded, with mic.", colors: ["#1a1a1a", "#ffffff", "#c0c0c0"], sizes: [] },
  { id: 20, img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop", title: "Retro Sneakers V2", category: "Footwear", price: "₹1,799", originalPrice: "₹3,199", rating: 4.7, reviews: 634, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Retro-inspired chunky sneakers with memory foam insole.", colors: ["#ffffff", "#fbbf24", "#ef4444", "#22c55e"], sizes: ["6", "7", "8", "9", "10"] },
  { id: 21, img: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400&h=400&fit=crop", title: "Midi Flowy Skirt", category: "Women's Wear", price: "₹899", originalPrice: "₹1,599", rating: 4.7, reviews: 421, badge: "Most Loved", badgeIcon: FaHeart, badgeColor: "bg-pink-500", desc: "Lightweight flowy midi skirt with elastic waistband.", colors: ["#1a1a1a", "#f5f5dc", "#4ecdc4", "#ff6b6b"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 22, img: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&h=400&fit=crop", title: "Snapback Baseball Cap", category: "Accessories", price: "₹399", originalPrice: "₹799", rating: 4.5, reviews: 856, badge: "Value Pick", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Adjustable snapback with embroidered logo. One size fits all.", colors: ["#1a1a1a", "#ffffff", "#1e40af", "#dc2626"], sizes: [] },
  { id: 23, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop", title: "Slim Leather Wallet", category: "Accessories", price: "₹699", originalPrice: "₹1,299", rating: 4.7, reviews: 543, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Genuine leather bifold wallet with RFID blocking. 8 card slots.", colors: ["#1a1a1a", "#8B4513", "#722f37"], sizes: [] },
  { id: 24, img: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop", title: "Canvas Belt Pack", category: "Accessories", price: "₹449", originalPrice: "₹899", rating: 4.6, reviews: 321, badge: "New Arrival", badgeIcon: FaBolt, badgeColor: "bg-teal-500", desc: "Woven canvas belt with matte buckle. Adjustable and durable.", colors: ["#1a1a1a", "#8B4513", "#374151", "#1e3a5f"], sizes: ["28", "30", "32", "34", "36"] },
  { id: 25, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop", title: "Air Max Sports", category: "Footwear", price: "₹3,599", originalPrice: "₹5,999", rating: 4.8, reviews: 1200, badge: "Premium", badgeIcon: FaCrown, badgeColor: "bg-amber-400", desc: "Maximum air cushioning for high impact workouts and daily runs.", colors: ["#3b82f6", "#ffffff", "#ef4444"], sizes: ["7", "8", "9", "10"] },
  { id: 26, img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop", title: "Fitness Band Lite", category: "Electronics", price: "₹1,299", originalPrice: "₹2,499", rating: 4.5, reviews: 2100, badge: "Value Pick", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Slim fitness tracker with heart rate, SpO2, and 14-day battery.", colors: ["#1a1a1a", "#1e40af", "#dc2626"], sizes: [] },
  { id: 27, img: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&h=400&fit=crop", title: "Oxford Cotton Shirt", category: "Men's Wear", price: "₹899", originalPrice: "₹1,699", rating: 4.7, reviews: 640, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Classic Oxford weave button-down. Perfect for smart-casual looks.", colors: ["#ffffff", "#93c5fd", "#fca5a5"], sizes: ["S", "M", "L", "XL"] },
  { id: 28, img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop", title: "Anarkali Kurta Set", category: "Women's Wear", price: "₹1,499", originalPrice: "₹2,799", rating: 4.8, reviews: 890, badge: "Trending", badgeIcon: FaFire, badgeColor: "bg-red-500", desc: "Elegant floor-length Anarkali with dupatta. Festive favorite.", colors: ["#6c5ce7", "#ff6b6b", "#fbbf24"], sizes: ["S", "M", "L", "XL"] },
  { id: 29, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop", title: "Aviator Sunglasses", category: "Accessories", price: "₹799", originalPrice: "₹1,499", rating: 4.6, reviews: 550, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Classic aviator frame with gradient UV400 lenses. Unisex design.", colors: ["#c0c0c0", "#ffd700", "#1a1a1a"], sizes: [] },
  { id: 30, img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=400&fit=crop", title: "Portable Party Speaker", category: "Electronics", price: "₹2,499", originalPrice: "₹4,999", rating: 4.7, reviews: 430, badge: "New Arrival", badgeIcon: FaBolt, badgeColor: "bg-teal-500", desc: "RGB lights, 12-hour battery, mic support. Ultimate party companion.", colors: ["#1a1a1a", "#ef4444", "#3b82f6"], sizes: [] },
  { id: 31, img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", title: "Rose Body Mist", category: "Beauty", price: "₹599", originalPrice: "₹999", rating: 4.4, reviews: 980, badge: "Value Pick", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Refreshing floral body mist for daily wear. Long-lasting freshness.", colors: [], sizes: ["150ml", "250ml"] },
  { id: 32, img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", title: "Trail Running Shoes", category: "Footwear", price: "₹3,199", originalPrice: "₹5,499", rating: 4.8, reviews: 720, badge: "Top Rated", badgeIcon: FaStar, badgeColor: "bg-yellow-500", desc: "Aggressive grip for mountain trails. Waterproof Gore-Tex lining.", colors: ["#16a34a", "#1a1a1a", "#f97316"], sizes: ["7", "8", "9", "10", "11"] },
  { id: 33, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop", title: "Suede Bomber Jacket", category: "Men's Wear", price: "₹2,999", originalPrice: "₹4,999", rating: 4.7, reviews: 340, badge: "Premium", badgeIcon: FaCrown, badgeColor: "bg-amber-400", desc: "Soft suede bomber with ribbed cuffs. Vintage appeal.", colors: ["#8B4513", "#1a1a1a", "#374151"], sizes: ["S", "M", "L", "XL"] },
  { id: 34, img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop", title: "Laptop Messenger Bag", category: "Accessories", price: "₹1,299", originalPrice: "₹2,199", rating: 4.6, reviews: 460, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Padded 15.6 inch laptop compartment. Water-resistant nylon build.", colors: ["#1a1a1a", "#374151", "#1e3a5f"], sizes: [] },
  { id: 35, img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop", title: "Neckband Earphones", category: "Electronics", price: "₹699", originalPrice: "₹1,499", rating: 4.5, reviews: 3200, badge: "Best Seller", badgeIcon: FaTrophy, badgeColor: "bg-amber-500", desc: "Magnetic earbuds, 20-hour battery, fast charging.", colors: ["#1a1a1a", "#ffffff", "#dc2626"], sizes: [] },
  { id: 36, img: "https://images.unsplash.com/photo-1625910513413-5fc421e0e2f0?w=400&h=400&fit=crop", title: "Polo T-Shirt", category: "Men's Wear", price: "₹699", originalPrice: "₹1,299", rating: 4.6, reviews: 1890, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Classic pique cotton polo. Ideal for golf, weekend, or casual office.", colors: ["#1e40af", "#1a1a1a", "#dc2626", "#16a34a"], sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: 37, img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop", title: "Cargo Jogger Pants", category: "Men's Wear", price: "₹1,099", originalPrice: "₹1,999", rating: 4.7, reviews: 560, badge: "Trending", badgeIcon: FaFire, badgeColor: "bg-red-500", desc: "Utility cargo joggers with multiple pockets. Tapered fit.", colors: ["#374151", "#1a1a1a", "#4a1942", "#1e3a5f"], sizes: ["S", "M", "L", "XL"] },
  { id: 38, img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop", title: "Mini Crossbody Bag", category: "Women's Wear", price: "₹999", originalPrice: "₹1,799", rating: 4.8, reviews: 670, badge: "Trending", badgeIcon: FaFire, badgeColor: "bg-red-500", desc: "Compact crossbody with chain strap. Perfect for essentials.", colors: ["#1a1a1a", "#ffffff", "#ff6b6b", "#fbbf24"], sizes: [] },
  { id: 39, img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&h=400&fit=crop", title: "Minimalist Analog Watch", category: "Electronics", price: "₹1,799", originalPrice: "₹3,199", rating: 4.9, reviews: 410, badge: "Top Rated", badgeIcon: FaStar, badgeColor: "bg-yellow-500", desc: "Swiss-inspired dial with genuine leather strap. Elegant design.", colors: ["#1a1a1a", "#8B4513", "#c0c0c0"], sizes: [] },
  { id: 40, img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop", title: "Zip-Up Hoodie", category: "Men's Wear", price: "₹1,299", originalPrice: "₹2,399", rating: 4.7, reviews: 980, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Heavyweight fleece zip-up. Ideal for layering in winter.", colors: ["#1a1a1a", "#374151", "#1e40af"], sizes: ["S", "M", "L", "XL", "XXL"] },
  { id: 41, img: "https://images.unsplash.com/photo-1613219890867-81a04dd1b093?w=400&h=400&fit=crop", title: "Loafers Casual", category: "Footwear", price: "₹1,599", originalPrice: "₹2,999", rating: 4.6, reviews: 520, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Flexible sole loafers. Slip-on convenience for daily wear.", colors: ["#8B4513", "#1a1a1a", "#d4a574"], sizes: ["7", "8", "9", "10"] },
  { id: 42, img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=400&fit=crop", title: "Ruffled Blouse", category: "Women's Wear", price: "₹749", originalPrice: "₹1,399", rating: 4.5, reviews: 340, badge: "New Arrival", badgeIcon: FaBolt, badgeColor: "bg-teal-500", desc: "Elegant ruffle detailing on neckline. Lightweight chiffon fabric.", colors: ["#ffffff", "#fecdd3", "#e0f2fe"], sizes: ["S", "M", "L", "XL"] },
  { id: 43, img: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop", title: "Gaming Headset RGB", category: "Electronics", price: "₹2,199", originalPrice: "₹3,999", rating: 4.7, reviews: 890, badge: "Trending", badgeIcon: FaFire, badgeColor: "bg-red-500", desc: "7.1 surround sound, noise-canceling mic, RGB lighting.", colors: ["#1a1a1a", "#ef4444", "#3b82f6"], sizes: [] },
  { id: 44, img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop", title: "Skateboard Shoes", category: "Footwear", price: "₹1,499", originalPrice: "₹2,799", rating: 4.6, reviews: 450, badge: "Popular", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Flat sole with vulcanized grip. Durable canvas upper.", colors: ["#ffffff", "#1a1a1a", "#dc2626", "#16a34a"], sizes: ["6", "7", "8", "9", "10"] },
  { id: 45, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop", title: "Palazzo Pants", category: "Women's Wear", price: "₹799", originalPrice: "₹1,499", rating: 4.6, reviews: 560, badge: "Value Pick", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Wide-leg palazzos with floral print. Breathable rayon.", colors: ["#f5f5dc", "#4ecdc4", "#6c5ce7"], sizes: ["S", "M", "L", "XL"] },
  { id: 46, img: "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=400&h=400&fit=crop", title: "Woollen Beanie", category: "Accessories", price: "₹299", originalPrice: "₹599", rating: 4.4, reviews: 1100, badge: "Value Pick", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Soft merino wool beanie. Keeps you warm in extreme cold.", colors: ["#1a1a1a", "#374151", "#dc2626", "#f5f5dc"], sizes: [] },
  { id: 47, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", title: "Travel Organizer Pouch", category: "Accessories", price: "₹499", originalPrice: "₹999", rating: 4.5, reviews: 230, badge: "New Arrival", badgeIcon: FaBolt, badgeColor: "bg-teal-500", desc: "Water-resistant nylon pouch for cables, chargers, and cards.", colors: ["#1a1a1a", "#374151", "#1e40af"], sizes: [] },
  { id: 48, img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop", title: "Round Specs", category: "Accessories", price: "₹449", originalPrice: "₹899", rating: 4.3, reviews: 670, badge: "Value Pick", badgeIcon: FaBolt, badgeColor: "bg-orange-500", desc: "Retro round frame anti-blue light glasses. Lightweight TR90.", colors: ["#1a1a1a", "#c0c0c0", "#ffd700"], sizes: [] },
  { id: 49, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", title: "Face Serum Vitamin C", category: "Beauty", price: "₹699", originalPrice: "₹1,299", rating: 4.8, reviews: 1450, badge: "Top Rated", badgeIcon: FaStar, badgeColor: "bg-yellow-500", desc: "Brightening Vitamin C serum with hyaluronic acid. Dermat tested.", colors: [], sizes: ["20ml", "30ml"] },
  { id: 50, img: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=400&fit=crop", title: "Soundbar 5.1", category: "Electronics", price: "₹3,999", originalPrice: "₹7,999", rating: 4.9, reviews: 380, badge: "Premium", badgeIcon: FaCrown, badgeColor: "bg-amber-400", desc: "5.1 channel Dolby Audio soundbar with wireless subwoofer.", colors: ["#1a1a1a", "#374151"], sizes: [] }
];

const categories = ["All", ...new Set(TopRatedData.map((d) => d.category))];
const getDiscount = (o, c) => Math.round(((parseInt(o.replace(/[₹,]/g, "")) - parseInt(c.replace(/[₹,]/g, ""))) / parseInt(o.replace(/[₹,]/g, ""))) * 100);

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let s = 0;
        const inc = end / (duration / 16);
        const t = setInterval(() => { s += inc; if (s >= end) { setCount(end); clearInterval(t); } else setCount(Math.floor(s)); }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setV(true), delay); obs.disconnect(); } }, { threshold: 0.02 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`transition-all duration-500 ease-out ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>{children}</div>;
};

const StarRating = ({ rating, size = "text-xs" }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <FaStar key={s} className={`${size} ${s <= Math.floor(rating) ? "text-amber-400 dark:text-orange-500" : "text-gray-200 dark:text-gray-700"}`} />
    ))}
  </div>
);

const ColorTintImg = ({ img, color, alt, cls }) => (
  <div className={`relative overflow-hidden bg-gray-50 dark:bg-gray-900 ${cls}`}>
    <img src={img} alt={alt} className="w-full h-full object-cover transition-all duration-500" loading="lazy" />
    {color && color.toLowerCase() !== "#ffffff" && (
      <div className="absolute inset-0 mix-blend-multiply opacity-50 transition-colors duration-500 pointer-events-none" style={{ backgroundColor: color }} />
    )}
  </div>
);

const ProductModal = ({ product, onClose }) => {
  const [selColor, setSelColor] = useState(product?.colors?.[0] || null);
  const [selSize, setSelSize] = useState(product?.sizes?.[0] || null);
  useEffect(() => { if (product) { setSelColor(product.colors?.[0] || null); setSelSize(product.sizes?.[0] || null); } }, [product]);
  if (!product) return null;
  const disc = getDiscount(product.originalPrice, product.price);
  const BIcon = product.badgeIcon;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div onClick={(e) => e.stopPropagation()} className="relative bg-white dark:bg-gray-950 dark:border-gray-800 border border-gray-200 rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden" style={{ maxHeight: "90vh", height: "90vh" }}>
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <FaTimes className="text-xs text-gray-500 dark:text-gray-400" />
        </button>
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative md:w-1/2 h-64 md:h-auto flex-shrink-0">
            <ColorTintImg img={product.img} color={selColor} alt={product.title} cls="w-full h-full" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className={`${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1`}><BIcon className="text-[8px]" />{product.badge}</span>
              <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">-{disc}%</span>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between p-6 md:p-8 overflow-hidden">
            <div className="space-y-4">
              <div>
                <p className="text-[11px] uppercase tracking-widest mb-1 text-center font-semibold text-gray-400 dark:text-orange-500">{product.category}</p>
                <h2 className="text-xl md:text-2xl font-bold leading-tight text-center text-gray-900 dark:text-white">{product.title}</h2>
              </div>
              <div className="flex items-center justify-center gap-3">
                <StarRating rating={product.rating} size="text-sm" />
                <span className="text-sm font-semibold text-gray-800 dark:text-white">{product.rating}</span>
                <span className="text-xs text-gray-400 dark:text-gray-500">({product.reviews.toLocaleString()} reviews)</span>
              </div>
              <p className="text-sm leading-relaxed text-center line-clamp-2 text-gray-500 dark:text-gray-400">{product.desc}</p>
              {product.colors.length > 0 && (
                <div className="flex flex-col items-center">
                  <p className="text-[11px] uppercase tracking-wider mb-2 text-gray-400 dark:text-gray-500">Color</p>
                  <div className="flex gap-2">
                    {product.colors.map((c, i) => (
                      <button key={i} onClick={() => setSelColor(c)} className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${selColor === c ? "border-orange-500 ring-2 ring-orange-500 ring-offset-2 dark:ring-offset-gray-950" : "border-gray-200 dark:border-gray-700"}`} style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
              )}
              {product.sizes.length > 0 && (
                <div className="flex flex-col items-center">
                  <p className="text-[11px] uppercase tracking-wider mb-2 text-gray-400 dark:text-gray-500">{product.category === "Beauty" ? "Volume" : "Size"}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {product.sizes.map((s, i) => (
                      <button key={i} onClick={() => setSelSize(s)} className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${selSize === s ? "bg-orange-500 text-white border-orange-500" : "bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-600"}`}>{s}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                  <span className="text-sm line-through ml-2 text-gray-400 dark:text-gray-600">{product.originalPrice}</span>
                  <span className="ml-2 text-xs font-semibold text-emerald-500">Save {disc}%</span>
                </div>
                <div className="flex gap-2">
                  <button className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/30 transition-all">
                    <FaHeart className="text-sm text-gray-300 dark:text-gray-600 hover:text-red-400 transition-colors" />
                  </button>
                  <button onClick={() => handleCart(product)} className="flex items-center gap-2 bg-orange-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors active:scale-95 shadow-lg shadow-orange-500/20">
                    <FaShoppingCart className="text-xs" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TopRated = ({ handleOrderPopup }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selColors, setSelColors] = useState({});

  const getCol = (id, colors) => selColors[id] || colors?.[0] || null;
  const filtered = activeCategory === "All" ? TopRatedData : TopRatedData.filter((d) => d.category === activeCategory);

  const toggleWish = (id, e) => { e.stopPropagation(); setWishlist((p) => p.includes(id) ? p.filter((w) => w !== id) : [...p, id]); };
    const handleCart = (product, e) => {
    if (e) e.stopPropagation();
    
    // Save to localStorage for Cart page
    const existingCart = JSON.parse(localStorage.getItem("trendora_cart")) || [];
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
        title: product.title,
        category: product.category,
        price: parseInt(String(product.price).replace(/[₹,]/g, "")), 
        qty: 1,
        img: product.img,
        image: product.img 
      }];
    }
    localStorage.setItem("trendora_cart", JSON.stringify(updatedCart));

    // UI Animation state
    setCartItems((p) => p.includes(product.id) ? p.filter((c) => c !== product.id) : [...p, product.id]);
    if (!cartItems.includes(product.id)) setTimeout(() => setCartItems((p) => p.filter((c) => c !== product.id)), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#faf9f7] dark:bg-black transition-colors duration-300">
      {/* Dot pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] dark:opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`, backgroundSize: "24px 24px" }} />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[100px] pointer-events-none bg-orange-200/20 dark:bg-orange-900/10 transition-colors duration-300" />

      <div className="relative">
        {/* Hero */}
        <div className="pt-16 sm:pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-4 py-1.5 mb-6 shadow-sm transition-colors duration-300">
                <FaBolt className="text-[10px] text-orange-500" />
                <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wider uppercase font-medium">Curated for Excellence</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Top Rated{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">Products</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 rounded-full -z-0 bg-orange-200/50 dark:bg-orange-900/30 transition-colors duration-300" />
                </span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-sm sm:text-base text-gray-400 dark:text-gray-500 max-w-lg mx-auto leading-relaxed transition-colors duration-300">
                Loved by <span className="font-semibold text-gray-700 dark:text-white"><AnimatedCounter end={6158} />+ buyers</span> across India — only 4.7★ and above make the cut.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <div className="flex items-center justify-center gap-10 sm:gap-16 mt-10">
                {[{ v: 50, l: "Products" }, { v: 6158, l: "Reviews", s: "+" }, { v: 4, l: "Avg Stars", s: ".7★" }].map((st, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300"><AnimatedCounter end={st.v} />{st.s || ""}</div>
                    <div className="text-[11px] mt-1 uppercase tracking-wider text-gray-400 dark:text-gray-600 transition-colors duration-300">{st.l}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Category Filters - Centered with Orange Border */}
        <div className="px-6 mb-8 sticky top-0 z-30 py-3 backdrop-blur-md bg-[#faf9f7]/80 dark:bg-black/80 transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex justify-center">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap text-xs font-medium px-5 py-2 rounded-full border-2 transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                      : "bg-transparent text-gray-500 dark:text-gray-400 border-orange-300 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-950 hover:border-orange-400 dark:hover:border-orange-600 hover:text-gray-800 dark:hover:text-white"
                  }`}
                >
                  {cat}
                  {cat !== "All" && <span className="ml-1.5 text-[10px] opacity-50">({TopRatedData.filter((d) => d.category === cat).length})</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((item, idx) => {
                const disc = getDiscount(item.originalPrice, item.price);
                const BIcon = item.badgeIcon;
                const isH = hoveredCard === item.id;
                const isW = wishlist.includes(item.id);
                const isC = cartItems.includes(item.id);
                const curCol = getCol(item.id, item.colors);

                return (
                  <RevealOnScroll key={item.id} delay={idx * 15}>
                    <div
                      onClick={() => setSelectedProduct(item)}
                      className="bg-white dark:bg-gray-950 dark:border-gray-800 border border-gray-100 rounded-2xl cursor-pointer group transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 overflow-hidden"
                      onMouseEnter={() => setHoveredCard(item.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden">
                        <ColorTintImg img={item.img} color={curCol} alt={item.title} cls="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">-{disc}%</div>
                        <div className={`absolute top-2 right-2 ${item.badgeColor} text-white text-[8px] font-bold px-2 py-0.5 rounded-md flex items-center gap-0.5`}><BIcon className="text-[7px]" />{item.badge}</div>

                        {/* Hover Actions */}
                        <div className={`absolute bottom-2 left-2 right-2 flex items-center gap-1.5 transition-all duration-300 ${isH ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                          <button onClick={(e) => handleCart(item, e)} className={`flex-1 flex items-center justify-center gap-1 text-[10px] font-semibold py-2 rounded-lg transition-all duration-300 ${isC ? "bg-emerald-500 text-white" : "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"}`}>
                            {isC ? (<><FaCheck className="text-[8px]" /> Added</>) : (<><FaShoppingCart className="text-[8px]" /> Cart</>)}
                          </button>
                          <button onClick={(e) => toggleWish(item.id, e)} className="w-8 h-8 rounded-lg bg-white/90 dark:bg-black/70 border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:bg-white dark:hover:bg-black transition-all shadow-sm">
                            <FaHeart className={`text-[10px] transition-all duration-200 ${isW ? "text-red-500 scale-110" : "text-gray-300 dark:text-gray-600"}`} />
                          </button>
                          <button onClick={(e) => { e.stopPropagation(); setSelectedProduct(item); }} className="w-8 h-8 rounded-lg bg-white/90 dark:bg-black/70 border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:bg-white dark:hover:bg-black transition-all shadow-sm">
                            <FaEye className="text-[10px] text-gray-400 dark:text-gray-500" />
                          </button>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-3 space-y-2">
                        <p className="text-[9px] uppercase tracking-widest text-center font-semibold text-gray-400 dark:text-orange-500 transition-colors duration-300">{item.category}</p>
                        <h3 className="font-semibold text-xs leading-tight text-center text-gray-800 dark:text-gray-200 group-hover:text-orange-500 transition-colors line-clamp-1">{item.title}</h3>

                        <div className="flex items-center justify-center gap-1.5">
                          <StarRating rating={item.rating} size="text-[9px]" />
                          <span className="text-[10px] text-gray-400 dark:text-gray-500">{item.rating}</span>
                        </div>

                        {item.colors.length > 0 && (
                          <div className="flex gap-1 justify-center">
                            {item.colors.map((c, i) => (
                              <button key={i} onClick={(e) => { e.stopPropagation(); setSelColors((p) => ({ ...p, [item.id]: p[item.id] === c ? item.colors[0] : c })); }} className={`w-3.5 h-3.5 rounded-full border transition-all duration-200 hover:scale-125 ${curCol === c ? "border-orange-500 ring-1 ring-orange-500 ring-offset-1 dark:ring-offset-gray-950" : "border-gray-200 dark:border-gray-700"}`} style={{ backgroundColor: c }} />
                            ))}
                          </div>
                        )}

                        <div className="flex items-baseline justify-center gap-1.5 pt-0.5">
                          <span className="text-sm font-bold text-gray-900 dark:text-white transition-colors duration-300">{item.price}</span>
                          <span className="text-[10px] line-through text-gray-300 dark:text-gray-700 transition-colors duration-300">{item.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
            {filtered.length === 0 && <div className="text-center py-20"><p className="text-sm text-gray-400 dark:text-gray-600">No products found in this category.</p></div>}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-6 pb-20">
          <div className="max-w-2xl mx-auto">
            <RevealOnScroll>
              <div className="relative bg-white dark:bg-gray-950 dark:border-gray-800 border border-gray-200 rounded-2xl p-8 sm:p-10 text-center overflow-hidden shadow-sm dark:shadow-lg dark:shadow-black/50 transition-colors duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full pointer-events-none bg-orange-100/50 dark:bg-orange-900/20 transition-colors duration-300" />
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Can't decide? We'll help.</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mb-5 max-w-sm mx-auto transition-colors duration-300">Our experts will pick the perfect products based on your style and budget.</p>
                  <button onClick={handleOrderPopup} className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors active:scale-95 shadow-lg shadow-orange-500/20">
                    Get Personalized Picks
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default TopRated;