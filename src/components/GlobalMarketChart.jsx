import { useEffect, useState } from "react";

const GlobalMarketChart = ({ data }) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    (async () => {
      let chartData = [];

      if (dataArray) {
        for (let i = 0; i < 45; i++) {
          chartData.push({
            name: `${data[i].symbol.toUpperCase()} ${data[
              i
            ].market_cap_change_percentage_24h.toFixed(1)} %`,
            size: `${data[i].market_cap}`,
            fill: null,
          });
        }
      }
      console.log(chartData);
    })();
  }, [data, dataArray]);

  return;
};

export default GlobalMarketChart;
