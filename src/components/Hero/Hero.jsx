import React from "react";
import Slider from "react-slick";

// 🔥 Banner Data (Ad Style Content)
const ImageList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=900&h=900&fit=crop",
    badge: "🔥 Hot Deal",
    title: "Flat 50% OFF Men's Collection",
    description:
      "Upgrade your wardrobe with premium shirts, jeans & jackets. Designed for comfort and style.",
    price: "₹299",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&h=900&fit=crop",
    badge: "✨ New Arrival",
    title: "Trendy Women's Fashion Sale",
    description:
      "Discover elegant dresses, stylish tops & ethnic wear. Crafted for every occasion.",
    price: "₹399",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=900&h=900&fit=crop",
    badge: "⚡ Mega Sale",
    title: "Up to 70% OFF Everything",
    description:
      "Biggest sale of the year! Grab fashion, electronics & accessories before it’s gone.",
    price: "₹199",
  },
];

const Hero = ({ handleOrderPopup }) => {
  // 🎬 Slider Settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex items-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 duration-300">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-primary/30 blur-3xl rounded-full -top-1/2 right-0"></div>

      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">

                {/* 🧾 TEXT SECTION */}
                <div className="flex flex-col gap-6 text-center sm:text-left z-10">

                  {/* Badge */}
                  <span className="inline-block w-fit bg-primary text-white text-xs px-3 py-1 rounded-full shadow-lg animate-pulse">
                    {data.badge}
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                    {data.title}
                  </h1>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md leading-6">
                    {data.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 justify-center sm:justify-start">
                    <button
                      onClick={handleOrderPopup}
                      className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-md"
                    >
                      🛒 Shop Now
                    </button>

                    <button className="border border-gray-400 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                      Explore →
                    </button>
                  </div>
                </div>

                {/* 🖼️ IMAGE SECTION */}
                <div className="relative z-10">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] object-cover rounded-3xl mx-auto shadow-2xl hover:scale-105 transition duration-500"
                  />

                  {/* 💰 Floating Price */}
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-xl">
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-lg font-bold text-primary">
                      {data.price}
                    </p>
                  </div>

                  {/* ⏳ Urgency Tag */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow">
                    Limited Time
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;