import React from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";
import ImgDrop from "./technology/ImgDrop";
const C04ImgUpdate = ({ handleButtonClick }) => {
  return (
    <div className='text-center items-center justify-center container mx-auto grid grid-cols-12 p-3  gap-4 max-w-screen-xl h-[100%]'>


      {/* 로봇 */}
      <div className="col-span-5">
        <Robot />
      </div>  
      <div className="h-[80%] col-span-7 grid grid-cols-12 flex items-center justify-center">
        <div className="col-span-6">
          여기에 이미지가 필요해!
        </div>
        <div className="col-span-6 ">
          업로드 이미지 형식<br />
          매대가 잘 보이는 이미지<br />
          여백이 없는 이미지
        </div>
        <ImgDrop></ImgDrop>
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
    className='translate3d-10-55-0'
      loop
      animationData={lottieJson}
      play
    />
  );
}


export default C04ImgUpdate