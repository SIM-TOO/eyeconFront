import { useEffect, useState } from 'react';
import axios from 'axios';

const useChat = (initialMessage) => {
  const [inputValue, setInputValue] = useState('');
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [messages, setMessages] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      if (initialMessage) {
        setMessages(initialMessage);
      }
      setInitialized(true);
    }
  }, [initialized, initialMessage]);

  const chatHandleSubmit = async () => {
    // 현재 사용자가 입력한 메시지 저장
    const newMessage = { content: inputValue, isMine: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue('');
    console.log(inputValue);

    // 로딩 중 표시
    const loadingMessage = {
      content: '로딩중...',
      isMine: false,
    };
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);
    setWaitingForResponse(true);
    axios.defaults.withCredentials = false;
    try {
      // 서버로 메시지를 보냅니다.
      // const urlf = process.env.REACT_APP_MASTER_URL1;
      const response = await axios.post(`http://localhost:5000/consult`, {
        'role': 'user',
        content: inputValue, // 메시지 내용을 서버로 보냅니다.
      });
      console.log(response);

      // 서버 응답 데이터를 가져옵니다.

      const serverResponse = response.data.choices?.[0]?.message;

      // 테스트용
      // const serverResponse = {
      //     content: "대답중",
      // };

      console.log(serverResponse);

      const serverMessage = {
        content: serverResponse?.content,
        isMine: false,
      };

      // 서버 응답을 받으면 "로딩 중..." 메시지를 삭제
      setMessages((prevMessages) => prevMessages.filter((message) => message !== loadingMessage));
      setWaitingForResponse(false);

      console.log(waitingForResponse)
      // 서버 응답
      setMessages((prevMessages) => [...prevMessages, serverMessage]);

    } catch (error) {
      console.error('메시지 전송 중 오류 발생:', error);
      // 오류가 발생하면 "로딩 중..." 메시지를 삭제
      setMessages((prevMessages) => prevMessages.filter((message) => message !== loadingMessage));
      setWaitingForResponse(false);
    }

    // 입력 필드를 초기화합니다.
    setInputValue('');
  };

  return {
    inputValue,
    setInputValue,
    waitingForResponse,
    messages,
    chatHandleSubmit,
  };
}

export default useChat