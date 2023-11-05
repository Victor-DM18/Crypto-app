import React from "react";
import HandlePercentChange from "./HandlePercentChange";

const TableLine = ({ data, range, ...otherProps }) => {
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

  const marketCapFormat = (num) => {
    let newNum = num.toString().split("").slice(0, -6);

    return Number(newNum.join(""));
  };

  return (
    <div className="text-xs" {...otherProps}>
      {data &&
        data.slice(0, range).map((coin) => (
          <div className="flex flex-row  py-2 w-fdivl border-t-2 border-gray-900 ">
            <p className="flex  justify-center w-12">{coin.market_cap_rank}</p>
            <p className="flex justify-start w-44">{coin.name}</p>
            <p className="flex w-32">
              {priceFormate(coin.current_price).toLocaleString()} $
            </p>
            <p className="flex w-32 ">
              {marketCapFormat(coin.market_cap).toLocaleString()} M $
            </p>
            <p className="flex w-32">{coin.total_volume.toLocaleString()}</p>
            <p className="flex w-28">
              <HandlePercentChange
                number={coin.price_change_percentage_1h_in_currency}
              />
            </p>
            <p className="flex w-28">
              <HandlePercentChange
                number={coin.price_change_percentage_7d_in_currency}
              />
            </p>
            <p className="flex w-28">
              <HandlePercentChange
                number={coin.price_change_percentage_30Dd_in_currency}
              />
            </p>
            <p className="flex w-28">
              <HandlePercentChange
                number={coin.price_change_percentage_200d_in_currency}
              />
            </p>
            <p className="flex w-28">
              <HandlePercentChange
                number={coin.price_change_percentage_1y_in_currency}
              />
            </p>
            <p>{coin.ath}</p>
          </div>
        ))}
    </div>
  );
};

export default TableLine;
