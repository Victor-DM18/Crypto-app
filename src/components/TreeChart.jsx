import { useEffect, useState } from "react";
import { Treemap } from "recharts";

const GlobalMarketChart = ({ data }) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    let chartData = [];

    if (data.length > 0) {
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
    setDataArray(chartData);
  }, [data]);

  console.log(dataArray);

  return (
    <div>
      <Treemap
        width={700}
        heigt={200}
        data={dataArray}
        dataKey="size"
        stroke="egb(50, 50, 50)"
        fill="black"
        aspect="ratio"
      />
    </div>
  );
};

export default GlobalMarketChart;
