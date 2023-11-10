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
                // <FormRadio
                //   type="radio"
                //   key={name[i]}
                //   value={name[i]}
                //   onClick={handleTri}
                //   defaultChecked={
                //     name === tri || name === tri + "reverse" ? true : false
                //   }
                //   className="flex flex-row justify-center text-center text-gray-100"
                // >
                //   {name}
                // </FormRadio>
              ))}
            </ul>
          </Form>
        </Formik>
      </div>
      <div className="text-xs text-gray-100 flex flex-col mt-5 items-center">
        {data &&
          data.slice(0, range).map((coin) => (
            <div className="odd:bg-gray-800">
              <TableLine key={data.id} tri={tri} coin={coin} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
