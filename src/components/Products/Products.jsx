import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Img1 from "../../assets/women/Women1.jpg";
import Img2 from "../../assets/women/Women2.jpg";
import Img3 from "../../assets/women/Women3.jpg";
import Img4 from "../../assets/women/Women4.jpg";
import { FaStar } from "react-icons/fa6";

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
  {
    id: 4,
    img: Img4,
    title: "printed T-shirt",
    rating: 4.4,
    author: "yellow",
    aosdelay: "600",
  },
  // {
  //   id: 5,
  //   img: Img5,
  //   title: "Fashion T-shirt",
  //   rating: 4.5,
  //   author: "Pink",
  //   aosdelay: "800",
  // },
];
function Products() {
  return (
    <div className="mb-12 mt-14 ">
      <div className="container">
        {/* header section  */}

        <div className="mb-10 text-center max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Product
          </h1>
          <p data-aos="fade-up" className="text-xl text-gray-900">
            lorem ipsum dplor sit amet consectetur adipicicing elit sit
            asperiores
          </p>
        </div>
        {/* body section  */}
        <div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center ">
            {/* card section  */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosdelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px]
                    object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
