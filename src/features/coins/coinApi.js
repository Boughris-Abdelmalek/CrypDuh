import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrends = createAsyncThunk(
    "trading/fetchData",
    async () => {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        return data.coins;
    }
);
