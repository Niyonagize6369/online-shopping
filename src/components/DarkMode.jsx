import { useState, useEffect } from "react";
import LightButton from "../assets/website/Light-mode-button.jpg";
import DarkButton from "../assets/website/Dark-mode-button.jpg";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const element = document.documentElement;
    element.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative w-12 h-12">
      <img
        src={LightButton}
        alt="Switch to Dark Mode"
        onClick={() => setTheme("dark")}
        className={`absolute w-12 cursor-pointer transition-opacity duration-300 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <img
        src={DarkButton}
        alt="Switch to Light Mode"
        onClick={() => setTheme("light")}
        className={`absolute w-12 cursor-pointer transition-opacity duration-300 ${
          theme === "light" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
