import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import trendsReducer from "../features/coins/coinSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        trends: trendsReducer,
    },
});
