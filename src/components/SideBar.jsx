import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";

const SideBar = () => {
    return (
        <AppBar color="transparent" position="static" height="100%">
            <Container height="100%">
                <Toolbar disableGutters>SideBar</Toolbar>
            </Container>
        </AppBar>
    );
};

export default SideBar;
