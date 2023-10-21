import React from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";

const C04ImgUpdate = ({ handleButtonClick }) => {
  return (
    <div className='container mx-auto grid grid-cols-12 p-3  gap-4 max-w-screen-xl md:h-[100%]'>

      {/* 로봇 */}
      <div className="col-span-6 md:w-500 md:h-500 w-300 h-300">
        <Robot />
      </div>


      {/* 임시버튼 */}
      <button
        className="col-span-12"
        onClick={() => handleButtonClick(5)}
      >
        결과 페이지 이동 버튼 (임시버튼임 나중에 삭제 할 예정)
      </button>
      {/* 임시버튼 */}
    </div>
  )
}

function Robot() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  );
}


export default C04ImgUpdate