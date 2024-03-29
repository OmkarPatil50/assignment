import React, { useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { FaMagnifyingGlass, FaRegBell } from "react-icons/fa6";
import { FiBox, FiHome } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";
import { TbArrowsDownUp } from "react-icons/tb";
import { IoSettingsOutline, IoWalletOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FaRegQuestionCircle } from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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

  const submenu = [
    {
      display: "Notifications",
      icon: <FaRegBell />,
    },
    {
      display: "Support",
      icon: <FaRegQuestionCircle />,
    },
    {
      display: "Settings",
      icon: <IoSettingsOutline />,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed z-[50] pb-5 h-screen left-0 bg-stone-800 text-white hidden md:flex flex-col justify-start transition-all duration-300 ${
        isOpen ? "w-80" : "w-20"
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="w-12 h-12 cursor-pointer" onClick={toggleSidebar}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5038/5038590.png"
              alt="logo"
            />
          </div>
          {isOpen && <h2 className="font-semibold">COMPANY</h2>}
        </div>
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none ml-auto flex justify-center items-center"
          >
            <VscThreeBars className="text-2xl" />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="mx-4 pl-2 relative bg-neutral-700 flex justify-start items-center rounded-md">
          <FaMagnifyingGlass />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 bg-neutral-700 focus:outline-none"
          />
        </div>
      )}
      <nav
        className={`my-10 ${isOpen ? "mx-6 space-y-6" : "mx-auto space-y-8"}`}
      >
        {navItems?.map((item, index) => {
          return (
            <NavLink
              key={index}
              className={`flex justify-start items-center gap-4 ${
                isOpen ? "text-base" : "text-2xl"
              } [&.active]:text-primaryColor cursor-pointer`}
              to={item?.link}
            >
              {item?.icon}{" "}
              <span className={isOpen ? "inline" : "hidden"}>
                {item?.display}
              </span>
            </NavLink>
          );
        })}
      </nav>
      <div className="justify-self-end">
        <div
          className={`my-10 ${isOpen ? "mx-6 space-y-6" : "mx-auto space-y-8"}`}
        >
          {submenu?.map((item, index) => {
            return (
              <li
                key={index}
                className={`flex items-center gap-4 ${
                  isOpen ? "text-base justify-start" : "text-2xl justify-center"
                } cursor-pointer`}
              >
                {item?.icon}{" "}
                <span className={isOpen ? "inline" : "hidden"}>
                  {item?.display}
                </span>
                {item?.display === "Notifications" && isOpen && (
                  <div className="justify-self-end rounded-sm px-2 bg-primaryColor">
                    12
                  </div>
                )}
              </li>
            );
          })}
        </div>
        <div
          className={`flex justify-between items-center p-3 rounded-md ${
            isOpen ? "bg-neutral-700" : "transparent"
          } mx-2`}
        >
          <div className="flex justify-between items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://c1.klipartz.com/pngpicture/823/765/sticker-png-login-icon-system-administrator-user-user-profile-icon-design-avatar-face-head.png"
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`${isOpen ? "inline" : "hidden"}`}>
              <h3>Brooklyn Simmons</h3>
              <p className="text-neutral-400">test@example.com</p>
            </div>
          </div>
          <p className={`${isOpen ? "inline" : "hidden"} text-neutral-400`}>
            :
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
