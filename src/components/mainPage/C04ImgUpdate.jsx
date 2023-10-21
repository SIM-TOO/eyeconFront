import React from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";
import ImgDrop from "./technology/ImgDrop";
const C04ImgUpdate = ({ handleButtonClick }) => {
  return (
    <div className='container mx-auto grid grid-cols-12 p-3  gap-4 max-w-screen-xl md:h-[100%]'>

      {/* 여백용박스 */}
      <div className="col-span-12 h-[0%]" />
      {/* 로봇 */}
      <div className="col-span-5  h-[40%]">
        <div className=" w-300 h-300">
          <Robot />
        </div>
      </div>
      <div className="col-span-7 grid grid-cols-12 h-[40%]">
        <div className="col-span-6">
          여기에 이미지가 필요해!
        </div>
        <div className="col-span-6">
          업로드 이미지 형식<br/>
          매대가 잘 보이는 이미지<br/>
          여백이 없는 이미지
        </div>
        <div className="col-span-12 h-[70%]">
          <ImgDrop></ImgDrop>
        </div>
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