import React, { useRef, useEffect, useState } from 'react'
import Lottie from "react-lottie-player";
import lottieJson from "../../../lottie/robotIcon.json";
import lottieJson2 from "../../../lottie/guesticon.json";


function AIchat({ messages, dependency }) {
    const chatRef = useRef(null);


    // 스크롤을 맨 아래 내리는 함수
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    //서버 데이터 도착 확인용
    console.log("서버 데이터 도착 확인 : ", { dependency })

    return (
        // 채팅창 내부
        <div ref={chatRef} className="h-[100%] md:h-[80%] col-span-12 md:col-span-7 flex flex-col overflow-y-auto md:mt-20">

            {/* 채팅창 */}
            {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'} mb-4 `}>

                    {/* 프로필 이미지  */}
                    {!msg.isMine && <RobotIcon className="rounded-full mr-3" />}

                    {/* 채팅 메시지 박스, 타이핑 효과  */}
                    <div className={`p-4 rounded-lg ${msg.isMine ? 'bg-gray-500 text-white max-w-[180px] md:max-w-[500px] text-left' : 'text-left bg-blue-500 text-white max-w-[200px] md:max-w-[500px]'}`}>

                        {/* 서버 데이터 도착 확인용  */}
                        {dependency ? (
                            msg.content
                        ) : (
                            <>
                                {index === messages.length - 1 ? (
                                    <AnimatedText text={msg.content} />
                                ) : (
                                    msg.content
                                )}
                            </>
                        )}
                    </div>

                    {/* 프로필 이미지 */}
                    {msg.isMine && <GuestIcon className="w-10 h-10 rounded-full ml-3" />}
                </div>
            ))}
        </div>
    )
}


function RobotIcon() {
    return (
        <Lottie
            className='w-[60px] h-[60px] ' // 크기를 10px로 조절하고, animate-pulse를 사용하여 느린 펄스 애니메이션을 적용
            loop
            animationData={lottieJson}
            play
        />
    );
}

function GuestIcon() {
    return (
        <Lottie
            className='w-[70px] h-[60px] ' // 크기를 10px로 조절하고, animate-pulse를 사용하여 느린 펄스 애니메이션을 적용
            loop
            animationData={lottieJson2}
            option={{ speed: 0.2 }}
            play
        />
    );
}



function AnimatedText({ text }) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    //글자 타이핑 애니메이션
    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            } else {
                clearInterval(timer);
            }
        }, 30); // 글자마다 속도 조절

        return () => {
            clearInterval(timer);
        };
    }, [text, currentIndex]);

    return displayedText
}


export default AIchat