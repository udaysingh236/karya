import { useEffect } from "react";
import { useState } from "react";

function ToogleComponent({ timeOut, children }) {
  const [show, setShow] = useState(true);
  useEffect(
    function () {
      if (show) {
        const id = setTimeout(() => {
          setShow(!show);
        }, timeOut);

        return function () {
          clearTimeout(id);
        };
      }
    },
    [show, timeOut],
  );
  return show && children;
}

export default ToogleComponent;
