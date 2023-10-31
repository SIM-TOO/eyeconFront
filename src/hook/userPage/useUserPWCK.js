import { useEffect, useState } from 'react';

const useUserPWCK = () => {
  const [errorMessage, setErrorMessage] = useState('  ');

  const validatePassword = () => {
    const passwordInput = document.querySelector('input[name="password"]');
    const password = passwordInput.value;

    // 비밀번호 유효성검사 로직
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // 출력 메세지
    if (password === '') {
      setErrorMessage('비밀번호를 입력하세요.');
    } else if (!passwordPattern.test(password)) {
      setErrorMessage('비밀번호는 최소 8자리 길이이며, 문자와 숫자를 포함해야 합니다.');
    } else {
      setErrorMessage('');
    }
  };

  useEffect(() => {
    const passwordInput = document.querySelector('input[name="password"]');
    passwordInput.addEventListener('blur', validatePassword);

    return () => {
      passwordInput.removeEventListener('blur', validatePassword);
    };
  }, []);

  return errorMessage;
};

export default useUserPWCK;
