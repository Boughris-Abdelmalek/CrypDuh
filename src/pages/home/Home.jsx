import { useEffect } from "react";
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

const Home = () => {
    const user = useSelector(selectUser);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getData = async () => {
        try {
            const response = await fetch(
                "https://pro-api.coingecko.com/api/v3/search/trending"
            );
            const data = await response.json();

            return data;
        } catch (error) {
            throw new Error(error);
        };
    };

    console.log(getData());

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

    console.log(user);

    return (
        <Box>
            <Container
                sx={{
                    width: "calc(100vw - 300px)",
                    maxWidth: "40rem",
                    minWidth: "20rem",
                    backgroundColor: "red",
                    height: "10rem",
                    p: 2,
                }}
            >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    className={styles.container}
                >
                    <SwiperSlide className={styles.cards}>
                        <Card className={styles.card}>Slide 1</Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.cards}>
                        <Card className={styles.card}>Slide 2</Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.cards}>
                        <Card className={styles.card}>Slide 3</Card>
                    </SwiperSlide>
                    <SwiperSlide className={styles.cards}>
                        <Card className={styles.card}>Slide 4</Card>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Box>
    );
};

export default Home;
