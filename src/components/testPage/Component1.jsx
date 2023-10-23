import React from 'react';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/robot.json";


const Component1 = ({ handleButtonClick }) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ width: '100%', height: '100%' }}
    >
      {/* 로봇 */}
        <Robot />


      <button
        className="text-2xl md:text-5xl font-bold text-[#190e61] border border-[#190e61] border-2 p-3 md:p-5 "
        style={{ width: '60%', maxWidth: '400px' }}
        onClick={() => handleButtonClick(2)}
      >
        START
      </button>
    
    </div>
  );
};

function Robot() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    
      className="md:w-500 md:h-500 w-300 h-300" 
    />
  );
}

export default Component1;