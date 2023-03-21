import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, logout, selectUser } from "../../features/users/userSlice";
import { onAuthStateChanged, auth } from "../../utils/firebase-config";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";

import styles from "./Home.module.css";

const Home = () => {
    const user = useSelector(selectUser);

    const navigate = useNavigate();

    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

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
        <div>
            Welcome {user && user.displayName}
            <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={500}
                  loop={true}
                  touchRatio={1.5}
                  navigation={true}
                  effect={"flip"}
                  pagination={{ clickable: true }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list.imgDetailPathA}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list.imgDetailPathB}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list.imgDetailPathC}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
