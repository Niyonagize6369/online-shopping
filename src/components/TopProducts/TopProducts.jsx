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
    aosdelay: "0",
  },

  {
    id: 2,
    img: Img2,
    title: "Men's western",
    rating: 4.5,
    author: "Red",
    aosdelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "goggles",
    rating: 4.7,
    author: "brown",
    aosdelay: "400",
  },
];

function TopProducts() {
  return (
    <div>
      <div>
        <div className="container">
          {/* header section */}
          <div className="mb-24 text-center">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Rated Products for you
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Best Product
            </h1>
            <p data-aos="fade-up" className="text-xl gray-900 text-">
              lorem ipsum dplor sit amet consectetur adipicicing elit sit
              asperiores
            </p>
          </div>
          {/* body section  */}
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
            {ProductsData.map((data) => (
              <div
                data-aos="zoom-in"
                className="relative bg-white shadow-xl rounded-2xl dark:bg-gray-800
               hover:bg-black/80 dark:hover:bg-primary
                hover:text-white duration-300
                group max-w-[300px]"
              >
                {/* image section  */}
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[140px] block mx-auto transform
                -translate-y-20 group-hover:scale-105 duration-300
                drop-shadow-md"
                  />
                  {/* <FaStar className="text-yellow-400 " /> */}
                </div>
                {/* detail section  */}
                <div className="p-4 text-center">
                  {/* star rating  */}
                  <div className="flex items-center justify-center w-full gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                    {data.discription}
                  </p>

                  <button
                    className="px-4 py-1 mt-4 text-white duration-300 rounded-full group-hover:bg-white bg-primary hover:scale-105 group-hover:text-primary"
                    // onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
