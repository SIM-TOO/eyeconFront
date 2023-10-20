//import React from 'react';
import React, { useState, useEffect } from "react";
import HeaderAfter from "./HeaderAfter";
import Component1 from "./testPage/Component1";
import Component2 from "./testPage/Component2";
import Component3 from "./testPage/Component3";
import LoadingComponent01 from "./testPage/LoadingComponent01";

function MainPageAfterTest() {
    const [currentComponent, setCurrentComponent] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleButtonClick = (componentNumber) => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setCurrentComponent(componentNumber);
        }, 500);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0); // 로딩 애니메이션 시간
        return () => clearTimeout(timer);
    }, []);


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
                    className="w-[70%] h-[90%] rounded-2xl flex flex-col justify-center items-center"
                    style={{
                        background:
                            "linear-gradient(179.97deg, #fff 0.05%, rgba(255,255,255,0) 99.98%)",
                        boxShadow: "0px 4px 30px 0 rgba(190,190,190,0.47)",
                    }}
                >
                    {isLoading && <LoadingComponent01 />}
                    {!isLoading && currentComponent === 1 && (
                        <Component1 handleButtonClick={handleButtonClick} />
                    )}
                    {!isLoading && currentComponent === 2 && (
                        <Component2 handleButtonClick={handleButtonClick} />
                    )}
                    {!isLoading && currentComponent === 3 && (
                        <Component3 handleButtonClick={handleButtonClick} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainPageAfterTest;
