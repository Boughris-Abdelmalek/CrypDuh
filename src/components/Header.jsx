import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import React, { useContext, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../App.jsx";
import { useTheme } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "5vw",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: "1rem",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        backgroundColor: "rgb(0 0 0 / .125)",
        borderRadius: "5vw",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function Header() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const [anchorElUser, setAnchorElUser] = useState(null);

    const settings = ["Profile", "Dashboard", "Logout"];

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="transparent" sx={{ boxShadow: "0" }}>
            <Toolbar>
                <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                    CrypDuh!
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/2.jpg"
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "60px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={handleCloseUserMenu}
                            >
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                        <MenuItem onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode} mode
                            <IconButton
                                sx={{ ml: 1 }}
                                color="inherit"
                            >
                                {theme.palette.mode === "dark" ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
