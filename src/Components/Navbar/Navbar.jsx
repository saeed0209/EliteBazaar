import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo-icon-transparent.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const Menu = [
  {
    id: 1,
    name: "Home",
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
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
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
    }
]
const Navbar = ({ handleOrderPopup }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPreferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPreferDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="primary py-1.5 ">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img src={Logo} alt="Logo" className="w-12 " />
              EliteBazaar
            </a>
          </div>
          {/* search bar*/}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-[#Fea928] dark:border-gray-500 bg-white dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2" />
            </div>
            {/* Order Button */}
            <button onClick={()=> handleOrderPopup()} className="relative bg-gradient-to-r from-[#Fea928] to-[#ed8900] transition-all duration-300 text-white px-4 py-1 rounded-full flex items-center gap-3 group">
              <span className="group-hover:block hidden transition-all duration-300 ">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <div>
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                className="relative py-2"
              >
                {theme === "dark" ? (
                  <img
                    src={DarkButton}
                    alt="DarkButton"
                    className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
                  />
                ) : (
                  <img
                    src={LightButton}
                    alt="lightButton"
                    className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 right-0 z-10"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-[#Fea928] duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                    {DropdownLinks.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-[#FEA92833] ">{data.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
