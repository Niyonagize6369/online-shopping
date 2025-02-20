import { useState } from "react";
import Logo1 from "../assets/logo1.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/Services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const dropdownLinks = [
  { id: 1, name: "Trending Product", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

function Navbar({ handleOrderPopup }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      {/* upper nav */}
      <div className="py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          <div>
            <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
              <img src={Logo1} alt="Logo1" className="w-10" />
              shopping
            </a>
          </div>

          {/* Search bar toggle for small screens */}
          <div className="flex items-center gap-4">
            {/* Search Bar (Hidden on small screens by default) */}
            <div
              className={`relative group ${
                isSearchVisible ? "block" : "hidden sm:block"
              }`}
            >
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                transition-all duration-300 rounded-full border
                border-gray-300 px-2 py-1 focus:outline-none
                focus:border-1 focus:border-primary dark:border-gray-500
                dark:bg-gray-800"
              />
              <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3" />
            </div>

            {/* Search Toggle Button (for mobile view) */}
            <button
              className="p-2 text-gray-500 sm:hidden"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            >
              <IoMdSearch className="text-2xl" />
            </button>

            {/* Order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="flex gap-3 px-4 py-1 text-white 
              transition-all duration-200
               rounded-full bg-gradient-to-r
                from-primary to-secondary
                 item-center group"
            >
              <span className="hidden transition-all duration-200 group-hover:block">
                Order
              </span>
              <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm" />
            </button>

            {/* Dark mode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower nav */}
      <div className="flex justify-center dark:bg-gray-900">
        <ul className="items-center hidden gap-4 sm:flex">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 duration-200 hover:text-primary"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown menu */}
          <li className="relative cursor-pointer group">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Product
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {dropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full p-2 rounded-md hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
