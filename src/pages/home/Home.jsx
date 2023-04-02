import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout, selectUser } from "../../features/users/userSlice";
import { onAuthStateChanged, auth } from "../../utils/firebase-config";
import { Card, Container, SvgIcon, Typography, Box } from "@mui/material";

import styles from "./Home.module.css";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
    selectTrends,
    selectMarketChart,
} from "../../features/coins/coinSlice";
import { fetchTrends, fetchMarketCharts } from "../../features/coins/coinApi";
import { useTheme } from "@emotion/react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import CoinChart from "../../components/CoinChart";

Chart.register(CategoryScale);

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { status, error, posts } = useSelector(selectTrends);
    const { marketChartStatus, marketChartError, marketChartPosts } =
        useSelector(selectMarketChart);
    const user = useSelector(selectUser);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const theme = useTheme();
    const [coinId, setCoinId] = useState("bitcoin");
    const [timeFrame, setTimeFrame] = useState(7);

    const fetchCoins = () => {
        dispatch(fetchTrends());
    };

    const handleTimeFrame = (day) => {
        setTimeFrame(day);
    };

    const handleAuthStateChange = () => {
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
    };

    useEffect(() => {
        fetchCoins();
    }, []);

    useEffect(() => {
        dispatch(fetchMarketCharts({coin: coinId, days: timeFrame}));
    }, [coinId, timeFrame]);

    useEffect(() => {
        handleAuthStateChange();
    }, []);

    return (
        <Box>
            <Container
                sx={{
                    width: "calc(100vw - 200px)",
                    maxWidth: "50rem",
                    minWidth: "20rem",
                    height: "max-content",
                    [theme.breakpoints.down("sm")]: {
                        width: "calc(100vw - 50px)",
                    },
                }}
            >
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevButtonRef.current,
                        nextEl: nextButtonRef.current,
                    }}
                    spaceBetween={10}
                    slidesPerView={1.5}
                    centeredSlides
                    className={styles.container}
                >
                    <Box className={styles.navigationButton__left}>
                        <SvgIcon
                            component={ArrowCircleLeftIcon}
                            ref={prevButtonRef}
                            sx={{ fontSize: 60 }}
                        />
                    </Box>
                    {posts.map((coin) => (
                        <SwiperSlide
                            key={coin.item.id}
                            className={styles.cards}
                            onClick={() => setCoinId(coin.item.id)}
                        >
                            <Card elevation={5} className={styles.card}>
                                <img
                                    src={coin.item.small}
                                    alt={coin.item.name}
                                />
                                <Box className={styles.sliderTrendsInfos}>
                                    <Typography variant="h5">
                                        {coin.item.name}
                                    </Typography>
                                    <Typography>
                                        {parseFloat(
                                            coin.item.price_btc
                                        ).toFixed(8)}{" "}
                                        BTC
                                    </Typography>
                                </Box>
                            </Card>
                        </SwiperSlide>
                    ))}
                    <Box className={styles.navigationButton__right}>
                        <SvgIcon
                            component={ArrowCircleRightIcon}
                            ref={nextButtonRef}
                            sx={{ fontSize: 60 }}
                        />
                    </Box>
                </Swiper>
                <CoinChart
                    chartData={marketChartPosts}
                    coinId={coinId}
                    handleTimeFrame={handleTimeFrame}
                    days={timeFrame}
                />
            </Container>
        </Box>
    );
};

export default Home;
