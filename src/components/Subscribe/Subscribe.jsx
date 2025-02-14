import React from "react";
import BannerImg from "../../assets/website/orange-pattern.jpg";

const BannerStyle = {
  backgroundImage: "url(${BannerImg})",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div>
      <div
        data-aos="zoom-in"
        className="text-wh:style={BannerImg}
     bg-gray-500 mb-20 dark:bg-gray-800"
      >
        <div className="container backdrop-blur-sm py-10">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              className="text-2xl text-center sm:text-left
        sm:text-4xl font-semibold"
            >
              Get Notified About New Products
            </h1>
            <input
              data-oas="fade-up"
              type="text"
              placeholder="Enter your Email"
              className="w-full p-3"
            />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Subscribe;
