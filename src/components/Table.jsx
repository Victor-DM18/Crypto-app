import React, { useState } from "react";
import TableLine from "./TableLine";
import { Form, Formik } from "formik";

const Table = ({ data }) => {
  const [range, setRange] = useState(100);
  const [tri, setTri] = useState("");

  const tableName = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1s",
    "1m",
    "6m",
    "1a",
    "ATH",
  ];

  const handleChange = (e) => {
    setRange(e.target.value);
  };

  return (
    <div className="text-xs">
      <div className="flex flex-row w-screen gap-6 justify-center ">
        <span className="flex flex-row text-cyan-500 w-16 gap-2">
          top{" "}
          <input
            type="text"
            value={range}
            onChange={handleChange}
            className=" bg-gray-700"
          ></input>
        </span>

        <input
          type="range"
          min="1"
          max="250"
          value={range}
          onChange={handleChange}
        />

        <Formik>
          <Form>
            <ul className="w-full flex flex-row gap-20 justify-around text-gray-100 text-center">
              {tableName.map((name, i) => (
                <li key={name}>
                  <input
                    type="radio"
                    id={name}
                    className="hidden"
                    onClick={() => {
                      tri === name ? setTri(name + "reverse") : setTri(name);
                    }}
                    defaultChecked={
                      name === tri || name === tri + "reverse" ? true : false
                    }
                  />
                  <label htmlFor={name}>{name}</label>
                </li>
              ))}
            </ul>
          </Form>
        </Formik>
      </div>
      <div className="text-xs text-gray-100 flex flex-col mt-5 items-center">
        {data &&
          data
            .slice(0, range)
            .sort((a, b) => {
              switch (tri) {
                case "Prix":
                  return b.current_price - a.current_price;
                case "Volume":
                  return b.total_volume - a.total_volume;
                case "MarketCap":
                  return b.market_cap - a.market_cap;
                case "1h":
                  return (
                    b.price_change_percentage_1h_in_currency -
                    a.price_change_percentage_1h_in_currency
                  );
                case "1j":
                  return (
                    b.market_cap_change_percentage_24h -
                    a.market_cap_change_percentage_24h
                  );
                case "1s":
                  return (
                    b.price_change_percentage_7d_in_currency -
                    a.price_change_percentage_7d_in_currency
                  );
                case "1m":
                  return (
                    b.price_change_percentage_30d_in_currency -
                    a.price_change_percentage_30d_in_currency
                  );
                case "6m":
                  return (
                    b.price_change_percentage_200d_in_currency -
                    a.price_change_percentage_200d_in_currency
                  );
                case "1a":
                  return (
                    b.price_change_percentage_1y_in_currency -
                    a.price_change_percentage_1y_in_currency
                  );
                case "ATH":
                  return b.ath_change_percentage - a.ath_change_percentage;
                case "#reverse":
                  return a.market_cap - b.market_cap;
                case "Prixreverse":
                  return a.current_price - b.current_price;
                case "Volumereverse":
                  return a.total_volume - b.total_volume;
                case "MarketCapreverse":
                  return a.market_cap - b.market_cap;
                case "1hreverse":
                  return (
                    a.price_change_percentage_1h_in_currency -
                    b.price_change_percentage_1h_in_currency
                  );
                case "1jreverse":
                  return (
                    a.market_cap_change_percentage_24h -
                    b.market_cap_change_percentage_24h
                  );
                case "1sreverse":
                  return (
                    a.price_change_percentage_7d_in_currency -
                    b.price_change_percentage_7d_in_currency
                  );
                case "1mreverse":
                  return (
                    a.price_change_percentage_30d_in_currency -
                    b.price_change_percentage_30d_in_currency
                  );
                case "6mreverse":
                  return (
                    a.price_change_percentage_200d_in_currency -
                    b.price_change_percentage_200d_in_currency
                  );
                case "1areverse":
                  return (
                    a.price_change_percentage_1y_in_currency -
                    b.price_change_percentage_1y_in_currency
                  );
                case "ATHreverse":
                  return a.ath_change_percentage - b.ath_change_percentage;
                default:
                  return null;
              }
            })
            .map((coin) => (
              <div className="odd:bg-gray-800">
                <TableLine key={data.id} tri={tri} coin={coin} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Table;
