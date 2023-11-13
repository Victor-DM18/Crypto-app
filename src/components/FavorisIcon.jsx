import React, { useEffect, useState } from "react";

import { StarIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

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

  const handleClick = (id) => {
    let favList = null;
    const list = localStorage.getItem("favoris");

    if (list) {
      favList = list.split(",");
    }
    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.favoris = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.favoris = [...favList, coinId];
        setLike(true);
      }
    } else {
      localStorage.setItem("favoris", coinId);
      setLike(true);
    }
  };

  return (
    <div>
      <StarIcon
        className={classNames(
          "h-4 hover:cursor-pointer",
          like ? "text-cyan-500" : "text-gray-100"
        )}
        onClick={() => handleClick(coinId)}
      />
    </div>
  );
};

export default FavorisIcon;
