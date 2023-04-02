import axios from "axios";

const cryptoCoin = axios.create({
    baseURL: "https://api.coingecko.com/api/v3",
});

export default cryptoCoin;