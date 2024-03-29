import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import PopulationChart from "../components/Charts/PopulationChart.jsx";
import CryptoChart from "../components/Charts/CryptoChart.jsx";
import DoughnutChart from "../components/Charts/DoghnutChart.jsx";
import UserDropDown from "../components/UserDropDown.jsx";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <div
      className={`flex p-3 md:p-0 text-white ${
        isOpen ? "md:ml-80" : "md:ml-20 md:max-w-[90%]"
      }`}
    >
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full">
        <div className="md:p-8 flex flex-col md:flex-row md:justify-between gap-4 items-center w-full">
          <div className="font-medium space-y-2">
            <p className="text-3xl">
              Hello,{" "}
              <span className="w-fit bg-gradient-to-r from-primaryColor via-yellow-400 to-secondaryColor font-semibold bg-clip-text text-transparent">
                Brooklyn Simmons
              </span>
            </p>
            <p className="text-xl">
              Welcome to{" "}
              <span className="text-primaryColor">Spot trading!</span>
            </p>
          </div>
          <div className="self-end md:hidden" >
            <UserDropDown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
          </div>
          <button className="bg-primaryColor hover:scale-[1.03] duration-300 px-4 py-3 rounded-md">
            Start Trading
          </button>
        </div>
        <div className="my-5 flex flex-col lg:grid lg:grid-rows-none lg:grid-cols-12 gap-10 md:p-8 w-full">
          <div className="bg-stone-800 lg:col-span-8 p-4 rounded-lg h-full w-full">
            <h3 className="text-xl font-semibold mb-4">Population overview</h3>
            <hr className="mb-2" />
            <div className="w-full h-fit">
              <PopulationChart />
            </div>
          </div>
          <div className="lg:hidden bg-stone-800 rounded-lg p-4 lg:col-span-4 overflow-hidden">
            <h3 className="text-xl font-semibold mb-4">Users overview</h3>
            <hr className="mb-2" />
            <div className="w-full h-fit md:flex justify-center items-center">
              <DoughnutChart />{" "}
            </div>
          </div>

          <div className="hidden lg:block bg-stone-800 rounded-lg p-4 lg:col-span-4 overflow-hidden">
            <h3 className="text-xl font-semibold mb-4">Users overview</h3>
            <hr className="mb-2" />
            <div className="w-full h-fit">
              <DoughnutChart />{" "}
            </div>
          </div>
        </div>

        <div className="md:px-8 pb-10">
          <CryptoChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
