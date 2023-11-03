import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../lottie/miniRobot.json';

const Intro02 = () => {
    return (
        <div className="font-Pretendard dark:bg-gray-800">
            {/* 색깔있는 박스 위치 */}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-5 md:col-span-4" />

                {/* 움직이는 로봇 */}
             {/*    <div className="col-span-7 w-[70px] h-[60px] md:w-[200px] md:h-[180px] ">
                    < MiniRobot />
                </div> */}
            </div>


            {/* hover하면 커지는 박스 4개 */}
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-1 border-gray-300 px-4 py-8 rounded-lg transform transition duration-500 hover:bg-gray-100 hover:scale-110 ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">시선 분석 히트맵</h2>
                                <p className="leading-relaxed">Downloads</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-1 border-gray-300 px-4 py-8 rounded-lg transform transition duration-500 hover:bg-gray-100 hover:scale-110">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">마케팅 솔루션</h2>
                                <p className="leading-relaxed">Users</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-1 border-gray-300 px-4 py-8 rounded-lg transform transition duration-500 hover:bg-gray-100 hover:scale-110">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">이미지 다운로드</h2>
                                <p className="leading-relaxed">Files</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-1 border-gray-300 px-4 py-8 rounded-lg transform transition duration-500 hover:bg-gray-100 hover:scale-110">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">상권 분석 데이터</h2>
                                <p className="leading-relaxed">Places</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="flex flex-row-reverse items-center">
                <div className="w-64 md:w-auto">
                    <img
                        src="https://i.ibb.co/dQ4mzLc/image.png"
                        alt="intro3"
                        className="h-auto pointer-events-none"
                    />
                </div>
            </div>

            <div className="dark:text-[#F2F2F2] container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
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


// 메인화면 내 움직이는 미니 로봇
function MiniRobot() {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
            option={{ speed: 0.3 }}
            style={{ width: '100%', maxWidth: '200px' }}
        />
    );
}

export default Intro02;
