import axios from 'axios';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAccessCK } from '../../store/accessCKSlice';
import { TokenRefresherContext } from '../../context/TokenRefresherContext';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'warning',
        title: '입력 정보 확인',
        text: '이메일과 비밀번호를 다시 입력해주세요.',
      });
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
        Swal.fire({
          icon: 'error',
          title: '로그인 실패',
          text: '오류가 발생했습니다. 다시 시도해주세요.',
        });
      }

      navigate("/main")
    }).catch(function (error) {
      //  console.log('=================error================');
      //  console.log(error.response.status);
      //  console.log(error.response.data.message);
      //  console.log(error);
      // 아이디가 틀렸을때(존재하지 않는)
      if (error.response.data.message === 'The user does not exist') {
        Swal.fire({
          icon: 'error',
          title: '로그인 오류',
          text: '존재하지 않는 회원입니다.아이디를 확인해주세요.',
        });
      } else if (error.response.data.message === 'password error') {
        Swal.fire({
          icon: 'error',
          title: '로그인 오류',
          text: '비밀번호를 다시 확인해주세요.',
        });
      }

    })

  };

  return { formRef, handleSubmit };
};

export default useUserLogin;