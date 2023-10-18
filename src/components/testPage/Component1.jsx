import React from 'react';

const Component1 = ({ handleButtonClick }) => {
  return (

    <div
    className="flex flex-col justify-center items-center"
    style={{ width: '100%', height:"100%" }}
    >



      <button
        className="text-2xl md:text-5xl font-bold text-[#190e61] border border-[#190e61] border-2 p-3 md:p-5"
        style={{ width: '60%', maxWidth: '400px' }}
        onClick={() => handleButtonClick(2)}
      >
        START
      </button>





    </div>

  );
};

export default Component1;