import { useState, useEffect } from 'react';

const useUserPWCKM = () => {
  const [PWErrorMessage, setPWErrorMessage] = useState(' ');

  const handlePasswordMatch = () => {
    const passwordInput = document.querySelector('input[name="password"]');
    const password = passwordInput.value;
    
    const passwordCheckInput = document.querySelector('input[name="passwordCheck"]');  // Corrected selector
    const passwordCheck = passwordCheckInput.value;

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
