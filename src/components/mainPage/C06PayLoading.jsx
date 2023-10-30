import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/check.json";



const PayLoading = ({ handleButtonClick }) => {
  return (
    <div className="font-Pretendard flex flex-col justify-center items-center">
      <div className="hidden md:block"><br/><br/><br/><br/><br/></div>
      <Lottie
        loop
        animationData={lottieJson}
        play
        option={{ speed: 0.1 }}
        style={{ width: "100%", maxWidth: "400px" }}
        className="animate-pulse"
      />
      <p className="text-4xl md:text-4xl font-bold text-center">
        코인이 사용되었습니다.
      </p>


      {/* AI chat으로 이동 */}
      <button
        className="text-sm md:text-xl text-center text-white px-[25px] py-[15px] rounded-[10px] bg-[#15c3a7] whitespace-nowrap mt-10 animate-bounce2"
        onClick={() => handleButtonClick(3)}
      >
        서비스 계속하기
      </button>
    </div>
  );
};

export default PayLoading;
