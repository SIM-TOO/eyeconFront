import React, { useEffect, useState } from 'react';

const useUserPWCK = () => {
  const [errorMessage, setErrorMessage] = useState('  ');

  const validatePassword = () => {
    const passwordInput = document.querySelector('input[name="password"]');
    const password = passwordInput.value;

    // 간단한 비밀번호 유효성 검사. 실제로는 더 복잡한 검사를 수행해야 할 수 있습니다.
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

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
