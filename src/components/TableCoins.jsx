import React, { useState } from "react";

const TableCoins = ({ data }) => {
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
    tri === e ? setTri(e + "reverse") : setRange(e);
  };

  return (
    <div>
      <div className="flex flex-row gap-5 ">
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
              onClick={() =>
                tri === name ? setTri(name + "reverse") : setRange(name)
              }
            />
            <label htmlFor={name} className="text-gray-100  cursor-pointer">
              {name}
            </label>
          </li>
        ))}
      </div>
      <div className="text-xs lg:text-lg text-gray-100 flex flex-col mt-5 gap-2">
        {data.map((coin) => (
          <ul className="flex flex-row gap-3">
            <li>{coin.name}</li>
            <li>{coin.current_price}</li>
            <li>{coin.market_cap_rank}</li>
            <li>{coin.total_volume}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TableCoins;
