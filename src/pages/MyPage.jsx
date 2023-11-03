import React from "react";
import Header from "../components/HeaderAfter";
import MyPage from '../components/myPage/MyFixTest'



function Mypage() {
  return (
    <div className="h-screen bg-no-repeat bg-cover md:bg-[url('https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png')] dark:bg-[url('https://i.ibb.co/PD92ZQZ/1.png')]">
      <Header />
      <MyPage />
    </div>
  );
}

export default Mypage;
