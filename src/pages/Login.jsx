import { useState } from "react";
import { Paper, Button, TextField, Typography, Link } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { login } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isMember, setIsMember] = useState(false);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const theme = useTheme();

    const dispatch = useDispatch();

    const navigation = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userAuth = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            dispatch(
                login({
                    email: userAuth.user.email,
                    displayName: userAuth.user.displayName,
                    uid: userAuth.user.uid,
                })
            );
            navigation("/");
        } catch (error) {
            alert(error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const userAuth = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(userAuth.user, {
                displayName: userName,
            });
            dispatch(
                login({
                    email: userAuth.user.email,
                    displayName: userName,
                    uid: userAuth.user.uid,
                })
            );
            navigation("/");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "calc(100vh - 175px)",
            }}
        >
            <Paper
                sx={{
                    p: "0 3rem 0 2rem",
                    height: isMember ? "30rem" : "25rem",
                    width: "25rem",
                    [theme.breakpoints.down("sm")]: {
                        width: "20rem",
                    },
                }}
                elevation={1}
            >
                <Stack
                    component="form"
                    onSubmit={isMember ? handleRegister : handleLogin}
                    sx={{
                        "& .MuiTextField-root": { ml: 2, width: "100%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "3rem",
                        height: "100%",
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "max-content",
                        }}
                    >
                        <Button sx={{ color: theme.palette.text.primary }}>
                            <ArrowBackIos />
                        </Button>
                        <Typography
                            sx={{
                                mx: 2,
                                fontSize: "h5",
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "h6",
                                    fontWeight: "h6",
                                },
                            }}
                        >
                            {isMember ? "Sign up" : "Sign in"} with email
                        </Typography>
                    </Box>
                    {isMember && (
                        <TextField
                            label="UserName"
                            type="text"
                            variant="standard"
                            color="secondary"
                            InputLabelProps={{
                                style: {
                                    color: theme.palette.text.primary,
                                },
                            }}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    )}
                    <TextField
                        label="Email"
                        type="email"
                        variant="standard"
                        color="secondary"
                        InputLabelProps={{
                            style: {
                                color: theme.palette.text.primary,
                            },
                        }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        color="secondary"
                        InputLabelProps={{
                            style: {
                                color: theme.palette.text.primary,
                            },
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Box textAlign="center" width="100%">
                        <Button
                            variant="contained"
                            type="submit"
                            color="secondary"
                            text="secondary"
                            sx={{ width: "100%", ml: 1 }}
                        >
                            <Typography color="primary" variant="p">
                                {isMember ? "Create account" : "Sign in"}
                            </Typography>
                        </Button>
                    </Box>
                </Stack>
            </Paper>
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    width: "100%",
                    textAlign: "center",
                    p: 2.5,
                }}
                elevation={3}
            >
                <Typography
                    sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                >
                    {isMember
                        ? "Already have an account?"
                        : "Don't have an account?"}
                    <Link
                        color="secondary"
                        sx={{
                            cursor: "pointer",
                            userSelect: "none",
                            "&:hover": {
                                filter: "brightness(75%)",
                            },
                        }}
                        onClick={() => setIsMember(!isMember)}
                    >
                        {isMember ? "Sign in" : "Sign up"}
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;
