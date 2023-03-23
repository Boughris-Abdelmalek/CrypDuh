import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, logout, selectUser } from "../../features/users/userSlice";
import { onAuthStateChanged, auth } from "../../utils/firebase-config";

import { Box } from "@mui/system";
import { Card, Container, Typography } from "@mui/material";

import styles from "./Home.module.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components and CSS
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Image } from "@mui/icons-material";
import { selectTrends } from "../../features/coins/coinSlice";
import { fetchTrends } from "../../features/coins/coinApi";

const Home = () => {
    const user = useSelector(selectUser);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { status, error, posts } = useSelector(selectTrends);

    useEffect(() => {
        dispatch(fetchTrends())
    }, [dispatch])

    console.log(posts);

    useEffect(() => {
        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                    })
                );
            } else {
                dispatch(logout());
                navigate("/login");
            }
        });
    }, []);

    return (
        <Box>
            <Container
                sx={{
                    width: "calc(100vw - 300px)",
                    maxWidth: "50rem",
                    minWidth: "20rem",
                    height: "max-content",
                    outline: "1px solid red",
                }}
            >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    className={styles.container}
                >
                    {/* {trendings.map((coin) => (
                        <SwiperSlide key={coin.item.id} className={styles.cards}>
                            <Card elevation={5} className={styles.card}>
                                <img src={coin.item.thumb} alt={coin.item.name} />
                                <Typography variant="h5">{coin.item.name}</Typography>
                                <Typography>{coin.item.symbol}</Typography>
                            </Card>
                        </SwiperSlide>
                    ))} */}
                </Swiper>
            </Container>
        </Box>
    );
};

export default Home;
