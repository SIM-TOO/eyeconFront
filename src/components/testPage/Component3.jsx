import React from 'react';

const Component3 = ({ handleButtonClick }) => {
  return (
    <div>
      <h1>Component 3</h1>
      <button onClick={() => handleButtonClick(1)}>Go back to Component 1</button>
    </div>
  );
};

export default Component3;