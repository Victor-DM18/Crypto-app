import { useEffect, useState } from "react";
import { Tooltip, Treemap } from "recharts";

const GlobalMarketChart = ({ data }) => {
  const [dataArray, setDataArray] = useState([]);

  const handleColor = (number) => {
    if (number >= 4) {
      return "rgb(19, 143, 28)";
    } else if (number >= 0) {
      return "rgb(90, 145, 94)";
    } else if (number >= -4) {
      return "rgb(191, 103, 111)";
    } else if (number >= -20) {
      return "rgb(150, 23, 34)";
    } else {
      return "rgb(0, 0, 0)";
    }
  };

  const handleExcludeCoins = (coin) => {
    if (
      coin === "usdt" ||
      coin === "usdc" ||
      coin === "busd" ||
      coin === "dai" ||
      coin === "ust" ||
      coin === "mim"
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    let chartData = [];

    if (data.length > 0) {
      for (let i = 0; i < 45; i++) {
        handleExcludeCoins(data[i].symbol) &&
          chartData.push({
            name: `${data[i].symbol.toUpperCase()} ${data[
              i
            ].market_cap_change_percentage_24h.toFixed(1)} %`,
            size: data[i].market_cap,
            fill: handleColor(data[i].price_change_percentage_24h),
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
    <div className="hidden w-auto lg:flex rounded-map">
      <Treemap
        width={650}
        height={208}
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
