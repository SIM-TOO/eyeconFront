import { useRef } from 'react';

const useUserJoin = () => {
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
    const category = formData.get('category');
    const storeName = formData.get('storeName');
    const place1 = formData.get('place1');
    const place2 = formData.get('place2');

    // 확인용 콘솔log
    // console.log(email);
    // console.log(password);
    // console.log(category);
    // console.log(storeName);
    // console.log(place1);
    // console.log(place2);

    // 여기서 DB확인용 로직 작성하면 될듯? ^^
  };

  return { formRef, handleSubmit };
};

export default useUserJoin;
