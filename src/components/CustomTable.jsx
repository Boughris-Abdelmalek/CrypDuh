import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@emotion/react";

const CustomTable = ({ headers, rows }) => {
    const theme = useTheme();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell key={header.id}>
                                {header.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            {headers.map((header) => (
                                <TableCell
                                    key={`${row.id}-${header.id}`}
                                    align={header.align || "left"}
                                    sx={{
                                        ...(header.sx || {}),
                                        ...(header.hideOnMobile && {
                                            display: "none",
                                            [theme.breakpoint.up("sm")]: {
                                                display: "table-cell",
                                            },
                                        }),
                                    }}
                                >
                                    {header.render
                                        ? header.render(row[header.id])
                                        : row[header.id]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
