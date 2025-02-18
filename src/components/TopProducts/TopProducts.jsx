import React from "react";
import Img1 from "../../assets/shirts/shirt1.jpg";
import Img2 from "../../assets/shirts/shirt2.jpg";
import Img3 from "../../assets/shirts/shirt3.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Men's Ethnic",
    rating: 5.0,
    author: "white",
    description: "A stylish ethnic wear for men.",
    aosdelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Men's Western",
    rating: 4.5,
    author: "Red",
    description: "Casual western wear for everyday style.",
    aosdelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    author: "Brown",
    description: "Trendy goggles for all occasions.",
    aosdelay: "400",
  },
];

function TopProducts() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="mb-24 text-center">
        <p data-aos="fade-up" className="text-2xl text-primary">
          Top Rated Products for You
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xl text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Body Section */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 place-items-center">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
            className="relative bg-white shadow-xl rounded-2xl dark:bg-gray-800
               hover:bg-black/80 dark:hover:bg-primary
                hover:text-white duration-300
                group max-w-[300px] p-4"
          >
            {/* Image Section */}
            <div className="flex justify-center h-auto">
              <img
                src={data.img}
                alt={data.title}
                className="max-w-[140px] block mx-auto transform
                -translate-y-10 group-hover:scale-105 duration-300
                drop-shadow-md"
              />
            </div>

            {/* Detail Section */}
            <div className="text-center">
              {/* Star Rating */}
              <div className="flex items-center justify-center w-full gap-1">
                {[...Array(Math.floor(data.rating))].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
                {data.rating % 1 !== 0 && (
                  <FaStar className="text-yellow-300" />
                )}
              </div>

              <h1 className="mt-2 text-xl font-bold">{data.title}</h1>
              <p className="text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                {data.description}
              </p>

              <button className="px-4 py-1 mt-4 text-white duration-300 rounded-full group-hover:bg-white bg-primary hover:scale-105 group-hover:text-primary">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
