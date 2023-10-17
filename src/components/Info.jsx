import axios from "axios";
import { useEffect, useState } from "react";
import HandlePercentChange from "./HandlePercentChange";

const Info = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://api.coingecko.com/api/v3/global");
      setHeaderData(res.data.data);
    })();
  }, []);

  return (
    <div className="flex flex-row gap-2 w-[45%] hidden lg:flex">
      <div className="w-[45%] border-2 rounded-lg border-cyan-500 bg-gray-800">
        <ul className="flex flex-col">
          <li className="text-center bg-gray-900 rounded-lg p-5 text-2xl font-bold text-cyan-500 mb-5">
            Watch Tower
          </li>
          <li className="m-2 ">
            Crypto :{" "}
            <span className="text-green-400">
              {headerData.active_cryptocurrencies}
            </span>
          </li>
          <li className="m-2">
            Le marché :{" "}
            <span className="text-green-400">{headerData.markets}</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center w-[45%] border-2 rounded-lg border-cyan-500 bg-gray-800 p-5">
        <ul className="flex flex-col gap-5 w-full">
          <li className="flex flex-row gap-2">
            Global Market Cap :{" "}
            <HandlePercentChange
              number={headerData.market_cap_change_percentage_24h_usd}
            />
          </li>
          <li>BTC dominance :</li>
          <li>ETH dominance :</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
