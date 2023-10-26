import React from "react";
import Header from "./HeaderAfter";
import MyPage from './myPage/MyFixTest'


function Mypage() {
  return (
    <div
      className="h-screen md:block hidden"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <MyPage />
    </div>
  );
}

export default Mypage;
