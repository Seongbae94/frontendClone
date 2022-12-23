import axios from "../components/instance/axiosPostInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

// 예시
// export const __getTodos = createAsyncThunk(
//   "getTodos",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await axios.get("http://localhost:3001/todos");
//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const __getPosts = createAsyncThunk("getPosts", async (_, thunkAPI) => {
  try {
    const data = await axios.get("?_sort=id&_order=desc");
    return thunkAPI.fulfillWithValue(data.data);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const __getPostById = createAsyncThunk(
  "getPostById",
  async (payload, thunkAPI) => {
    try {
      const { id } = payload;
      const response = await axios.get(`/${id}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __updatePost = createAsyncThunk(
  "updatePost",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "deletePost",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`/${payload.id}`, {
        data: { ...payload },
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
