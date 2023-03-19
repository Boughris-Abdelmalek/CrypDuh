import { Grid } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useTheme } from "@emotion/react";

const Layout = ({ children }) => {
    const theme = useTheme()

    return (
        <Grid container height="100vh" minWidth="15rem" spacing={0} sx={{
            display: "flex",
            [theme.breakpoints.up("sm")]: {
              // custom breakpoint for medium screens and above
              flexDirection: "row",
            },
            flexDirection: "column-reverse",
          }}>
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
