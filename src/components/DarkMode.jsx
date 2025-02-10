import { useState, useEffect } from "react";
import LightButton from "../assets/website/Light-mode-button.jpg";
import DarkButton from "../assets/website/Dark-mode-button.jpg";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative w-12 h-12">
      <img
        src={LightButton}
        alt="Switch to Dark Mode"
        onClick={() => setTheme("dark")}
        className={`absolute w-12 cursor-pointer transition-all duration-300 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <img
        src={DarkButton}
        alt="Switch to Light Mode"
        onClick={() => setTheme("light")}
        className={`absolute w-12 cursor-pointer transition-all duration-300 ${
          theme === "light" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
