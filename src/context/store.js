import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/theme-slice";
import userReducer from "./features/user/user-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});
