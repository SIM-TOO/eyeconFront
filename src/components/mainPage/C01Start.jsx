import React from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";

const C01Start = ({ handleButtonClick }) => {
  return (
    <div className="font-Pretendard  flex flex-col justify-center items-center" style={{ width: '100%', height: '100%' }}>

      {/* 로봇 */}
      <div className="md:w-500 md:h-500 w-300 h-300">
        <Robot />
      </div>

      {/* 시작하기 버튼 */}
      <button
        className="dark:text-[#F2F2F2] dark:border-[#F2F2F2] rounded-[5px] font-bold text-3xl md:text-4xl font-bold text-[#190e61] border border-[#190e61] border-2 p-3 md:p-4"
        style={{ width: '60%', maxWidth: '350px' }}
        onClick={() => handleButtonClick(2)}
      >
        START
      </button>
    </div>
  )
}

function Robot() {
  return (
    <Lottie
      className='translate3d-15-0-0 md:translate3d-25-0-0 animate-wiggle'
      loop
      animationData={lottieJson}
      play
    />
  );
}

export default C01Start