import React, { useState } from "react";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaGooglePlusG, FaPhoneAlt, FaAngleDown } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../assets/logo/mindora_logo.svg";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

type MenuItem = {
  name: string;
  path: string;
  subItems?: { name: string; path: string }[];
};

const menuItems: MenuItem[] = [
  { name: "Home", path: "/" },
  { name: "Department", path: "/department" },
  {
    name: "Blog",
    path: "/blog",
    subItems: [
      { name: "News", path: "/blog/news" },
      { name: "Articles", path: "/blog/articles" },
    ],
  },
  {
    name: "Pages",
    path: "/pages",
    subItems: [
      { name: "About Us", path: "/pages/about" },
      { name: "Services", path: "/pages/services" },
    ],
  },
  { name: "Doctors", path: "/doctors" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMouseEnter = (name: string) => setHoveredMenu(name);
  const handleMouseLeave = () => setHoveredMenu(null);

  const handleMenuItemClick = (path: string) => {
    setActiveSection(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top contact bar */}
      <nav className="bg-[#F5FBFF]">
        <div className="py-3 flex justify-between items-center container">
          <div className="flex items-center space-x-2 text-[26px] text-gray-400">
            <a href="#" aria-label="LinkedIn">
              <CiLinkedin />
            </a>
            <a href="#" aria-label="Facebook">
              <CiFacebook />
            </a>
            <a href="#" aria-label="Google Plus">
              <FaGooglePlusG />
            </a>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-2">
              <MdOutlineEmail />
              <span>info@mindora.com</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FaPhoneAlt />
              <span>180160</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main header/nav */}
      <header className="bg-white shadow-md py-4 sticky top-0 z-30">
        <div className="flex items-center justify-between container">
          {/* Logo */}
          <div className="flex items-center gap-x-1.5">
            <img
              src={logo}
              alt="mindora"
              className="block max-w-[50px]"
              width={50}
              height={50}
            />
            <span className="font-bold text-2xl lg:text-4xl">Mindora</span>
          </div>

          {/* Navigation links */}
          <ul className="hidden md:flex items-center gap-x-5 relative">
            {menuItems.map((item) => {
              const hasDropdown = item.subItems && item.subItems.length > 0;

              return (
                <li
                  key={item.name}
                  onMouseEnter={() =>
                    hasDropdown && handleMouseEnter(item.name)
                  }
                  onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
                  className="relative"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 ${
                        isActive ? "text-primary" : "text-gray-700"
                      } hover:text-primary transition`
                    }
                  >
                    {item.name}
                    {hasDropdown && (
                      <FaAngleDown className="text-sm mt-[2px]" />
                    )}
                  </NavLink>

                  {hasDropdown && hoveredMenu === item.name && (
                    <ul className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 p-2 w-44 space-y-2 z-50">
                      {item.subItems?.map((subItem) => (
                        <li key={subItem.path}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              `block hover:text-primary ${
                                isActive ? "text-primary" : ""
                              }`
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <button className="hidden md:block bg-[#013E50] text-white py-2.5 md:px-4 lg:px-8 rounded-[10px] hover:bg-transparent border border-[#013E50] hover:text-[#013E50] duration-200 transition-all cursor-pointer">
            Make an Appointment
          </button>

          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#013E50] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#013E50] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-gray-600 text-white z-50 shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <FiX
              className="text-3xl text-[#55E6C1] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ul className="flex flex-col items-start pl-6 space-y-6 text-lg">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => handleMenuItemClick(item.path)}
                  className={({ isActive }) =>
                    `hover:text-[#55E6C1] ${isActive ? "text-[#55E6C1]" : ""}`
                  }
                >
                  {item.name}
                </NavLink>

                {item.subItems && item.subItems.length > 0 && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.path}>
                        <NavLink
                          to={subItem.path}
                          onClick={() => handleMenuItemClick(subItem.path)}
                          className={({ isActive }) =>
                            `hover:text-[#55E6C1] ${
                              isActive ? "text-white" : ""
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
