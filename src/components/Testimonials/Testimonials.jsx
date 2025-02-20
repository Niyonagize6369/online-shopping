import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "victor",
    text: "A great solution to improve productivity. Love using it",
    img: "https://picsum.photos/101",
  },
  {
    id: 2,
    name: "satya nadella",
    text: "A great solution to improve productivity. Love using it",
    img: "https://picsum.photos/102",
  },
  {
    id: 3,
    name: "virat kohli",
    text: "A great solution to improve productivity. Love using it",
    img: "https://picsum.photos/104",
  },
  {
    id: 4,
    name: "sachin tendulkar",
    text: "A great solution to improve productivity. Love using it",
    img: "https://picsum.photos/103",
  },
];

export const Testimonials = () => {
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
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="mb-10 text-center max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-2xl text-primary">
            What Our Customers Are Saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-900">
            This product has made a huge difference in my daily work. It’s
            simple to use, and I've seen a real boost in my productivity since I
            started using it.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((item) => (
              <div key={item.id} className="my-6">
                <div className="relative flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl dark:bg-gray-800 bg-primary/10">
                  <div className="mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{item.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute top-0 right-0 font-serif text-black/20 text-9xl">
                    ''
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
