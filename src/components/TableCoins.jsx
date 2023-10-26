import React, { useState } from "react";

const TableCoins = ({ data }) => {
  const [range, setRange] = useState(100);
  return (
    <div>
      <div>
        <span>
          top <input type="text" value={range}></input>
        </span>
      </div>
    </div>
  );
};

export default TableCoins;
