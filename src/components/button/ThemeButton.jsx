import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IconButton } from "..";
import { useDispatch, useSelector } from "react-redux";
import { chengTheme } from "../../context/features/theme/theme-slice";

const ThemeButton = () => {
  const { theme } = useSelector((store) => store.theme);
  const despatch = useDispatch();

  return theme === "light" ? (
    <span
      onClick={() => {
        despatch(chengTheme());
      }}
    >
      <IconButton value={<BsSunFill />} />
    </span>
  ) : (
    <span
      onClick={() => {
        despatch(chengTheme());
      }}
    >
      <IconButton value={<BsMoonFill />} />
    </span>
  );
};

export default ThemeButton;
