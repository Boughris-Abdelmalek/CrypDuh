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
import {
    Home as HomeIcon,
    Settings as SettingsIcon,
} from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import ArticleIcon from '@mui/icons-material/Article';
import { useTheme } from "@mui/material";

const SideBar = () => {
    const theme = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { icon: <CurrencyBitcoinIcon color="secondary" />, name: "Coins" },
        { icon: <CurrencyExchangeIcon color="secondary" />, name: "Exchange" },
        { icon: <AccountBalanceIcon color="secondary" />, name: "Exchange Rates" },
        { icon: <CalculateIcon color="secondary" />, name: "Calculator" },
        { icon: <ArticleIcon color="secondary" />, name: "News" },
        { icon: <PublicIcon color="secondary" />, name: "Global" },
    ];

    return (
        <AppBar color="primary" position="static">
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
                                    <ArrowBackIosIcon color="secondary" />
                                ) : (
                                    <ArrowForwardIosIcon color="secondary" />
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
