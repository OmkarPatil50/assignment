import React from "react";
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { FiBox, FiHome } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";
import { TbArrowsDownUp } from "react-icons/tb";
import { GiSandsOfTime } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";

const UserDropDown = ({ setIsDropdownOpen, isDropdownOpen }) => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleMenuItemClick = () => {
    setIsDropdownOpen(false);
  };

  const navItems = [
    {
      display: "Home",
      icon: <FiHome />,
      link: "/",
    },
    {
      display: "Organization",
      icon: <BsBuildings />,
      link: "/organization",
    },
    {
      display: "Assets",
      icon: <FiBox />,
      link: "/assets",
    },
    {
      display: "Trade",
      icon: <TbArrowsDownUp />,
      link: "/trade",
    },
    {
      display: "History",
      icon: <GiSandsOfTime />,
      link: "/history",
    },
    {
      display: "Wallet",
      icon: <IoWalletOutline />,
      link: "/wallet",
    },
  ];
  return (
    <div
      className="relative inline-block text-left cursor-pointer z-50"
      ref={dropdownRef}
    >
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex justify-center items-center gap-3"
      >
        <button aria-haspopup="true" aria-expanded={isDropdownOpen}>
          <VscThreeBars className="text-2xl text-white" />
        </button>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-stone-800 rounded-md shadow-lg">
          {navItems?.map((item, index) => {
            return (
              <NavLink
                key={index}
                className={`p-3 flex justify-start items-center gap-4 text-base [&.active]:text-primaryColor cursor-pointer`}
                to={item?.link}
                onClick={() => {
                  handleMenuItemClick();
                }}
              >
                {item?.icon} <span>{item?.display}</span>
              </NavLink>
            );
          })}
          <div className="py-2">
            <button
              onClick={() => {
                handleMenuItemClick();
              }}
              tabIndex="3"
              className="block px-4 py-2 text-sm leading-5 text-gray-100 w-full text-left"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropDown;
