import React from "react";
import Img1 from "../../assets/shirts/shirt1.jpg";
import Img2 from "../../assets/shirts/shirt2.jpg";
import Img3 from "../../assets/shirts/shirt3.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "women Ethnic",
    rating: 5.0,
    author: "white",
    aosdelay: "0",
  },

  {
    id: 2,
    img: Img2,
    title: "women western",
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
            <p data-aos="fade-up" className="text-xs text-gray-900">
              lorem ipsum dplor sit amet consectetur adipicicing elit sit
              asperiores
            </p>
          </div>
          {/* body section  */}
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
            {ProductsData.map((data) => (
              <div className="relative bg-white shadow-xl rounded-2xl dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white duration-300 group max-w-[300px]:">
                {/* image section  */}
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[140px] block mx-auto transform
                -translate-y-20 group-hover:scale-105 duration-300
                drop-shadow-md"
                  />
                </div>
                {/* detail section  */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
