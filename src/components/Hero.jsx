import React from "react";
import Image1 from "../assets/sales.jpg";
import Image2 from "../assets/shopping.jpg";
import Image3 from "../assets/women.jpg";
import Slider from "react-slick";

const Imagelist = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on sales",
    description:
      "lorem his life will firever be change dolor sit amet, consectetur",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem his life will firever be change dolor sit amet, consectetur",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 50% off on all Women's Wear",
    description:
      "lorem his life will firever be change dolor sit amet, consectetur",
  },
];

function Hero() {
  var setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToscroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]
    bg-gray-100 flex justify-center items-center dark:bg-gray-950
    dark:text-white duration-200"
    >
      {/* background pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 absolute
      -top-1/2 right-0 rounded-3xl rotate-45 -z-8"
      ></div>
      {/* Hero section */}

      <div className="container pb-8 sm:pb-0">
        <Slider {...setting}>
          {Imagelist.map((data) => (
            // <div key={data.id}>{ item.name}</div>
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pt-0 sm:text-left sm:order-1">
                  <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.description}</p>
                  <div>
                    <button className="px-4 py-2 rounded-full dark:text-white darduration-200 bg-gradient-to-r from-primary to-secondary hover:scale-105">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image section  */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px]
                sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
