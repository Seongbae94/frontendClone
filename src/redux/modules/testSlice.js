import { createSlice } from "@reduxjs/toolkit";
import {
  __addComment,
  __getCommentById,
  __getComments,
  __modifyComment,
  __removeComment,
} from "../../lib/commentApi";

const initialState = {
  comments: [],
  comment: {},
  isLoading: false, // 서버에서 todos를 가져오는 상태를 나타내는 값
  updateSuccess: false,
  deleteSuccess: false,
  error: null, // 서버와의 통신이 실패한 경우
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    initUpdateStatus: (state) => {
      state.updateSuccess = false;
      state.error = null;
    },
    initDeleteStatus: (state) => {
      state.deleteSuccess = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [__getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getCommentById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getCommentById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__getCommentById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...state.comments];
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__modifyComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__modifyComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = { ...state.comment, ...action.payload };
      state.updateSuccess = true;
    },
    [__modifyComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.updateSuccess = false;
    },
    [__removeComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__removeComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = null;
      state.deleteSuccess = true;
    },
    [__removeComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.deleteSuccess = false;
    },
  },
});

export const { initUpdateStatus, initDeleteStatus, clearError } =
  commentSlice.actions;

export default commentSlice;
