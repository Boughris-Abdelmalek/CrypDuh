import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/users/userSlice";

const Layout = ({ children }) => {
    const user = useSelector(selectUser);
    const theme = useTheme();

    return (
        <Grid
            container
            minHeight="100vh"
            minWidth="15rem"
            width="100vw"
            spacing={0}
            sx={{
                display: "flex",
                [theme.breakpoints.up("sm")]: {
                    // custom breakpoint for medium screens and above
                    flexDirection: "row",
                },
                flexDirection: "column-reverse",
            }}
        >
                <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                    <SideBar />
                </Grid>
            <Grid item xs>
                <Grid container direction="column">
                    <Grid item>
                        <Header />
                    </Grid>
                    <Grid item>{children}</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Layout;
