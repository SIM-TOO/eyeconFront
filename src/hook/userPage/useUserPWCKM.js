import { useState, useEffect } from 'react';

const useUserPWCKM = () => {
  const [PWErrorMessage, setPWErrorMessage] = useState(' ');

  const handlePasswordMatch = () => {
    // 입력된 비밀번호 가져오기
    const passwordInput = document.querySelector('input[name="password"]');
    const password = passwordInput.value;

    // 입력된 비밀번호 확인용 가져오기
    const passwordCheckInput = document.querySelector('input[name="passwordCheck"]');
    const passwordCheck = passwordCheckInput.value;

    // 유저 확인용 메세지
    if (passwordCheck && password === passwordCheck) {
      setPWErrorMessage('');
    } else {
      setPWErrorMessage('비밀번호가 일치하지 않습니다.');
    }
  };

  useEffect(() => {
    const passwordInput = document.querySelector('input[name="passwordCheck"]');
    passwordInput.addEventListener('blur', handlePasswordMatch);

    return () => {
      passwordInput.removeEventListener('blur', handlePasswordMatch);
    };
  }, []);

  return PWErrorMessage;
};

export default useUserPWCKM;
