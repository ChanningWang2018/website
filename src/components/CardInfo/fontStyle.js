import React from 'react';

const rarityColor ={
    "普通": "#656669",
    "稀有": "#4e9fdd",
    "史诗": "#b82feb",
    "传说": "#dfc416"
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