import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  if (localStorage.getItem("user") === null) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        user_id: 0,
        user_name: "",
        is_active: false,
      })
    );
  }

  return JSON.parse(localStorage.getItem("user"));
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
