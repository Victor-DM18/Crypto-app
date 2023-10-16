import axios from "axios";
import { useEffect, useState } from "react";

const Info = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://api.coingecko.com/api/v3/global");
      setHeaderData(res.data.data);
    })();
  }, []);

  return (
    <div className="flex flex-row w-[40%]">
      <div className="w-[45%] border-2 rounded-lg border-cyan-500">
        <ul className="flex flex-col">
          <li className="text-center bg-gray-900 rounded-lg p-5 text-2xl font-bold text-cyan-500 mb-5">
            Watch Tower
          </li>
          <li className="m-2 text-xs lg:text-xl">
            Crypto :{" "}
            <span className="text-green-400">
              {headerData.active_cryptocurrencies}
            </span>
          </li>
          <li className="m-2 text-xs lg:text-xl">
            Le marché :{" "}
            <span className="text-green-400">{headerData.markets}</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center w[45%] border-2 rounded-lg border-cyan-500">
        <ul className="flex flex-col gap-5 ">
          <li>Global Market Cap :</li>
          <li>BTC dominance :</li>
          <li>ETH dominance :</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
