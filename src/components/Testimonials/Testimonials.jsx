import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const TestimonialData = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Chennai, Tamil Nadu",
    text: "Shopsy has completely changed how I shop online! Got my ethnic kurti in just 2 days and the quality is absolutely stunning. Will definitely order again!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=101&h=101&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai, Maharashtra",
    text: "Best deals on electronics I've ever found. Bought a Bluetooth speaker at half the market price. Sound quality is phenomenal. Highly recommend Shopsy!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=101&h=101&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Krishnan",
    location: "Bangalore, Karnataka",
    text: "The kids section is amazing! Bought three dresses for my daughter and she absolutely loves them. Great fabric, and super fast delivery.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=101&h=101&fit=crop&crop=face",
    rating: 4,
  },
  {
    id: 4,
    name: "Arjun Nair",
    location: "Kochi, Kerala",
    text: "Ordered 5 shirts from the Men's Wear section during the winter sale. All arrived neatly packed and the fit was perfect. Shopsy is now my go-to store!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=101&h=101&fit=crop&crop=face",
    rating: 5,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What Our Customers Are Saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Over 10,000 happy customers across India trust Shopsy for their
            daily shopping needs. Here's what they have to say!
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="flex items-center gap-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-16 h-16 object-cover border-2 border-primary"
                    />
                    <div>
                      <h1 className="text-lg font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                      <p className="text-xs text-gray-400">{data.location}</p>
                      {/* Star Rating */}
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < data.rating
                                ? "text-yellow-400 text-xs"
                                : "text-gray-300 text-xs"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-6 italic">
                    "{data.text}"
                  </p>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;