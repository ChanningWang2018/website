import React, { useState } from 'react';

function ToggleComponent({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show More'}
      </button>
      {isVisible && children}
    </div>
  );
}

export default ToggleComponent;