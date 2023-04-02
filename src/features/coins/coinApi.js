import { createAsyncThunk } from "@reduxjs/toolkit";
import cryptoCoin from "../../utils/axios";

// maybe using cache bc of the restrictions on the api calls

export const fetchTrends = createAsyncThunk("fetchData/trending", async () => {
    const response = await cryptoCoin.get("/search/trending");
    return response.data.coins;
});

export const fetchMarketCharts = createAsyncThunk(
    "fetchData/marketChart",
    async ({ coin = "bitcoin", days = 7 }) => {
        const response = await cryptoCoin.get(`/coins/${coin}/market_chart?vs_currency=usd&days=${days}`);
        return response.data;
    }
);
