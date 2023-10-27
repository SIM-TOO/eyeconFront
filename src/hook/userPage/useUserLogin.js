import axios from 'axios';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAccessCK } from '../../store/accessCKSlice';
import { TokenRefresherContext } from '../../context/TokenRefresherContext';

const useUserLogin = () => {
  /* axios.defaults.headers['Access-Control-Allow-Origin'] = '*'; */
  const url = process.env.REACT_APP_MASTER_URL;
  axios.defaults.withCredentials = true;

  const formRef = useRef(null);
  const navigate = useNavigate(); // 추가
  const dispatch = useDispatch();
  // token재발급을 위한 interceptors
  const TokenRefresher = useContext(TokenRefresherContext); 

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
      email: email,
      pw: password
    }
    // 로그인 코드
    TokenRefresher.post(`${url}/auth/login`, loginData
    ).then(function (res) {
      // console.log('====================================');
      // console.log(res);
      // console.log('====================================');
      // 로그인이 성공하면 res.data에 "Exist"라는 문자열이 반환/ 이걸로 로그인 됐는지 안됐는지 판별하면 됨
      // console.log(res.data);
      const responseData = res.data; // res.data를 변수에 저장

      // console.log(responseData); // responseData를 사용하여 로그 출력

      if (responseData === "Exist") {
        // 로그인이 성공한 경우
        // 리덕스 스토어에 데이터 저장
        
        dispatch(setAccessCK(responseData));

        // 다른 작업 수행
        navigate("/main");
      } else {
        // 로그인 실패
        alert("로그인 실패");
      }

      navigate("/main")
    }).catch(function (error) {
      //  console.log('=================error================');
      //  console.log(error.response.status);
      //  console.log(error.response.data.message);
      //  console.log(error);
      // 아이디가 틀렸을때(존재하지 않는)
      if (error.response.data.message === 'The user does not exist') {
        alert("존재하지 않는 회원");
        // 비밀번호가 틀렸을때
      } else if (error.response.data.message === 'password error') {
        alert("비밀번호가 틀림");
      }

    })

  };

  return { formRef, handleSubmit };
};

export default useUserLogin;