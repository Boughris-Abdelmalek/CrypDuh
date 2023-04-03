import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import coinsReducer from "../features/coins/coinSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        trends: coinsReducer.trends,
        marketCharts: coinsReducer.marketCharts,
        coinsList: coinsReducer.coinsList,
        exchanges: coinsReducer.exchanges,
    },
});
