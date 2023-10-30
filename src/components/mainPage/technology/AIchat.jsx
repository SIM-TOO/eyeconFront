import React, { useRef, useEffect } from 'react'
import Lottie from "react-lottie-player";
import lottieJson from "../../../lottie/robotIcon.json";

const AIchat = ({ messages }) => {
    const chatRef = useRef(null);

    // 스크롤을 맨 아래 내리는 함수
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        // 채팅창 내부
        <div
            ref={chatRef}
            className="h-[80%] col-span-12 md:col-span-7 flex flex-col overflow-y-auto max-h-[450px] mt-20"
        >
            {/* 채팅창 */}
            {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'} mb-4 `}>

                    {/* 프로필 이미지  */}
                    {!msg.isMine && < RobotIcon className="rounded-full mr-3" />}

                    {/* 채팅 메시지 박스 */}
                    <div className={`p-4 rounded-lg ${msg.isMine ? 'bg-gray-300 text-black' :'bg-blue-500 text-white'  }`}>
                        {msg.content}
                    </div>

                    {/* 프로필 이미지 */}
                    {msg.isMine && <img src="https://i.ibb.co/16HBSrZ/Ellipse-455.png   " alt="Profile" className="w-10 h-10 rounded-full ml-3" />}

                </div>
            ))}
        </div>
    )
}


function RobotIcon() {
    return (
        <Lottie
            className='w-[60px] h-[60px] animate-pulse' // 크기를 10px로 조절하고, animate-pulse를 사용하여 느린 펄스 애니메이션을 적용
            loop
            animationData={lottieJson}
            play
        />
    );
}

export default AIchat
