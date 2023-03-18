import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
    return (
        <Grid container height="100vh" minWidth="15rem">
            <Grid item sx={{ display: "flex", justifyContent: "center"}}>
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
