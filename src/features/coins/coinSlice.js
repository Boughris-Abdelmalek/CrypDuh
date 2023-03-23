import { createSlice } from "@reduxjs/toolkit";
import { fetchTrends } from "./coinApi";

const initialState = {
    posts: [],
    status: "idle",
    error: null,
};

const trendsSlice = createSlice({
    name: "trends",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrends.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTrends.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = action.payload;
            })
            .addCase(fetchTrends.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectTrends = (state) => state.trends;

export default trendsSlice.reducer;