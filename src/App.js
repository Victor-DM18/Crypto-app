import { useEffect, useState } from "react";
import Info from "./components/Info";
import InputFilter from "./components/InputFilter";
import "./style/global.css";
import axios from "axios";
import TreeChart from "./components/TreeChart";
import React from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
      );
      setData(res.data);
    })();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center text-gray-100 font-extrabold text-3xl">
        Crypto App
      </h1>
      <header className="text-gray-100">
        <div className="flex flex-col items-center">
          <Info />
          <InputFilter />
        </div>
        <div>
          <TreeChart data={data} />
        </div>
      </header>
    </div>
  );
};

export default App;
