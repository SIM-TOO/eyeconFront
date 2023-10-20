import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/miniRobot.json';

const Intro02 = () => {
    return (
        <div className="font-Pretendard">
            {/* 색깔있는 박스 위치 */}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-5 md:col-span-4" />
                <div className="col-span-7 w-[70px] h-[60px] md:w-[200px] md:h-[180px] ">    < MiniRobot /></div>

            </div>

            <div className="flex flex-row-reverse items-center">
                <div className="w-64 md:w-auto">
                    <img
                        src="https://i.ibb.co/dQ4mzLc/image.png"
                        alt="intro3"
                        className="h-auto pointer-events-none"
                    />
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-6" />
                <div className="col-span-6">
                    <span className="relative text-right p-4 sm:p-3 md:p-5">
                        <p className="relative z-10 text-4xl md:text-6xl font-bold">
                            Our Service <br /> Process that
                        </p>
                        <div className="absolute w-[0px] sm:w-[100px] md:w-[350px] h-[20px] bg-[#15c3a7] left-[280px] top-[80px] rounded-full md:block hidden"></div>
                        <p className="relative z-10 text-4xl md:text-6xl font-bold">we apply</p>
                    </span>
                </div>
            </div>
        </div>
    );
};


{/* 메인화면 내 움직이는 미니 로봇 */ }
function MiniRobot() {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: '100%', maxWidth: '200px' }}
        />
    );
}

export default Intro02;
