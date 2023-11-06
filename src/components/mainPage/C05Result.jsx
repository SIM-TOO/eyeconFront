import React, { useEffect, useState } from 'react';
import AIchat from './technology/AIchat';
import useChat from '../../hook/mainPage/useChat';
import { Link } from 'react-router-dom';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/eyeTracking.json";

const C05Result = ({ handleButtonClick }) => {

  // 시작시 메시지 입력 장소 .
  const initialMessage = [
    {
      content: "안녕하세요! 챗봇 이콘입니다.",
      isMine: false,
    },
    {
      content: "시선 분석 결과를 출력하겠습니다.",
      isMine: false,
    },
  ];

  //  채팅 보내기 함수
  const {
    inputValue,
    setInputValue,
    waitingForResponse,
    messages,
    chatHandleSubmit,
  } = useChat(initialMessage);

  console.log(waitingForResponse)


  // 엔터키 할당
  const chatHandleKeyDown = (e) => {
    if (e.key === 'Enter') {
      chatHandleSubmit();
    }
  };

  // 로컬 스토리지에서 결과 이미지 데이터 가져오기
  const [isLoading, setIsLoading] = useState(true);

  const [resultImageData, setResultImageData] = useState(null); // 혹은 다른 기본값 설정

  useEffect(() => {
    // 1초에 한 번씩 실행되는 코드
    const interval = setInterval(() => {
      // 로컬 스토리지에서 데이터 가져오기
      const storedResultImageData = localStorage.getItem('resultImageData');
      console.log("데이터 받아짐?", storedResultImageData);
      if (storedResultImageData != null) {
        // 로컬 스토리지에 데이터가 존재하면 이미지 데이터 설정
        setResultImageData(storedResultImageData);
        setIsLoading(false); // 데이터가 도착한 후에 로딩 상태 해제
        clearInterval(interval); // 데이터가 도착한 후에 interval 종료
      }
    }, 1000); // 1초마다 실행

    // 컴포넌트 언마운트 시에 interval 정리
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='font-Pretendard text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>

      {/* 모바일 이동하기 버튼 */}
      <Link to="/result"  >
      <button className="block md:hidden col-span-10 md:col-span-0 inline-block text-white bg-gray-400 rounded-lg text-sm px-5 py-2.5 text-center mb-2" onClick={() => handleButtonClick(4)}>
                <div className='inline-block mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="animate-pulse w-[30px] h-[30px] inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <span className='inline-block text-base text-white whitespace-nowrap'>시선분석 바로가기<img className="animate-pulse inline-block ml-2 w-3" src="https://i.ibb.co/0Cbr629/icon-arrow-right-1.png" /></span>
            </button>
      </Link>


      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1 " />

      {/* 결과 이미지 */}
      <div className="col-span-3 grid grid-cols-3 p-3">

        {/* 결과페이지 */}
        <div className="hidden md:block col-span-3" style={{ height: "350px" }}>
          {isLoading ? (
            <Loading />
          ) : (
            // 데이터를 가져온 후 보여줄 이미지
            <img src={resultImageData} alt="resultImage" />
          )}
        </div>
        {/*PC화면 결과 페이지 이동 링크 */}
        <Link to="/result">
        <div className="fixed hidden md:block col-span-3 flex justify-center items-center" style={{ position: 'absolute', top: '515px', left: '-350px', width: '100%', zIndex: 999 }}>
          <button className="hover:scale-110 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <img src="https://i.ibb.co/3RMdL8K/heatmap-1.png" className="w-[40px] mr-3" />
            <span className='inline font-gray-800 text-lg whitespace-nowrap'>결과페이지 바로가기</span><img className="ml-2 w-4" src="https://i.ibb.co/sJJB3Nh/icon-arrow-right.png" />
          </button>
        </div>
        </Link>
      </div>

      {/* 내용 박스 */}
      {/* AI 채팅 의존성 배열 추가 */}
      < AIchat messages={messages} dependency={waitingForResponse} />

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />

      {/* 채팅 입력 박스 구간 */}
      <div className="hidden md:block col-span-0 md:col-span-1 " />
      <div className="text-xl h-[100px] col-span-12 md:col-span-10 bg-neutral-100 p-3 flex flex-col items-center justify-center rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]  "
        style={{ filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))" }}>
        <div className="h-[100%] w-[100%] grid grid-cols-12 p-3">
          <input
            type="text"
            className='col-span-10 md:col-span-11 bg-transparent focus:outline-none'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={chatHandleKeyDown}
          />
          <button
            className='hover:scale-110 col-span-1 w-12 h-12 rounded-full bg-[#15c3a7] flex items-center justify-center'
            onClick={chatHandleSubmit}
          >
            <img src="https://i.ibb.co/0YLQ66v/Vector.png" alt="Vector" border="0" />
          </button>
        </div>
      </div>
      <div className="hidden md:block col-span-0 md:col-span-1" />
    </div>
  )
}
function Loading() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      option={{ speed: 0.7 }}
    />
  );
}
export default C05Result