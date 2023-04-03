import { createSlice } from "@reduxjs/toolkit";
import { fetchTrends, fetchMarketCharts, fetchCoinsList } from "./coinApi";

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

const coinsListSlice = createSlice({
    name: "coinsList",
    initialState: {
        coinsListPosts: [],
        coinsListStatus: "idle",
        coinsListError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoinsList.pending, (state) => {
                state.coinsListStatus = "loading";
            })
            .addCase(fetchCoinsList.fulfilled, (state, action) => {
                state.coinsListStatus = "succeeded";
                state.coinsListPosts = action.payload;
            })
            .addCase(fetchCoinsList.rejected, (state, action) => {
                state.coinsListStatus = "failed";
                state.coinsListError = action.error.message;
            });
    },
});

const exchangesSlice = createSlice({
    name: "exchanges",
    initialState: {
        exchangesPosts: [],
        exchangesStatus: "idle",
        exchangesError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoinsList.pending, (state) => {
                state.exchangesStatus = "loading";
            })
            .addCase(fetchCoinsList.fulfilled, (state, action) => {
                state.exchangesStatus = "succeeded";
                state.exchangesPosts = action.payload;
            })
            .addCase(fetchCoinsList.rejected, (state, action) => {
                state.exchangesStatus = "failed";
                state.exchangesError = action.error.message;
            });
    },
});

export const selectTrends = (state) => state.trends;
export const selectMarketChart = (state) => state.marketCharts;
export const selectCoinsList = (state) => state.coinsList;
export const selectExchanges = (state) => state.exchanges;

export default {
    trends: trendsSlice.reducer,
    marketCharts: marketChartSlice.reducer,
    coinsList: coinsListSlice.reducer,
    exchanges: exchangesSlice.reducer,
};
