import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./getUser";

const initialState = () => {
  if (localStorage.getItem("user") === null) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        user_id: 0,
        user_name: "",
        email: "",
        user_avatar: "",
        first_name: "",
        last_name: "",
        phone: "",
        gender: "",
        register_date: "",
        isLoading: true,
      })
    );
  }

  return JSON.parse(localStorage.getItem("user"));
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.user_id = payload.user_id;
      state.user_name = payload.user_name;
      state.email = payload.email;
      state.user_avatar = payload.user_avatar;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;
      state.phone = payload.phone;
      state.gender = payload.gender;
      state.register_date = payload.register_date;

      localStorage.setItem("user", JSON.stringify(state));
    },
    logoutUser: (state) => {
      state.user_id = 0;
      state.user_name = "";
      state.email = "";
      state.user_avatar = "";
      state.first_name = "";
      state.last_name = "";
      state.phone = "";
      state.gender = "";
      state.register_date = "";

      localStorage.setItem("user", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user_id = action.payload.user_id;
        state.user_name = action.payload.user_name;
        state.email = action.payload.email;
        state.user_avatar = action.payload.user_avatar;
        state.first_name = action.payload.first_name;
        state.last_name = action.payload.last_name;
        state.phone = action.payload.phone;
        state.gender = action.payload.gender;
        state.register_date = action.payload.register_date;

        localStorage.setItem("user", JSON.stringify(state));
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export const { loginUser, logoutUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
