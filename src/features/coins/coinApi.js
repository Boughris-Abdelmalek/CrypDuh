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
        const response = await cryptoCoin.get(
            `/coins/${coin}/market_chart?vs_currency=usd&days=${days}`
        );
        return response.data;
    }
);

export const fetchCoinsList = createAsyncThunk(
    "fetchData/coinsList",
    async () => {
        const response = await cryptoCoin.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en`
        );
        return response.data;
    }
);
