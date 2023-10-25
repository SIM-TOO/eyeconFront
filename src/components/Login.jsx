import React, { useEffect } from "react";
import UserHeader from "./userPage/UserHeader";
import UserImage from "./userPage/UserImage";
import useUserLogin from "../hook/userPage/useUserLogin";
import Lottie from "react-lottie-player";
import lottieJson from "../lottie/login.json";
import { Link } from "react-router-dom";

const Login = () => {

  // 토큰있는 지 확인하는 메소드
  const jwt = () => {
    const cookies = document.cookie.split('; ');
    console.log('1번 : ', cookies);
    const accessToken = cookies.find(row => row.startsWith('accessToken='));
    console.log('2번 : ', accessToken);
    if (accessToken) {
      alert('토큰있어요')
    }
  };

  useEffect(() => {
    jwt();
  }, []);



  const { formRef, handleSubmit } = useUserLogin();

  return (
    <div className="dark:bg-gray-800 dark:h-screen">
      <UserHeader />
      <main className="container my-10 p-5 mx-auto font-Pretendard dark:bg-gray-800 ">
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="relative">
            <Link to="/#">
              <img
                src="https://i.ibb.co/BCP0xW5/join.png"
                className="absolute top-0 left-0 z-10 hidden md:block"
              />
            </Link>
            <UserImage />
          </div>
          <div className="mx-auto lg:mt-0 mt-60 lg:p-10 lg:min-w-[600px] p-0 min-w-[300px] dark:text-[#F2F2F2]">
            <p className="text-3xl font-medium text-left text-black p-3 dark:text-[#F2F2F2]">
              Sign in
            </p>

            {/* from 태그 시작 */}
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* 아이디 입력 */}
              <div className="mb-4">
                <div className="bg-[#f3fffd] rounded-lg p-3 w-[340px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="bg-[#f3fffd] placeholder-[#15c3a7] outline-none focus:outline-none w-full text-[15px] text-[#15c3a7] text-[#15c3a7]::placeholder"
                  />
                </div>
              </div>

              {/* 비밀번호 입력 */}
              <div className="mb-4">
                <div className="bg-[#f3fffd] rounded-lg w-[340px] p-3 relative flex justify-between">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="placeholder-[#15c3a7] bg-[#f3fffd] outline-none focus:outline-none text-[15px] text-[#15c3a7] flex-1"
                  />
                </div>
              </div>

              {/* 버튼 */}
              <div className="mb-4">
                <button
                  type="submit"
                  className="rounded-lg bg-[#15c3a7] p-3 text-base font-medium text-white w-[340px] hover:bg-[#128d82] active:bg-[#0d6b59] transition-transform transform duration-100 ease-in"
                >
                  Login
                </button>
              </div>
            </form>
            {/* form 태그 완료 */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
