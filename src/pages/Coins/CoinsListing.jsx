import { useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useDispatch, useSelector } from "react-redux";
import { selectCoinsList } from "../../features/coins/coinSlice";
import { fetchCoinsList } from "../../features/coins/coinApi";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

function createData(
    symbol,
    current_price,
    price_change_24h,
    price_change_percentage_24h
) {
    return {
        symbol,
        current_price,
        price_change_24h,
        price_change_percentage_24h,
    };
}

export default function CoinsListing() {
    const theme = useTheme();

    const dispatch = useDispatch();

    const { coinsListStatus, coinsListPosts, coinsListError } =
        useSelector(selectCoinsList);

    useEffect(() => {
        dispatch(fetchCoinsList());
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 280 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Symbol</TableCell>
                        <TableCell align="right">Last</TableCell>
                        <TableCell align="right">Chg</TableCell>
                        <TableCell align="right">Chg%</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {coinsListPosts.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell
                                component="th"
                                scope="row"
                                sx={{
                                    display: "flex",
                                    gap: "2rem",
                                    [theme.breakpoints.down("sm")]: {
                                        flexDirection: "column",
                                        gap: 0,
                                        padding: .5
                                    },
                                }}
                            >
                                <img
                                    src={row.image}
                                    alt={row.symbol}
                                    width="25px"
                                />
                                <Typography>{row.symbol}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                {row.current_price}
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{
                                    color:
                                        row.price_change_24h < 0
                                            ? "red"
                                            : "green",
                                }}
                            >
                                {row.price_change_24h.toFixed(5)}
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{
                                    color:
                                        row.price_change_percentage_24h < 0
                                            ? "red"
                                            : "green",
                                }}
                            >
                                {row.price_change_percentage_24h.toFixed(2)}%
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
