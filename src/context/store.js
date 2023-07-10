import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/theme-slice";
import userReducer from "./features/user/user-slice";
import modalReducer from "./features/modal/modal-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
