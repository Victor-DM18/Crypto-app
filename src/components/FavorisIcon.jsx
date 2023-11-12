import React, { useEffect, useState } from "react";

import { StarIcon } from "@heroicons/react/24/solid";

const FavorisIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("favoris")) {
        let favList = localStorage.getItem("favoris").split(",");
        if (favList.includes(coinId)) {
          setLike(true);
        }
      }
    })();
  }, [coinId]);

  const handleClick = () => {};
  return (
    <div>
      <StarIcon className="h-4 hover:cursor-pointer" onClick={handleClick} />
    </div>
  );
};

export default FavorisIcon;
