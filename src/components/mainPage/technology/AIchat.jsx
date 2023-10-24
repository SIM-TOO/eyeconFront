import React, { useRef, useEffect } from 'react'

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
            className="h-[100%] col-span-12 md:col-span-5 flex flex-col overflow-y-auto max-h-[500px]"
        >
            {/* 채팅창 */}
            {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'} mb-4`}>
                    
                    {/* 프로필 이미지  */}
                    {!msg.isMine && <img src="https://i.ibb.co/16HBSrZ/Ellipse-455.png" alt="Profile" className="w-10 h-10 rounded-full mr-3" />}

                    {/* 채팅 메시지 박스 */}
                    <div className={`p-3 rounded-lg ${msg.isMine ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                        {msg.content}
                    </div>

                    {/* 프로필 이미지 */}
                    {msg.isMine && <img src="https://i.ibb.co/16HBSrZ/Ellipse-455.png   " alt="Profile" className="w-10 h-10 rounded-full ml-3" />}
                    
                </div>
            ))}
        </div>
    )
}

export default AIchat