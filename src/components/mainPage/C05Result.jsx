import React, { useState } from 'react';
import AIchat from './technology/AIchat';


const C05Result = ({ handleButtonClick }) => {
  
  const [inputValue, setInputValue] = useState('');
 
  // 시작시 기본 메세지 출력
  const [messages, setMessages] = useState([{
    content: '결과 이미지가 출력되었습니다.',
    isMine: false,
  }]);

  const chatHandleKeyDown = (e) => {
    if (e.key === 'Enter') {
      chatHandleSubmit();
    }
  };

  const chatHandleSubmit = async () => {
    
};
  

  return (
    <div className='text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>


      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1 " />

      {/* 결과 이미지 */}
      <div className="hidden md:block md:col-span-3">
        결과이미지
      </div>


      {/* 내용 박스 */}
      < AIchat messages={messages} />
      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />


      {/* 여백용 박스 */}
      <div className="hidden md:block col-span-0 md:col-span-1" />


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