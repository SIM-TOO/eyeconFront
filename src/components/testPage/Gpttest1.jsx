import React, { useState } from 'react'
import axios from 'axios';

const Gpttest1 = () => {

    const [content, setContent] = useState("");

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
            axios.post(`http://localhost:5000/consult`, chat)
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
        </div>
    )
}

export default Gpttest1