import { createSlice } from "@reduxjs/toolkit";
import { getInitialTheme } from "../../../utils/theme/getInitailTheme";

const initialState = () => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem(
      "theme",
      JSON.stringify({
        theme: getInitialTheme(),
      })
    );
  }

  return JSON.parse(localStorage.getItem("theme"));
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    chengTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {},
});

export const { chengTheme } = themeSlice.actions;

export default themeSlice.reducer;
