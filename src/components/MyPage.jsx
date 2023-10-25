import React from "react";
import Header from "./HeaderAfter";
import Test from './myPage/MyFixTest'

function Mypage() {
  return (
    <div
      className="h-screen md:block"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Test />
    </div>
  );
}

export default Mypage;
