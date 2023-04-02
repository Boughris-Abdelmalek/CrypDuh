import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import CoinsListing from "./pages/Coins/CoinsListing";
import ExchangeRates from "./pages/Rates/ExchangeRates";
import Exchanges from "./pages/Exchanges/Exchanges";
import Global from "./pages/Global/Global";
import News from "./pages/News/News";
import Calculator from "./pages/Calculator/Calculator";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/coinsList" element={<CoinsListing />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/global" element={<Global />} />
            <Route path="/news" element={<News />} />
            <Route path="/exchangeRates" element={<ExchangeRates />} />
            <Route path="/calculator" element={<Calculator />} />
        </Routes>
    );
};

export default App;
