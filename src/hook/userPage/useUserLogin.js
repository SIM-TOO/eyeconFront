import { useRef } from 'react';

const useUserLogin = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
      alert('이메일과 비밀번호를 입력하세요.');
      return; 
    }

    // 확인용 콘솔log
    // console.log(email);
    // console.log(password);

    // 여기서 DB확인용 로직 작성하면 될듯 
  };

  return { formRef, handleSubmit };
};

export default useUserLogin;
