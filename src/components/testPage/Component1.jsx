import React from 'react';

const Component1 = ({ handleButtonClick }) => {
  return (
    <div>
      <h1>Component 1</h1>
      <button onClick={() => handleButtonClick(2)}>Go to Component 2</button>
    </div>
  );
};

export default Component1;