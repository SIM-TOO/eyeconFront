import React from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";

const C03AIChat = ({ handleButtonClick }) => {
  return (
    <div className='text-center items-center justify-center container mx-auto grid grid-cols-12 p-3  gap-4 max-w-screen-xl h-[100%]'>


      {/* 로봇 */}
      <div className="col-span-5">
        <Robot />
      </div>
      <div className="h-[80%] col-span-7 grid grid-cols-12 flex items-center justify-center">
        내용

      </div>










      {/* 임시버튼 */}
      <button
        className="col-span-12"
        onClick={() => handleButtonClick(4)}
      >
        이미지 업로드 페이지 이동 버튼 (임시버튼임 나중에 삭제 할 예정)
      </button>
      {/* 임시버튼 */}
    </div>

  )
}

function Robot() {
  return (
    <Lottie
      className='translate3d-10-55-0'
      loop
      animationData={lottieJson}
      play
    />
  );
}

export default C03AIChat