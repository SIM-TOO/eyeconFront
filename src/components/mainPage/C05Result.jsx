import React from 'react';
import AIchat from './technology/AIchat';
import useChat from '../../hook/mainPage/useChat';

const C05Result = ({ handleButtonClick }) => {

  // 시작시 메시지 입력 장소 .
  const initialMessage = '결과 페이지 입니다.';

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

  return (
    <div className='text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>

      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1 " />

      {/* 결과 이미지 */}
      <div className="col-span-3">

        결과이미지

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



      {/* 임시버튼 */}
      <button
        className="col-span-12"
        onClick={() => handleButtonClick(1)}
      >
        처음 페이지 이동 버튼 (임시버튼임 나중에 삭제 할 예정)
      </button>
      {/* 임시버튼 */}
    </div>
  )
}

export default C05Result