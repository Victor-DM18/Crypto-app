import { useEffect, useState } from "react";
import { Tooltip, Treemap } from "recharts";

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
          size: data[i].market_cap,
          fill: null,
        });
      }
    }
    setDataArray(chartData);
  }, [data]);

  const TreemapToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <p>{payload[0].payload.name}</p>
        </div>
      );
    }
  };

  return (
    <div className="hidden lg:flex">
      <Treemap
        width={700}
        height={200}
        data={dataArray}
        dataKey="size"
        stroke="rgb(51,51,51)"
        fill="black"
        aspectRatio="1"
      >
        <Tooltip content={<TreemapToolTip />} />
      </Treemap>
    </div>
  );
};

export default GlobalMarketChart;
