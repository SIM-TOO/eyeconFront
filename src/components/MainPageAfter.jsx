//import React from 'react'
import React, { useState } from "react";
import HeaderAfter from "./HeaderAfter";

import Component0 from "./mainPage/C00Loading";
import Component1 from "./mainPage/C01Start";
import Component2 from "./mainPage/C02Pay";


import useMainLoading from "../hook/mainPage/useMainLoading";



const MainPageAfter = () => {

  const [currentComponent, setCurrentComponent] = useState(1);
  const { isLoading, startLoading, endLoading } = useMainLoading();

  // 페이지 이동시 로딩 페이지
  const handleButtonClick = (componentNumber) => {
    startLoading();
    setTimeout(() => {
      endLoading();
      setCurrentComponent(componentNumber);
    }, 1000); // 로딩 시간
  };

  return (
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
          className="w-[70%] h-[90%] rounded-2xl flex flex-col justify-center items-center"
          style={{
            background:
              "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)",
            boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)",
          }}
        >

          {isLoading && <Component0 />}
          {!isLoading && currentComponent === 1 && (
            <Component1 handleButtonClick={handleButtonClick} />
          )}
          {!isLoading && currentComponent === 2 && (
            <Component2 handleButtonClick={handleButtonClick} />
          )}


        </div>
      </div>
    </div>
  )
}

export default MainPageAfter