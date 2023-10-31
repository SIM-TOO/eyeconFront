import { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const useUserJoin = (IdErrorMessage, PWErrorMessage, PWMErrorMessage) => {
  const formRef = useRef(null);
  const url = process.env.REACT_APP_MASTER_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const dong =localStorage.getItem('dong');
    // 로컬 스토리지와 오류 메시지 검사 로직
    if (IdErrorMessage === "") {
      if (IdErrorMessage !== "" || PWErrorMessage !== "" || PWMErrorMessage !== "") {
        Swal.fire({
          icon: 'warning',
          title: '입력 정보 오류',
          text: '가입 정보를 다시 확인해주세요.',
        });
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
      place2: formData.get('place2'),
      dong: dong
    };

    console.log("회원가입 정보 확인", dataToSend);
    console.log("이메일 확인", formData.get('email'));

    // POST 요청 방식
    try {
      axios.post(`${url}/user/join`, dataToSend);
      localStorage.clear();
      window.location.href = '/login'
    } catch (error) {
      console.error("전송을 실패 했습니다 에러 내용 :", error);
      localStorage.clear();
    }
  };

  return { formRef, handleSubmit };
};

export default useUserJoin;
