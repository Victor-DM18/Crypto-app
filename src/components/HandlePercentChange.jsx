import { useEffect, useState } from "react";

const HandlePercentChange = ({ number }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (number) {
      if (number >= 0) {
        setColor("text-green-400");
      } else {
        setColor("text-red-400");
      }
    } else {
      setColor("text-gray-100");
    }
  }, [number]);

  return (
    <div>
      <p className={color}> {number ? ` ${number.toFixed(1)} % ` : "-"} </p>
    </div>
  );
};

export default HandlePercentChange;
