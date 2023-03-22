import { useState } from "react";
import {
    AppBar,
    Toolbar,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Container } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CalculateIcon from "@mui/icons-material/Calculate";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PublicIcon from "@mui/icons-material/Public";
import ArticleIcon from "@mui/icons-material/Article";
import { useTheme } from "@mui/material";

const SideBar = () => {
    const theme = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { icon: <CurrencyBitcoinIcon />, name: "Coins" },
        { icon: <CurrencyExchangeIcon />, name: "Exchange" },
        { icon: <AccountBalanceIcon />, name: "Exchange Rates" },
        { icon: <CalculateIcon />, name: "Calculator" },
        { icon: <ArticleIcon />, name: "News" },
        { icon: <PublicIcon />, name: "Global" },
    ];

    return (
        <AppBar
            color="primary"
            sx={{
                width: "100%",
                height: "3.5rem",
                position: "sticky",
                bottom: 0,
                [theme.breakpoints.up("sm")]: {
                    left: 0,
                    minHeight: "100vh",
                },
            }}
        >
            <Container
                sx={{
                    [theme.breakpoints.up("sm")]: {
                        width: "100%",
                    },
                    height: "100%",
                    width: "100%",
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        width: "100%",
                        [theme.breakpoints.down("sm")]: {
                            height: "2rem",
                        },
                    }}
                >
                    <List
                        sx={{
                            display: "flex",
                            [theme.breakpoints.down("sm")]: {
                                flexDirection: "row",
                                width: "100%",
                                p: "0",
                            },
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "100%",
                            width: isOpen ? "8rem" : "2rem",
                            transition: "width 0.25s ease-in-out",
                        }}
                    >
                        <List
                            sx={{
                                height: "100%",
                                [theme.breakpoints.down("sm")]: {
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    width: "100%",
                                    flexDirection: "row",
                                },
                            }}
                        >
                            {navItems.map(({ icon, name }) => (
                                <ListItemButton
                                    key={name}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        my: "2.5rem",
                                        width: isOpen ? "100%" : "3.5rem",
                                        [theme.breakpoints.down("sm")]: {
                                            m: "auto",
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={isOpen ? name : ""}
                                        sx={{
                                            transition:
                                                "opacity 0.5s ease-in-out",
                                            opacity: isOpen ? 1 : 0,
                                            height: isOpen ? "auto" : "0px",
                                            overflow: "hidden",
                                            [theme.breakpoints.down("sm")]: {
                                                display: "none",
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                        <ListItemButton
                            onClick={() => setIsOpen(!isOpen)}
                            sx={{
                                marginBlock: "5rem",
                                width: isOpen ? "100%" : "3.5rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("sm")]: {
                                    display: "none",
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {isOpen ? (
                                    <ArrowBackIosIcon color="text" />
                                ) : (
                                    <ArrowForwardIosIcon color="text" />
                                )}
                            </ListItemIcon>
                        </ListItemButton>
                    </List>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default SideBar;
