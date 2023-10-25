import axios from 'axios';
import { useState } from 'react';

const useChatChange = () => {
    const [showAIchatStart, setAIchatStart] = useState(true);
    const [showAIchat, setAIchat] = useState(false);

    const changeButtonClick = () => {
        setAIchatStart(false);
        setAIchat(true);

        
        // 데이터 전송 함수 사용할때 주석 풀것

        // sendDataToServer(); 
    };

    // 데이터 전송 함수 
    const sendDataToServer = async () => {
        const url = process.env.REACT_APP_MASTER_URL;
        axios.defaults.withCredentials = true;
        try {
            await axios.get(`${url}/flask/callData`);
        } catch (error) {
            console.error("에러 내용:", error);
        }
    };


    return {
        showAIchatStart,
        setAIchatStart,
        showAIchat,
        setAIchat,
        changeButtonClick,
    };
};

export default useChatChange;
