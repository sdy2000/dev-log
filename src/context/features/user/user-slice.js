import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  if (localStorage.getItem("user") === null) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        user_id: 0,
        user_name: "",
        email: "",
      })
    );
  }

  return JSON.parse(localStorage.getItem("user"));
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user_id = payload.user_id;
      state.user_name = payload.user_name;
      state.email = payload.email;

      localStorage.setItem("user", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {},
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
