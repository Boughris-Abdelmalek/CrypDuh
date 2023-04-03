import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectExchanges } from "../../features/coins/coinSlice";
import { fetchExchanges } from "../../features/coins/coinApi";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function CoinsListing() {
    const dispatch = useDispatch();
    const theme = useTheme();
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
        trade_volume_24h_btc: exchange.trade_volume_24h_btc,
    }));

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Trade 24h BTC</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exchangesPosts.map((row) => (
                        <TableRow key={row.id} sx={{ height: "fit-content" }}>
                            <TableCell
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    gap: 1,
                                    height: "5rem",
                                    [theme.breakpoints.down("sm")]: {
                                        flexDirection: "column",
                                    },
                                }}
                            >
                                <img
                                    src={row.image}
                                    alt={row.id}
                                    width="25px"
                                    height="25px"
                                />
                                <Typography
                                    sx={{
                                        [theme.breakpoints.down("sm")]: {
                                            display: "none",
                                        },
                                    }}
                                >
                                    {row.name}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                {row.year_established}
                            </TableCell>
                            <TableCell align="right">{row.country}</TableCell>
                            <TableCell align="right">
                                {row.trade_volume_24h_btc.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
