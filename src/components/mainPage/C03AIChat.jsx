import React, { useState } from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";
import AIchatStart from './technology/AIchatStart';
import AIchat from './technology/AIchat';
import axios from 'axios';

const C03AIChat = ({ handleButtonClick }) => {

    // start 컴포넌트와 AIChat 컴포넌트 변경
    const [showAIchatStart, setAIchatStart] = useState(true);
    const [showAIchat, setAIchat] = useState(false);
    const changeButtonClick = () => {
        setAIchatStart(false);
        setAIchat(true);
    };

    const [inputValue, setInputValue] = useState('');
    // 시작시 기본 메세지 출력
    const [messages, setMessages] = useState([]);

    //  채팅 보내기
    const chatHandleSubmit = async () => {
        // 현재 사용자가 입력한 메시지 저장
        const newMessage = { content: inputValue, isMine: true };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        console.log(inputValue);

        try {
            // 서버로 메시지를 보냅니다.
            // const response = await axios.post('http://localhost:5000/send-message', {
            //     'role': 'user',
            //     content: inputValue, // 메시지 내용을 서버로 보냅니다.
            // });

            // 서버에서 받은 응답을 처리하고 메시지 목록에 추가할 수 있습니다.

            // 서버 응답 데이터를 가져옵니다.
            //const serverResponse = response.choices?.[0]?.message;
            const serverResponse = {
                content: "대답중",
            };
            console.log(serverResponse);

            const serverMessage = {
                content: serverResponse.content,
                isMine: false,
            };

            // 서버 응답
            setMessages((prevMessages) => [...prevMessages, serverMessage]);
        } catch (error) {
            console.error('메시지 전송 중 오류 발생:', error);
        }

        // 입력 필드를 초기화합니다.
        setInputValue('');
    };


    // 엔터키 입력시 채팅 전송 버튼으로 할당
    const chatHandleKeyDown = (e) => {
        if (e.key === 'Enter') {
            chatHandleSubmit();
        }
    };

    return (
        <div className='text-center items-center justify-center container mx-auto grid grid-cols-12 p-3 gap-4 max-w-screen-xl h-[100%]'>

            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />
            {/* 로봇 */}
            <div className=" hidden md:block md:col-span-5">
                <Robot />
            </div>
            {/* 내용 박스 */}
            {showAIchatStart && <AIchatStart onButtonClick={changeButtonClick} />}
            {showAIchat && < AIchat messages={messages} />}
            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />


            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />

            {/* 내용 박스 */}
            <div className="h-[100px] col-span-12 md:col-span-10 bg-neutral-100 p-3 flex flex-col items-center justify-center rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] "
                style={{ filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))" }}>
                {showAIchatStart &&
                    <p className="text-center text-black">
                        서비스를 위해 챗봇 시로와 함께 대화를 시작해보세요.
                    </p>}
                {showAIchat &&
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
                }
            </div>

            {/* 여백용 박스 */}
            <div className="hidden md:block col-span-0 md:col-span-1" />





            {/* 임시버튼 */}
            <button
                className="col-span-12"
                onClick={() => handleButtonClick(4)}
            >
                (임시버튼임 나중에 삭제 할 예정)
            </button>
            {/* 임시버튼 */}




        </div>
    )
}

function Robot() {
    return (
        <Lottie
            className='translate3d-10-55-0 '
            loop
            animationData={lottieJson}
            play
        />
    );
}

export default C03AIChat