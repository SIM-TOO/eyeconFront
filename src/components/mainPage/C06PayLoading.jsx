import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/check.json";

const PayLoading = ({ handleButtonClick }) => {
  useEffect(() => {
    const delay = 1500; // 1.5초 (애니메이션 1턴 시간 1.5초)

    const timeoutId = setTimeout(() => {
      handleButtonClick(3); // 이 부분에서 handleButtonClick(3)를 호출합니다.
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [handleButtonClick]);

  return (
    <div className="font-Pretendard flex flex-col justify-center items-center md:mt-0 mt-40">
      <div className="hidden md:block"><br /><br /><br /><br /></div>
      <Lottie
        loop
        animationData={lottieJson}
        play
        option={{ speed: 0.1 }}
        style={{ width: "100%", maxWidth: "400px" }}
        className="animate-pulse md:w-[100%] w-[50%]"
      />
      <p className="text-2xl md:text-4xl font-bold text-center dark:text-[#F2F2F2]">
        코인이 사용되었습니다.
      </p>
    </div>
  );
};

export default PayLoading;
