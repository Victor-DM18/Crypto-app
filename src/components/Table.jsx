import React, { useState } from "react";

const Table = ({ data }) => {
  const [range, setRange] = useState(100);
  const [tri, setTri] = useState("");

  const tableName = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1m",
    "6m",
    "1a",
    "ATH",
  ];

  const handleChange = (e) => {
    setRange(e.target.value);
  };

  const handleTri = (e) => {
    tri === e ? setTri(e + "reverse") : setTri(e);
  };

  return (
    <div>
      <div className="flex flex-row w-screen ">
        <span className="flex flex-row text-cyan-500 w-16 gap-2">
          top{" "}
          <input
            type="text"
            value={range}
            onChange={handleChange}
            className=" bg-gray-700"
          ></input>
        </span>
        <input
          type="range"
          min="1"
          max="250"
          value={range}
          onChange={handleChange}
          className=" w-32"
        />
        {tableName.map((name) => (
          <li className="w-full list-none text-center">
            <input
              type="radio"
              id={name}
              defaultChecked={
                name === tri || name === tri + "reverse" ? true : false
              }
              className="hidden text-center"
              onClick={handleTri}
            />
            <label htmlFor={name} className="text-gray-100  cursor-pointer">
              {name}
            </label>
          </li>
        ))}
      </div>
      <div className="text-xs lg:text-lg text-gray-100 flex flex-col mt-5 gap-2 ">
        {data &&
          data.slice(0, range).map((coin) => (
            <ul className="flex flex-row gap-20  w-full border-t-2 border-gray-900 ">
              <li className="flex justify-center w-8">
                {coin.market_cap_rank}
              </li>
              <li className="flex justify-center w-8">{coin.name}</li>
              <li className="flex justify-center w-20">{coin.current_price}</li>
              <li className="flex justify-center w-12">{coin.market_cap}</li>
              <li className="flex justify-center w-20">{coin.total_volume}</li>
              <li className="flex justify-center w-4">
                {parseFloat(coin.price_change_percentage_1h_in_currency)}
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Table;
