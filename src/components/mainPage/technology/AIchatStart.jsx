import React from 'react'
import Lottie from "react-lottie-player";
import lottieJson from "../../../lottie/eyeconhello.json";

const AIchatStart = ({ onButtonClick }) => {
    return (
        <div className="font-Pretendard h-[100%] col-span-12 md:col-span-7 p-3 flex flex-col items-center justify-center">
            {/* 이미지 */}
            <StartRobot className='max-w-full max-h-full' />

            {/* 대화 시작하기 버튼 */}
            <div className='w-[100%] grid grid-cols-12 p-3'>
                <div className="col-span-12 p-3" />
                <div className="col-span-3" />
                <div className="col-span-7 flex justify-center items-center p-3 rounded-lg bg-[#40c3ae] cursor-pointer "
                    onClick={onButtonClick}
                    // 맨위로 선언(로티로 인한 가려짐 방지)
                    style={{ zIndex: 999 }} >
                    <p className='text-white text-ml font-bold cursor-pointer '>챗봇과 시선분석 시작하기</p><img src="https://i.ibb.co/x84Y2BV/icon-Angle-Double-Right.png" className='ml-5 w-[15px] animate-pulse'/><img src="https://i.ibb.co/x84Y2BV/icon-Angle-Double-Right.png" className='w-[15px] animate-pulse'/>
                </div>
                <div className="col-span-2" />
            </div>
        </div>
    )
}

function StartRobot() {
    return (
        <Lottie
            className='translate3d-10-55-0 w-[60%]'
            loop
            animationData={lottieJson}
            speed={2.5} // 2배 빠르게 재생
            play
        />
    );
}

export default AIchatStart