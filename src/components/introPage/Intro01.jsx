import React from "react";
import { Link } from "react-router-dom";

const Intro01 = () => {
  return (
    <div className="mt-40">
      <div className="font-Pretendard ">
        <div className="w-64 md:w-auto">
          <img
            src="https://i.ibb.co/0YBkn3z/service.png"
            alt="intro1"
            className="h-auto pointer-events-none"
          />
        </div>

        <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl">
          <div className="col-span-12 md:col-span-6">
            {/* 첫번째 줄 내용 겹치는 박스 */}
            <div className="box md:absolute md:top-40 relative p-6 sm:p-3 md:p-5 mt-0 sm:mt-20">
              <span className="text-4xl md:text-6xl font-bold">
                WELCOME TO <br />
                EYECON
              </span>
              <span className="relative">
                <p className="relative z-10 text-4xl md:text-6xl font-bold">
                  {" "}
                  with AI CHATBOT
                </p>
                <div className="absolute w-[50px] md:w-[500px] h-[20px] bg-[#15c3a7] top-[66px] rounded-full md:block hidden"></div>
              </span>
            </div>

            {/* 두번째 줄 내용 겹치는 박스 */}
            <div className="py-5 md:py-40 p-6 sm:p-3 text-base sm:text-lg">
              시선 분석 AI를 통해 매대를 정밀하게 분석하고, <br /> 소비자의
              시선을 예측해보세요. <br /> 소비자의 시선이 향하는 곳에 매출이
              있습니다. <br /> Where the eyes go, sales are there <br />
              우리는 챗봇을 통해 사용자들과 소통합니다 <br />
              매장 운영에 필요한 정보를 분석하고, <br />
              상권, 성별, 연령을 바탕으로 <br />
              챗봇과 최적의 정보를 파
              우리는 챗봇 AI를 통해 더욱 정확해지고, 빨라졌습니다.
            </div>

            {/* 버튼 만드는 자리 */}
            <div className="container mx-auto grid grid-cols-12">
              <div className="col-span-4 md:col-span-8  whitespace-nowrap"></div>
              <Link to="/login">
                <button className="col-span-6 md:col-span-4 text-sm md:text-2xl text-center text-white px-[35px] py-[15px] rounded-[10px] bg-[#15c3a7] whitespace-nowrap z-10">
                  Get started
                </button>
              </Link>
            </div>
          </div>
          {/* 모바일이 사라짐 */}
          <div className="col-span-6 md:block hidden">
            <img
              src="https://i.ibb.co/CBj6Kn6/Group-624891.png"
              alt="intro2"
              className="h-auto pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro01;
