import axios from "axios";
import { useEffect, useState } from "react";
import HandlePercentChange from "./HandlePercentChange";

const Info = () => {
  const [headerData, setHeaderData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://api.coingecko.com/api/v3/global");
        setHeaderData(res.data.data);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  return (
    <div className="flex flex-row gap-2 w-[45%] hidden lg:flex">
      <div className="w-[45%] border-2 rounded-lg border-cyan-500 bg-gray-800 shadow-md shadow-gray-900">
        <ul className="flex flex-col">
          <li className="text-center bg-gray-900 rounded-lg p-5 text-2xl font-bold text-cyan-500 mb-5 ">
            Watch Tower
          </li>
          <li className="m-2 ">
            Crypto : {headerData.active_cryptocurrencies}
          </li>
          <li className="m-2">Le marché : {headerData.markets}</li>
        </ul>
      </div>
      <div className="flex items-center w-[45%] border-2 rounded-lg border-cyan-500 bg-gray-800 p-5 shadow-md shadow-gray-900">
        <ul className="flex flex-col gap-5 w-full">
          <li className="flex flex-row gap-2">
            Global Market Cap :{" "}
            <HandlePercentChange
              number={headerData.market_cap_change_percentage_24h_usd}
            />
          </li>
          <li>
            BTC dominance :{" "}
            {headerData.market_cap_percentage &&
              headerData.market_cap_percentage.btc.toFixed(1)}{" "}
            %
          </li>
          <li>
            ETH dominance :{" "}
            {headerData.market_cap_percentage &&
              headerData.market_cap_percentage.eth.toFixed(1)}{" "}
            %
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
