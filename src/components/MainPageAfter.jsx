import React from "react";
import HeaderAfter from "./HeaderAfter";
import Component1 from "./mainPage/C01Start";
import Component2 from "./mainPage/C02Pay";
import Component3 from "./mainPage/C03AIChat";
import Component4 from "./mainPage/C04ImgUpdate";
import Component5 from "./mainPage/C05Result";
import Component6 from "./mainPage/C06PayLoading";
import LoadingComponent from "./mainPage/C00Loading";
import useLoadingDelayHandler from "../hook/mainPage/useMainLoading";

function MainPageAfter() {
  const initialDelay = 1600; // 처음 로딩 시 딜레이
  const buttonDelay = 1200; // 버튼 클릭 시 딜레이
  const [isLoading, currentComponent, handleButtonClick] =
    useLoadingDelayHandler(initialDelay, buttonDelay);

  return (
    // 배경화면 설정
    <div
      className="h-screen"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* 헤더 */}
      <HeaderAfter />

      {/* 내부박스 */}
      <div
        className="flex flex-col items-center"
        style={{ height: "calc(100vh - 120px)" }}
      >
        <div
          className="w-[70%] h-[90%] rounded-2xl"
          style={{
            background:
              "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)",
            boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)",
          }}
        >


           {/* 6번 컴포넌트로 이동 시에만 기존 로딩 안뜨게 */}
          {isLoading && <LoadingComponent />}
          {!isLoading && currentComponent === 1 && (
            <Component1 handleButtonClick={handleButtonClick} />
          )}
          {!isLoading && currentComponent === 2 && (
            <Component2 handleButtonClick={handleButtonClick} />
          )}
          {!isLoading && currentComponent === 3 && (
            <Component3 handleButtonClick={handleButtonClick} />
          )}
          {!isLoading && currentComponent === 4 && (
            <Component4 handleButtonClick={handleButtonClick} />
          )}
          {!isLoading && currentComponent === 5 && (
            <Component5 handleButtonClick={handleButtonClick} />
          )}
          {!isLoading && currentComponent === 6 && (
            <Component6 handleButtonClick={handleButtonClick} />
          )}

        </div>
      </div>
    </div>
  );
}

export default MainPageAfter;
