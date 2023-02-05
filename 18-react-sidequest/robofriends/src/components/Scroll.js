import React from 'react';

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '800px',
        padding: '2px',
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
