import React from "react";

import { StarIcon } from "@heroicons/react/24/solid";

const handleClick = () => {};

const FavorisIcon = () => {
  return (
    <div>
      <StarIcon className="h-4 hover:cursor-pointer" onClick={handleClick} />
    </div>
  );
};

export default FavorisIcon;
