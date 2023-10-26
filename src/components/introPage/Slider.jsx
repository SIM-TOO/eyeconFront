import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/ChatAni.json";

function IntroSlider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };



    function SlideAni() {
        return (
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: "100%", maxWidth: "700px" }}
            />
        );
    }

    return (
        <Swiper
            style={{ height: "700px" }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper mt-10"

        >

            <SwiperSlide><div className="bg-[#F8F8F8] w-full h-full">


                <div className=" mr-60 flex justify-end text-gray-800">
                    <img src="https://i.ibb.co/HxdDtYd/text-01.png" className="w-[50%]" /> <SlideAni /></div>
            </div> <Link
                className="absolute left-[20%] top-[74%] text-sm md:text-2xl text-center text-black px-[35px] py-[15px] rounded-[10px] border-2 border-[#999999] whitespace-nowrap z-10"
                to="/login"
              >
                Get started
              </Link></SwiperSlide>
        
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
 

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    );
}

export default IntroSlider;