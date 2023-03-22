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
            width="100%"
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
                    <Grid
                        item
                        sx={{ flex: "1 1 auto", overflowY: "scroll", height: "calc(100vh - 72px)",[theme.breakpoints.down("sm")]: {
                            height: "calc(100vh - 128px)",
                        }, }}
                    >
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Layout;
