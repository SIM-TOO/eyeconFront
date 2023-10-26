import React from 'react';
import AIchat from './technology/AIchat';
import useChat from '../../hook/mainPage/useChat';
import { Link } from 'react-router-dom';

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
    messages,
    chatHandleSubmit,
  } = useChat(initialMessage);

  // 엔터키 할당
  const chatHandleKeyDown = (e) => {
    if (e.key === 'Enter') {
      chatHandleSubmit();
    }
  };

  // 로컬 스토리지에서 결과 이미지 데이터 가져오기
  const resultImage = localStorage.getItem('resultImageData');

  return (
    <div className='text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>
      <div className="col-span-12 " />


      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1 " />

      {/* 결과 이미지 */}
      <div className="col-span-3 grid grid-cols-12 h-[100%]">
        <div className="col-span-12">
          <img src={resultImage} alt="" />
        </div>

        <div className="col-span-12 flex justify-center items-center h-full">
          <Link to="/result" className="p-3 rounded-lg bg-gray-300 text-black">
            결과페이지 이동하기
          </Link>
        </div>
      </div>


      {/* 내용 박스 */}
      < AIchat messages={messages} />
      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />


      {/* 채팅 입력 박스 구간 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />
      <div className="h-[100px] col-span-12 md:col-span-10 bg-neutral-100 p-3 flex flex-col items-center justify-center rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] "
        style={{ filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))" }}>
        <div className="h-[100%] w-[100%] grid grid-cols-12 p-3">
          <input
            type="text"
            className='col-span-11 bg-transparent focus:outline-none'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={chatHandleKeyDown}
          />
          <button
            className='col-span-1 w-12 h-12 rounded-full bg-[#15c3a7] flex items-center justify-center'
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

export default C05Result