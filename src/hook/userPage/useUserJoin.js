import { useRef } from 'react';
import axios from 'axios';


const useUserJoin = (IdErrorMessage, PWErrorMessage, PWMErrorMessage) => {
  const formRef = useRef(null);
  const url = process.env.REACT_APP_MASTER_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    // 로컬 스토리지와 오류 메시지 검사 로직
    if (IdErrorMessage === "") {
      if (IdErrorMessage !== "" || PWErrorMessage !== "" || PWMErrorMessage !== "") {
        alert("가입 정보를 확인 후 입력해주세요");
        return;
      } else {
        localStorage.clear();
      }
    }

    // 데이터 배열로 보관
    const dataToSend = {
      email: formData.get('email'),
      pw : formData.get('password'),
      category: formData.get('category'),
      storeName: formData.get('storeName'),
      place1: formData.get('place1'),
      place2: formData.get('place2')
    };

    console.log("회원가입 정보 확인", dataToSend);
    console.log("이메일 확인", formData.get('email'));

    // POST 요청 방식
    try {
      axios.post(`${url}/user/join`, dataToSend);
      // window.location.href = '/login'
    } catch (error) {
      console.error("전송을 실패 했습니다 에러 내용 :", error);
    }
  };

  return { formRef, handleSubmit };
};

export default useUserJoin;
