import { useEffect, useState } from "react";

export default function useWidthListener() {
  const [isOpenList, setIsOpenList] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setIsOpenList(false);
      }
    });
  }, []);

  return {
    isOpenList,
    setIsOpenList,
  };
}
