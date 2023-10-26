import React, { useState } from "react";

const TableCoins = ({ data }) => {
  const [range, setRange] = useState(100);

  const handleChange = (e) => {
    setRange(e.target.value);
  };
  return (
    <div>
      <div>
        <span>
          top <input type="text" value={range} onChange={handleChange}></input>
        </span>
      </div>
    </div>
  );
};

export default TableCoins;
