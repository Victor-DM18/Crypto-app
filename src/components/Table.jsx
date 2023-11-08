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
      <div className="flex flex-row w-screen ">
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
            {tableName.map((name) => (
              <ul className="w-full flex flex-row justify-around text-center">
                <FormRadio
                  type="radio"
                  name="tri"
                  key={name}
                  className={classNames(
                    "flex flex-row "
                    // activeButton === answer.id
                    //   ? "bg-gray-200 dark:bg-gray-600"
                    //   : "bg-gray-400 dark:bg-gray-800"
                  )}
                >
                  {name}
                </FormRadio>
                {/* <input
                  type="radio"
                  id={name}
                  defaultChecked={
                    name === tri || name === tri + "reverse" ? true : false
                  }
                  className="hidden text-center"
                  onClick={handleTri}
                />
                <label htmlFor={name} className="text-gray-100  cursor-pointer">
                  {name}
                </label> */}
              </ul>
            ))}
          </Form>
        </Formik>
      </div>
      <div className="text-xs text-gray-100 flex flex-col mt-5 gap-2">
        <TableLine key={data.id} data={data} range={range} />
      </div>
    </div>
  );
};

export default Table;
