import { useRef } from 'react';
import axios from 'axios';

const useUserJoin = () => {
  const formRef = useRef(null);
  const url = process.env.REACT_APP_MASTER_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    // 데이터 배열로 보관
    const dataToSend = {
      email: formData.get('email'),
      password: formData.get('password'),
      category: formData.get('category'),
      storeName: formData.get('storeName'),
      place1: formData.get('place1'),
      place2: formData.get('place2')
    };

    console.log("회원가입 정보 확인", dataToSend);

    // POST 요청 방식
    try {
      axios.post(`${url}join`, dataToSend);
    } catch (error) {
      console.error("전송을 실패 했습니다 에러 내용 :", error);
    }
  };

  return { formRef, handleSubmit };
};

export default useUserJoin;
