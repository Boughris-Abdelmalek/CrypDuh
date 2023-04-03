import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectExchanges } from "../../features/coins/coinSlice";
import { fetchExchanges } from "../../features/coins/coinApi";

import CustomTable from "../../components/CustomTable";

export default function ExchangeRates() {
    const dispatch = useDispatch();
    const { exchangesStatus, exchangesPosts, exchangesError } =
        useSelector(selectExchanges);

    useEffect(() => {
        dispatch(fetchExchanges());
    }, []);

    const headers = [
        { id: "name", label: "Name" },
        { id: "year_established", label: "Year" },
        { id: "country", label: "Country" },
        { id: "trade_volume_24h_btc", label: "Trade 24h BTC" },
    ];

    const rows = exchangesPosts.map((exchange) => ({
        id: exchange.id,
        name: exchange.name,
        year_established: exchange.year_established,
        country: exchange.country,
        trade_volume_24h_btc: exchange.trade_volume_24h_btc.toFixed(2),
    }));

    console.log(rows);

    return (
        <CustomTable headers={headers} rows={rows} />
    );
}
