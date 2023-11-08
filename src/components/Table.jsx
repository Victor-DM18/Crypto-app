import React, { useState } from "react";
import TableLine from "./TableLine";
import { Form, Formik } from "formik";
import FormRadio from "./FormRadio";
import classNames from "classnames";

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

  const handleTri = (e) => {
    tri === e ? setTri(e + "reverse") : setTri(e);
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
            <ul className="w-full flex flex-row gap-20 justify-around text-center">
              {tableName.map((name) => (
                <FormRadio
                  type="radio"
                  name="tri"
                  key={name}
                  className={classNames(
                    "flex flex-row justify-center text-center text-gray-100"
                  )}
                >
                  {name}
                </FormRadio>
              ))}
            </ul>
          </Form>
        </Formik>
      </div>
      <div className="text-xs text-gray-100 flex flex-col mt-5 gap-2 items-center">
        <TableLine key={data.id} data={data} range={range} />
      </div>
    </div>
  );
};

export default Table;
