import axios from 'axios';
import { useRef } from 'react';
import App from './../../App';
import { useNavigate } from 'react-router';

const useUserLogin = () => {
  /* axios.defaults.headers['Access-Control-Allow-Origin'] = '*'; */
  axios.defaults.withCredentials=true;
 
  const formRef = useRef(null);
  const navigate = useNavigate(); // 추가

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
    const loginData = {
      email : email,
      pw : password
    }
    // 로그인 코드
    axios.post("http://localhost:8023/EyeconSpring/auth/login",loginData
    ).then(function(res){
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      navigate("/main")
    })
    };

  return { formRef, handleSubmit };
};

export default useUserLogin;