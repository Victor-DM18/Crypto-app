import React from "react";

const InputFilter = () => {
  return (
    <div className="flex flex-row gap-5">
      <input
        type="checkbox"
        id="stableCoin"
        className="hidden"
        defaultChecked={true}
      />
      <label
        htmlFor="stableCoin"
        className="bg-gray-800 border border-cyan-500 rounded-xl m-1 p-1"
      >
        Avec stable coin
      </label>
      <input
        type="checkbox"
        id="noList"
        className="hidden"
        defaultChecked={true}
      />
      <label
        htmlFor="nList"
        className="bg-gray-800 border border-cyan-500 rounded-xl m-1 p-1"
      >
        Aucune liste
      </label>
    </div>
  );
};

export default InputFilter;
