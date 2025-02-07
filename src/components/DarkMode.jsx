import React from "react";
import LightButton from "../assets/website/Light-mode-button.jpg";
import DarkButton from "../assets/website/Dark-mode-button.jpg";

const darkMode = () => {
    
  return (
    <div className="relative">
      <img
        src={LightButton}
        alt=""
        className="w-12 cursor-pointer drop-shadow-sm 
              [1px-1px-1px rgba(0,0,0,0.1)] transition-all
              duration-300 absolute right-0 z-10"
      />
      <img
        src={DarkButton}
        alt=""
        className="w-12 cursor-pointer drop-shadow-sm 
              [1px-1px-1px rgba(0,0,0,0.1)] transition-all
              duration-300"
      />
    </div>
  );
};

export default darkMode;
