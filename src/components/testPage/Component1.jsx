import React from 'react';

const Component1 = ({ handleButtonClick }) => {
  return (

    <div>
    

      <div className="flex justify-center">
        <div className="border border-[#190e61]" style={{ marginTop: '45%' }}>
          <button
            className="text-5xl font-bold text-[#190e61]"
            onClick={() => handleButtonClick(2)}
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component1;