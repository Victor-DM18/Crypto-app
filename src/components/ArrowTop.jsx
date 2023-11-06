import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const ArrowTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <ArrowUpCircleIcon className="h-16" onClick={handleClick} />
    </div>
  );
};

export default ArrowTop;
