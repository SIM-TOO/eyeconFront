import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/mainAnimation.json";

const Intro01 = () => {



  return (
    <div className="dark:bg-gray-800 dark:text-[#F2F2F2]">

      <div className="font-Pretendard ">
        <div className="container mx-auto grid grid-cols-12 gap-4 max-w-screen-xl font-Pretendard ">

          <div className="col-span-12 md:col-span-6 ">
            {/* 첫번째 줄 내용 겹치는 박스 */}
            <div className="box md:absolute md:top-40 relative p-6 sm:p-3 md:p-5 mt-20 sm:mt-100 ">

            </div>

            {/* 움직이는 글자 애니메이션 */}

            <div className="md:mt-20 md:p-0 p-5 font-extrabold text-3xl md:text-5xl [text-wrap:balance] bg-clip-text text-gray-500 bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">Trusted by the most innovative minds in
            <span className="text-blue-300 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
                <li>Eye-tracking</li>
                <li>chatGPT</li>
                <li>Placement</li>
                <li>Plan-O-Gram</li>
                <li>Commerce</li>
                <li aria-hidden="true">Finance</li>
              </ul>
            </span></div>

            <div className="col-span-6 block md:hidden">
              <Animation />

            </div>

            {/* 두번째 줄 내용 겹치는 박스 */}
            <div className="py-5 dark:text-gray-400 text-gray-600 p-6 sm:p-3 text-base sm:text-lg  ">
              <p className="md:text-xl font-semibold mb-2"> WHERE THE EYES GO, SALES ARE THERE</p>
              시선 분석 AI를 통해 매대를 정밀하게 분석하고<br />
              소비자의 시선을 예측해보세요. <br />소비자의 시선이 향하는 곳에 매출이
              있습니다.<br />
              우리는 챗봇을 통해 사용자들과 소통합니다 <br />
              매장 운영에 필요한 정보를 분석하고, <br />
              <p className="md:block hidden">상권, 성별, 연령을 바탕으로
                최적의 정보를 제공합니다.</p>
              <p className="block md:hidden">상권, 성별, 연령을 바탕으로<br />
                최적의 정보를 제공합니다.</p><br />
              우리는 챗봇 AI를 통해 더욱 정확해지고 <br />
              보다 나은 고객 만족 서비스를 제공합니다.
            </div>


            {/* 버튼 만드는 자리 */}
            <div className="container mx-auto grid grid-cols-12 ">
              <div className="col-span-3 md:col-span-6  whitespace-nowrap"></div>

              <Link
                className="hover:bg-blue-500 col-span-6 md:col-span-4 text-sm md:text-2xl text-center text-white px-[35px] py-[15px] rounded-[10px] bg-[#15c3a7] whitespace-nowrap z-10"
                to="/login"
              >
                Get started
              </Link>
            </div>
          </div>


          {/* 모바일이 사라짐 */}
          <div className="col-span-6 md:block hidden">
            <Animation />

          </div>
        </div>
      </div>

      <div className="md:block hidden">

        {/* 슬라이더 자리 */}

      </div>
    </div>
  );
};

/* 메인 가장 위에 있는 애니메이션 */
function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: "100%", maxWidth: "600px" }}
    />
  );
}

export default Intro01;
