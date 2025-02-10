import React from "react";
import LightButton from "../assets/website/Light-mode-button.jpg";
import DarkButton from "../assets/website/Dark-mode-button.jpg";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement; //html element
  // console.log(theme);
  React.useEffect(() => {
    if (theme === "Dark") {
      element.classList.add("Dark");
      localStorage.setItem("theme", "Dark");
    } else {
      element.classList.remove("Dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        src={LightButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-
          [1px-1px-1px rgba(0,0,0,0.1)] transition-all
              duration-300 absolute right-0 z-10 ${
                theme === "dark" ? "opacity-0" : "opacity-100"
              }`}
      />
      <img
        src={DarkButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-sm 
              [1px-1px-1px rgba(0,0,0,0.1)] transition-all
              duration-300"
      />
    </div>
  );
};

export default DarkMode;
