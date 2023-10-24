import React from "react";
import Header from "./HeaderAfter";
import MyFix from "./myPage/MyFix";

function Mypage() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/Q8M7ycH/Kakao-Talk-20231018-121457122.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />

      <MyFix />
    </div>
  );
}

export default Mypage;
