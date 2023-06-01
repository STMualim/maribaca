import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getPostsSelf = createAsyncThunk(
  "postSelf/getPostsSelf",
  async () => {
    try {
      const response = await axios.get(
        "https://64715cc66a9370d5a41a53d8.mockapi.io/selfimprovement"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const postsSelfSlice = createSlice({
  name: "postsSelf",
  initialState: {
    postsSelf: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsSelf.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostsSelf.fulfilled, (state, action) => {
        state.loading = false;
        state.postsSelf = action.payload;
      })
      .addCase(getPostsSelf.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsSelfSlice.reducer;
