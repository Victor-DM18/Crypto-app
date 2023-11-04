import React from "react";

const TableLine = ({ data, range }) => {
  const priceFormate = (price) => {
    if (Math.round(price).toString().length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(price);
    } else {
      return price;
    }
  };

  return (
    <div className="text-xs">
      {data &&
        data.slice(0, range).map((coin) => (
          <div className="flex flex-row  py-3 w-fdivl border-t-2 border-gray-900 ">
            <p className="flex  justify-center w-12">{coin.market_cap_rank}</p>
            <p className="flex justify-start w-48">{coin.name}</p>
            <p className="flex w-28">
              {priceFormate(coin.current_price).toLocaleString() + " $"}
            </p>
            <p className="flex w-40 ">{coin.market_cap}</p>
            <p className="flex w-28">{coin.total_volume}</p>
            <p className="flex w-28">
              {parseFloat(coin.price_change_percentage_1h_in_currency)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default TableLine;
