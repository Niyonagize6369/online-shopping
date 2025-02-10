import React from "react";
import Logo1 from "../assets/logo1.jpg";
import { IoMdSearch } from "react-icons/io";
import { LuSearchCheck } from "react-icons/lu";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./Darkmode.jsx";
const Menu = [
  {
    id: 1,
    name: "home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/Services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const dropdownLinks = [
  {
    id: 1,
    name: "Trending Product",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
function Navbar() {
  return (
    <div className="relative z-40 duration-200 shadow-md bg-whitedack:bg-gray-900 dark:text-green-600">
      {/* upper nav */}
      <div className="py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          <div>
            <a
              href="#"
              className="gap-2 text-2xl font-bold sm:text-3xlflex gap-2flex"
            >
              <img src={Logo1} alt="Logo1" className="w-10" />
              shopping
            </a>
          </div>

          {/* search bar */}

          <div className="flex items-center justify-between gap-4">
            <div className="relative hidden group sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                transition-all duration-300 rounded-full border
                border-gray-300 px-2 py-1 focus:outline-none
                focus border-1 focus:boeder-primary"
              />
              <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="flex gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary item center group "
            >
              <span className="hidden transition-all duration-200 group-hover:block">
                Order
              </span>
              <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm" />
            </button>

            {/* darckmode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower vav */}
      <div className="flex justify-center">
        <ul className="items-center hidden gap-4 sm:flex">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 duration-200 hover:text-primary "
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* {simple dropdown and links} */}
          <li className="relative group">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div>
              <ul>
                {dropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link}>{data.name}</a>
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
