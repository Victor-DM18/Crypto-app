import axios from "axios";
import { useEffect, useState } from "react";

const Info = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://api.coingecko.com/api/v3/global");
      setHeaderData(res.data);
    })();
  }, []);

  console.log(headerData);

  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default Info;
