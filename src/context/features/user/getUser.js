import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../../../service/api";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.post(
        BASE_URL + "api/" + ENDPOINTS.login + "/",
        data
      );

      return resp.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
