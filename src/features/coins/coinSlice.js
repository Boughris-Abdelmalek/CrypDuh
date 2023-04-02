import { createSlice } from "@reduxjs/toolkit";
import { fetchTrends, fetchMarketCharts } from "./coinApi";

const trendsSlice = createSlice({
    name: "trends",
    initialState: {
        posts: [],
        status: "idle",
        error: null,
    },
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

const marketChartSlice = createSlice({
    name: "marketCharts",
    initialState: {
        marketChartPosts: [],
        marketChartStatus: "idle",
        marketChartError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMarketCharts.pending, (state) => {
                state.marketChartStatus = "loading";
            })
            .addCase(fetchMarketCharts.fulfilled, (state, action) => {
                state.marketChartStatus = "succeeded";
                state.marketChartPosts = action.payload;
            })
            .addCase(fetchMarketCharts.rejected, (state, action) => {
                state.marketChartStatus = "failed";
                state.marketChartError = action.error.message;
            });
    },
});

export const selectTrends = (state) => state.trends;
export const selectMarketChart = (state) => state.marketCharts;

export default {
    trends: trendsSlice.reducer,
    marketCharts: marketChartSlice.reducer,
};
