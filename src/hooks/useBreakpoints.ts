import { useState, useEffect } from "react";

const sm = 640;
const md = 768;
const lg = 1024;
const xl = 1280;

const useBreakpoints = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, sm, md, lg, xl };
};

export default useBreakpoints;
