import React from 'react'
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/mini_robot.json";

const Intro02 = () => {
    return (
        <div className="font-Pretendard">
            {/* 색깔있는 박스 위치 */}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-4 md:col-span-4"  />
                <div className="col-span-8 w-[70px] h-[60px] md:w-[200px] md:h-[180px] ">    < MiniRobot/></div>
                
            </div>

            <div className="flex flex-row-reverse items-center ">
                <div className="w-64 md:w-auto">
                    <img src="https://i.ibb.co/dQ4mzLc/image.png" alt="intro3" className="h-auto pointer-events-none" />
                </div>
            </div>

            {/* 글자 크기에 따라 col 위치 변경 할것 */}
            <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl p-3">
                <div className="col-span-6" />
                <div className="col-span-6">

                    {/* 텍스트 밑줄 둥근 박스 */}
                    <p className="relative text-right p-4 sm:p-3 md:p-5">
                        <p className="relative z-10 text-4xl md:text-6xl font-bold ">Our Service <br/> Process that</p>
                        <div className="absolute w-[0px] md:w-[350px] h-[20px] bg-[#15c3a7] right-[0px] top-[5px] rounded-full md:block hidden "></div>
                        <p className="relative z-10 text-4xl md:text-6xl font-bold">we apply</p>
                    </p>
                </div>
            </div>
        </div>
    )
}
function MiniRobot() {
    return (
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 200, height: 200 }}
      />
    );
  }
  

export default Intro02