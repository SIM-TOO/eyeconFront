import React from 'react';

const useDarkOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity as needed
        zIndex: 999, // Ensure the overlay is on top of everything
      }}
    >
      {/* You can add loading spinners or messages here if desired */}
    </div>
  );
};

export default useDarkOverlay;