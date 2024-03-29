import React, { useEffect, useState } from "react";

const CryptoChart = () => {
  const [cryptoData, setCryptoData] = useState({});

  const getCryptoData = async () => {
    try {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const result = await response.json();
      setCryptoData(result?.bpi);
      console.log(result);
    } catch (error) {}
  };

  useEffect(() => {
    getCryptoData();
  }, []);

  return (
    <div className="w-full md:grid md:grid-cols-3 flex flex-col gap-5 md:gap-16">
      {Object.values(cryptoData).map((card, index) => (
        <div
          key={index}
          className="bg-stone-800 text-white h-full space-y-3 p-4 rounded-lg shadow-lg hover:shadow-2xl duration-200 cursor-pointer"
        >
          <div className="bg-primaryColor rounded-full w-12 h-12 flex justify-center items-center">
            <h3 className="font-medium">{card?.code}</h3>
          </div>
          <h3 className="text-[#808088] text-base">
            {card?.description}
          </h3>
          <h3 className="text-3xl font-medium">{card?.rate} $</h3>
          <button className="bg-blue-700 hover:shadow-2xl duration-200 font-normal rounded-xl p-2 px-3 justify-self-end self-end">
            Trade Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default CryptoChart;
