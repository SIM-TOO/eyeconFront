import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/login.json";
import lottieJson3 from "../../lottie/loginAni.json";

function UserImage() {
  return (
    <div>
      <div className="hidden md:flex items-center ml-40 ">
        <Lottie
          loop
          animationData={lottieJson}
          play
          option={{ speed: 0.2 }}
          style={{ width: "100%", maxWidth: "1000px" }}
          className="absolute top-20 left-0"
        />
      </div>
      <div className="md:hidden items-center ml-40">
        <Lottie
          loop
          animationData={lottieJson3}
          play
          option={{ speed: 0.2 }}
          style={{ width: "100%", maxWidth: "250px" }}
          className="absolute left-10"
        />
      </div>
    </div>
  );
}

export default UserImage;
