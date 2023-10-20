import React from 'react';

const Component2 = ({ handleButtonClick }) => {
  return (
    <div>
      <h1>Component 2</h1>
      <button onClick={() => handleButtonClick(3)}>Go to Component 3</button>
    </div>
  );
};

export default Component2;