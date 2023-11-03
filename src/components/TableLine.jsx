import React from "react";

const TableLine = ({ data, range }) => {
  return (
    <div className="text-xs">
      {data &&
        data.slice(0, range).map((coin) => (
          <ul className="flex flex-row  py-3 w-full border-t-2 border-gray-900 ">
            <li className="flex  justify-center w-12">
              {coin.market_cap_rank}
            </li>
            <li className="flex justify-start w-48">{coin.name}</li>
            <li className="flex w-28">{coin.current_price}</li>
            <li className="flex w-40 ">{coin.market_cap}</li>
            <li className="flex w-28">{coin.total_volume}</li>
            <li className="flex w-28">
              {parseFloat(coin.price_change_percentage_1h_in_currency)}
            </li>
          </ul>
        ))}
    </div>
  );
};

export default TableLine;
