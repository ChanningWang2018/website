import React from 'react';

const rarityColor ={
    "common": "#656669",
    "rare": "#4e9fdd",
    "epic": "#b82feb",
    "legendary": "#dfc416"
}

export function Highlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: rarityColor[color],
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}