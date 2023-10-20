import React, { useState } from 'react'
import axios from 'axios';

const Gpttest1 = () => {

    const [content, setContent] = useState("");
    const [response, setResponse] = useState(""); // 추가: 서버 응답을 저장할 상태
    console.log(response);
    const onContentHandler = (e) => {
        setContent(e.target.value);
    };

    const getGptJason = async (e) => {
        e.preventDefault();
        console.log("채팅내용:",content);
        const chat = {
            'role': 'user',
            content: content
        }

        try {
            const res = await axios.post(`http://localhost:5000/consult`, chat); // 수정: 응답을 변수에 저장
            setResponse(res.data); // 추가: 응답을 상태에 저장
            // .then((res)=>{
            //     console.log();
            // })
            
        } catch (error) {
            console.error("오류 발생:", error);
        }
    }

    return (
        <div>
            <div>gpttest</div>
            <div>
                <input type="text" name="content" value={content} onChange={onContentHandler} /> 
                <button onClick={getGptJason}>flask 전송</button>
            </div>
            <div>{response?.choices?.[0]?.message?.content}</div> {/* 추가: 서버 응답을 화면에 표시 */}
        </div>
    )
}

export default Gpttest1