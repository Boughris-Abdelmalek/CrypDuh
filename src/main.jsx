import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Layout from "./layout/Layout";
import ThemeProviderWrapper from "./utils/ThemeProviderWrapper";
import { BrowserRouter } from "react-router-dom";
import { store } from "./utils/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProviderWrapper>
                <BrowserRouter>
                    <Layout>
                        <App />
                    </Layout>
                </BrowserRouter>
            </ThemeProviderWrapper>
        </Provider>
    </React.StrictMode>
);
