import React from "react";
import BannerImg from "../../assets/women/Women4.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div
      className="min-h-[550px] flex justify-center 
    items-center py-12
    sm:py-0"
    >
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
          {/* image section  */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto 
            drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
             mt-16 object-cover"
            />
          </div>
          {/* text detail section  */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center gap-6 sm:pt-0"
          >
            <h1 className="text-xl font-bold sm:text-4xl">
              Winter sales upto 50% off
            </h1>
            <p className="text-2xl tracking-wide text-gray-500 leading">
              Winter Sale stylish fashion! Shop jackets, sweaters, and more at
              unbeatable prices. Limited-time offer—grab your winter essentials
              now!
            </p>
            <div className="flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400" />
                <p>Quality Product </p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="w-12 h-12 p-4 text-4xl bg-orange-100 rounded-full shadow-sm dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="w-12 h-12 p-4 text-4xl bg-orange-100 rounded-full shadow-sm dark:bg-orange-400" />
                <p>Easy Payment Method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="w-12 h-12 p-4 text-4xl bg-orange-100 rounded-full shadow-sm dark:bg-orange-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
