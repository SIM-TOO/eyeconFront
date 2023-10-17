import React, { useEffect, useState } from 'react';

const useUserIdCK = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = () => {
    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
      // 이메일이 비어있는 경우 오류 메시지 설정
      setErrorMessage('이메일을 입력하세요.');
    } else if (!emailPattern.test(email)) {
      // 이메일 형식이 올바르지 않은 경우 오류 메시지 설정
      setErrorMessage('올바른 이메일 형식이 아닙니다.');
    } else {
      // 유효한 이메일이면 오류 메시지를 지움
      setErrorMessage('');
    }
  };

  useEffect(() => {
    // 입력 필드에서 벗어날 때 validateEmail 함수 호출
    const emailInput = document.querySelector('input[name="email"]');
    emailInput.addEventListener('blur', validateEmail);

    // cleanup: remove event listener on component unmount
    return () => {
      emailInput.removeEventListener('blur', validateEmail);
    };
  }, []);

  return errorMessage;
};

export default useUserIdCK;
