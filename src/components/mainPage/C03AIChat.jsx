import React from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";
import lottieJson2 from "../../lottie/mobileLoading.json";
import AIchatStart from './technology/AIchatStart';
import AIchat from './technology/AIchat';
import useChat from '../../hook/mainPage/useChat';
import useChatChange from '../../hook/mainPage/useChatChange';

const C03AIChat = ({ handleButtonClick }) => {

    //시작시 기존 로컬 이미지 삭제
    localStorage.removeItem('resultImageData');

    // 시작시 메시지 입력 장소(isMine: false = AI 대답)
    const initialMessage = [
        {
            content: "안녕하세요! 챗봇 이콘입니다.",
            isMine: false,
        }, {
            content: "시선 분석을 원하시면 시선 분석 버튼을 클릭해주세요.",
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

    // start 컴포넌트와 AIChat 컴포넌트 변경
    //  체인지 함수
    const { showAIchatStart, showAIchat, changeButtonClick } = useChatChange();

    //  엔터키를 채팅 전송으로 할당
    const chatHandleKeyDown = (e) => {
        if (e.key === 'Enter') {
            chatHandleSubmit();
        }
    };

    return (
        <div className='font-Pretendard text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>

            {/* 모바일 버튼 */}
            <button className='block md:hidden col-span-12 md:col-span-0 p-3 rounded-lg bg-gray-300 text-black' onClick={() => handleButtonClick(4)}>
                시선 분석하기
            </button>

            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />

            {/* 로봇 */}
            {/* 로봇 또는 다른 컴포넌트 */}
            <div className="hidden block md:block col-span-3 grid grid-cols-3 p-3">
                <div className="col-span-3 mt-40" style={{ height: "325px" }} >
                    {waitingForResponse ? (
                        // 서버 응답을 기다리는 동안 보여줄 컴포넌트
                        <Loading />
                    ) : (
                        // 응답을 기다리지 않는 경우에는 로봇 컴포넌트를 보여줍니다.
                        <Robot />
                    )}
                </div>

                {/* PC화면시 등장하는 버튼 */}
                <div className="hidden block md:block col-span-3 flex justify-center items-center ">
                    {showAIchatStart && <></>}
                    {showAIchat && <button className='rounded-lg bg-gray-300 text-black p-3' style={{ position: "relative", top: "15px" }} onClick={() => handleButtonClick(4)}>
                        시선 분석하기
                    </button>}
                </div>
            </div>

            {/* 내용 박스 */}
            {showAIchatStart && <AIchatStart onButtonClick={changeButtonClick} />}
            {showAIchat && < AIchat messages={messages} />}
            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />

            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />

            {/* 내용 박스 */}
            <div className="text-base md:text-xl h-[100px] overflow-hidden col-span-12 md:col-span-10 bg-neutral-100 p-3 flex flex-col items-center justify-center rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] "
                style={{ filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))" }}>
                {showAIchatStart &&
                    <p className="text-center text-black animate-typing overflow-hidden md:whitespace-nowrap whitespace-pre-wrap">
                        서비스 시작 전 내 가게를 먼저 선택해주세요.
                    </p>}
                    
                    
                    
                {showAIchat &&
                    <div className="h-[100%] w-[100%] grid grid-cols-12 p-3 ">
                        <input
                            type="text"
                            className='col-span-11 bg-transparent focus:outline-none '
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
                }
            </div>

            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />
        </div>
    )
}

function Robot() {
    return (
        <Lottie
            className='translate3d-10-55-0 animate-wiggle'
            loop
            animationData={lottieJson}
            play
        />
    );
}

function Loading() {
    return (
        <Lottie
            loop
            animationData={lottieJson2}
            play
            option={{ speed: 0.7 }}
        />
    );
}

export default C03AIChat