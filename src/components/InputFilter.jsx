import React from "react";

const InputFilter = () => {
  return (
    <div className="flex flex-row justify-around bg-gray-800 w-[40%] mt-2 rounded-lg shadow-md shadow-gray-900 border border-cyan-500">
      <input
        type="radio"
        name="checkbox"
        id="stableCoin"
        className="hidden peer/stableCoin"
      />
      <label
        htmlFor="stableCoin"
        className="bg-gray-700 rounded-xl m-1 p-1 peer-checked/stableCoin:bg-gray-900"
      >
        Avec stable coin
      </label>
      <input
        type="radio"
        name="checkbox"
        id="noList"
        className="hidden peer/noList"
      />
      <label
        htmlFor="noList"
        className="bg-gray-700 rounded-xl m-1 p-1 peer-checked/noList:bg-gray-900"
      >
        Aucune liste
      </label>
      <input
        type="radio"
        name="checkbox"
        id="favoris"
        className="hidden peer/favoris"
      />
      <label
        htmlFor="favoris"
        className="bg-gray-700 rounded-xl m-1 p-1 peer-checked/favoris:bg-gray-900"
      >
        Liste dess facoris
      </label>
    </div>
  );
};

export default InputFilter;
