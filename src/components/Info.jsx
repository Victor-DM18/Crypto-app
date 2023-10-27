import axios from "axios";
import { useEffect, useState } from "react";
import HandlePercentChange from "./HandlePercentChange";

const Info = () => {
  const [headerData, setHeaderData] = useState([]);
  const [, setError] = useState([]);

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
    <div className="flex flex-row justify-center gap-2 w-auto lg:w-full h-52">
      <div className="lg:w-[45%] border-2 rounded-lg border-cyan-500 bg-gray-800 shadow-md shadow-gray-900">
        <ul className="flex flex-col text-center">
          <li className="text-center bg-gray-900 rounded-lg py-5 text-2xl font-bold text-cyan-500 mb-5 ">
            Watch Tower
          </li>
          <li className=" text-xs lg:text-lg">
            Crypto : {headerData.active_cryptocurrencies}
          </li>
          <li className=" text-xs lg:text-lg">
            Le marché : {headerData.markets}
          </li>
        </ul>
      </div>
      <div className="flex items-center text-center lg:w-[55%] text-xs lg:text-lg border-2 rounded-lg border-cyan-500 bg-gray-800  shadow-md shadow-gray-900">
        <ul className="flex flex-col h-fit w-full">
          <li className="flex flex-row  justify-center ">
            <span>Global Market Cap :&nbsp;</span>

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
