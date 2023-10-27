import React, { useState } from "react";

const TableCoins = ({ data }) => {
  const [range, setRange] = useState(100);

  const handleChange = (e) => {
    setRange(e.target.value);
  };
  return (
    <div>
      <div className="flex flex-row gap-5 m-2">
        <span className="text-cyan-500">
          top{" "}
          <input
            type="text"
            value={range}
            onChange={handleChange}
            className="w-8 bg-gray-700"
          ></input>
        </span>
        <input
          type="range"
          min="1"
          max="250"
          value={range}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TableCoins;
